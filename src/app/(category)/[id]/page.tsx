import styles from "../category.module.css";
import ArticlesByTag from "@/components/articles-by-tag";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className={styles.articlesListContainer}>
      <ArticlesByTag tagId={id} />
    </div>
  );
}
