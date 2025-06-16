export default async function PostPage({ params }) {
  const { slug } = params;
  console.log(slug);

  return <article>{slug} --slug</article>;
}
