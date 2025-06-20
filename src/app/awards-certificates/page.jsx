import React from 'react';
import Banner from '../../components/Banner';
import AwardsPageContent from '../../components/AwardsPageContent';
import getMetadataForSlug from '../../utils/getMetadataForSlug';

export async function generateMetadata() {
  return await getMetadataForSlug('awards-certificates');
}

export default function Page() {
  return (
    <div>
      <Banner pageName="Awards & Certificates" />
      <AwardsPageContent />
    </div>
  );
}
