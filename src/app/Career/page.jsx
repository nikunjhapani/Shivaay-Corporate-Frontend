import React from 'react'
import Banner from "../../components/Banner";
import getMetadataForSlug from '../../utils/getMetadataForSlug';

export async function generateMetadata() {
  return await getMetadataForSlug("career"); 
}

export default function page() {
  return (
    <div>
       <Banner pageName="Career" />
    </div>
  )
}
