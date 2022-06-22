import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import client from '../../client'
import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
import Image from 'next/image'

function urlFor (source) {
  return imageUrlBuilder(client).image(source).url()
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <Image
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value)}
          width="600"
          height="400"
        />
      )
    }
  }
}



const Post = ({post}) => {
  const { title, categories, mainImage, publishedAt, body = []} = post
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1>{title}</h1>
        <span>{categories} | <Date dateString={publishedAt} /></span>
        {mainImage && (
          <div>
            <Image
              src={urlFor(mainImage)}
              alt="AWSome Day header"
              width="1200"
              height="400"
            />
          </div>
        )}
        <PortableText
        value={body}
        components={ptComponents}
        />
      </article>
    </Layout>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "categories": categories[]->title, 
  mainImage, 
  publishedAt,
  body
}`

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  if (!post.length) {
    return <LoadingSpinner />
  } else {
    return {
      props: {
        post
      }
    }
  }
}
export default Post;