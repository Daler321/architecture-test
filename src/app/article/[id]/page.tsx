import ArticleById from "@/components/article-by-id";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <ArticleById articleId={id} />
    </div>
  );
}
