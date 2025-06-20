import React from 'react';
import Banner from '../../components/Banner';
import Essence from '../../components/Essence';
import getMetadataForSlug from '../../utils/getMetadataForSlug';
import ArtistryInnovationContent from '../../components/ArtistryInnovationContent';

export const revalidate = 60;

export async function generateMetadata() {
  return await getMetadataForSlug('artistry-innovation');
}

export default function Page() {
  return (
    <>
      <Banner pageName="Artistry Innovation" />
      <ArtistryInnovationContent />
      <Essence />
    </>
  );
}
