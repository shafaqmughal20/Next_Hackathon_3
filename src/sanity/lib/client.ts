import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId :process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'krp11thn',
  dataset :'production',
  apiVersion :'2021-03-25',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.SANITY_API_TOKEN ||'sk1uVxTSjyd8NgoWgPN4501jD0AYk2xE9HyQ23iW8kJ5VjAGAfFRSWJeU2AlTOQqa8ZTzX2IMFvCDsRBJTCS8c8FCfkrmVJ4fFBudgV878JD0KOVMyRxufXqqBmj8dTbgWH8NcthwpRHxBFELxPe0wj8ygMj7YRl741tzrfAZXaJulawdWuw'
})
