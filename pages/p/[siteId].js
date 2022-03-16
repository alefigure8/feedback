import { getAllFeedback, getAllSites } from '@/lib/db-admin'
import React from 'react'
import {context} from 'next'
import Feedback from '@/components/Feedback'

function SiteFeedback({initialFeedback}) {
  return (
    initialFeedback.map(feed => (
      <Feedback key={feed.id} {...feed}/>
    ))
  )
}

export async function getStaticProps(ctx){
  const siteId = ctx.params.siteId

  const feedback = await getAllFeedback(siteId)
  return {
    props: {
      initialFeedback: feedback
    }
  }
}

export async function getStaticPaths(){

  const sites = await getAllSites()
  const paths = sites.map(site=> ({
    params: {
      siteId: site.id.toString()
   }
  }))

  return {
    paths,
    fallback: false
  }
}

export default SiteFeedback
