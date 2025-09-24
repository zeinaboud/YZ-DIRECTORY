import "server-only"
import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId ,token} from '../env'


export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
    useCdn: false,
    token,// Set to false if statically generating pages, using ISR or tag-based revalidation
})

if (!writeClient.config().token)
{
    throw new Error("write token not found");
}