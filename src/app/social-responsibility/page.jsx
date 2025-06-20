import React from "react";
import Banner from "../../components/Banner";
import getMetadataForSlug from "../../utils/getMetadataForSlug";
import SocialResponsibilityContent from "../../components/SocialResponsibilityContent";

export async function generateMetadata() {
  return await getMetadataForSlug("social-responsibility");
}

export default function Page() {
  return (
    <div>
      <Banner pageName="Social Responsibility" />
      <SocialResponsibilityContent />
    </div>
  );
}
