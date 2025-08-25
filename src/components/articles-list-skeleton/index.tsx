import stylesList from "../articles-list/articles.module.css";
import styles from "./articles-skeleton.module.css";

const ArticlesListSkeleton = () => {
  return (
    <div className={stylesList.articlesListContainer}>
      <div className={styles.skeleton}></div>
      <div className={styles.skeleton}></div>
      <div className={styles.skeleton}></div>
    </div>
  );
};

export const ArticleSkeleton = () => {
  return <div className={styles.skeleton}></div>;
};

export default ArticlesListSkeleton;
