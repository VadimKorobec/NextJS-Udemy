const BlogPostPage = ({ params }: { params: { id: string } }) => {
  return (
    <main>
      <h1>The Blog Page</h1>
      <p>{params.id}</p>
    </main>
  );
};

export default BlogPostPage;
