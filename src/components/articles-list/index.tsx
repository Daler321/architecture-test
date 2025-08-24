import styles from "./articles.module.css";

import { IArticle } from "@/types/article";
import Article from "../article";

const ArticlesList = ({ articles }: { articles: IArticle[] }) => {
  // if (!articles) {
  //   return null;
  // }

  return (
    <div className={styles.articlesListContainer}>
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </div>
  );
};

export default ArticlesList;
