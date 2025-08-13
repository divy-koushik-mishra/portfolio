import React from 'react'
import type { Metadata } from 'next'
import { UnderConstruction } from '@/components/underConstruction'

export const metadata: Metadata = {
  title: 'Under Construction | Divy Koushik Mishra',
  description: 'This page is currently under construction, being built with the same care and attention to detail that goes into every project.',
  openGraph: {
    title: 'Under Construction | Divy Koushik Mishra',
    description: 'This page is currently under construction, being built with the same care and attention to detail that goes into every project.',
    type: 'website',
  },
}

const UnderConstructionPage = () => {
  return (
    <div className="">
      <UnderConstruction />
    </div>
  )
}

export default UnderConstructionPage
