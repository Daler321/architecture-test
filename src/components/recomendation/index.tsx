import { IArticle } from "@/types/article";
import ArticlesList from "@/components/articles-list";
import styles from "./recomendation.module.css";

const Recomendation = ({ articles }: { articles: IArticle[] }) => {
  return (
    <div className={styles.recomendation}>
      <h1 className={styles.recomendationTitle}>We also recommend</h1>
      <ArticlesList articles={articles} />
    </div>
  );
};

export default Recomendation;
