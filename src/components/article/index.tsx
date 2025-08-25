import Image from "next/image";
import Link from "next/link";
import styles from "./article.module.css";
import { IArticle } from "@/types/article";

const Article = ({ Hero, documentId, seo }: IArticle) => {
  return (
    <Link href={`/article/${documentId}`}>
      <div className={styles.article}>
        <div className={styles.articleImage}>
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${Hero.background.url}`}
            alt={Hero.background.alternativeText || "preview"}
            fill
            sizes="100%"
          />
        </div>
        <h1 className={styles.articleTitle}>{Hero.title}</h1>
        <p className={styles.articleDescription}>{Hero.description}</p>
      </div>
    </Link>
  );
};

export default Article;
