import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import groq from 'groq'
import client from '../client'

const Index = ({posts}) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          This is a blog to record my personal life.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Latest Posts</h2>
        <ul className={utilStyles.list}>
          {posts.length > 0 && posts.map(
            ({ _id, title = '', slug = '', publishedAt = '' }) =>
              slug && (
                <li className={utilStyles.listItem} key={_id}>
                  <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={publishedAt} />
                  </small>
                </li>
              )
          )}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `)
  return {
    props: {
      posts
    }
  }
}

export default Index;