import getMetadataForSlug from "../../utils/getMetadataForSlug";
import GlobalPresenceClient from "../../components/GlobalPresenceClient";

export async function generateMetadata() {
  return await getMetadataForSlug("global-presence");
}

export default function Page() {
  return <GlobalPresenceClient />;
}
