import Link from "next/link";
import styles from "./article-navigation.module.css";

const ArticleNavigation = ({
  category,
  article,
}: {
  category: {
    documentId: string;
    seo: {
      title: string;
    };
  };
  article: {
    documentId: string;
    seo: {
      title: string;
    };
  };
}) => {
  return (
    <div className={styles.articleNavigation}>
      <Link href="/">Projects</Link>
      <Link href={`/${category.documentId}`}>{category.seo.title}</Link>
      <Link href={`/article/${article.documentId}`} className={styles.active}>
        {article.seo.title}
      </Link>
    </div>
  );
};

export default ArticleNavigation;
