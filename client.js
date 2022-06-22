import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '4fjdt1ei', 
  dataset: 'production', 
  useCdn: true 
})