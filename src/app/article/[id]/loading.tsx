import ArticlesListSkeleton, {
  ArticleSkeleton,
} from "@/components/articles-list-skeleton";
import styles from "@/components/article-by-id/article-by-id.module.css";

export default function Loading() {
  return (
    <div className="flex flex-col gap-10">
      <div className={styles.articleHeader}>
        <ArticleSkeleton />
      </div>
      <ArticlesListSkeleton />
      <h1>Loading...</h1>
    </div>
  );
}
