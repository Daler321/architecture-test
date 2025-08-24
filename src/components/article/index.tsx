import Image from "next/image";
import Link from "next/link";
import styles from "./article.module.css";

const Article = ({
  image,
  title,
  description,
  id,
}: {
  image: string;
  title: string;
  description: string;
  id: string;
}) => {
  return (
    <Link href={`/article/${id}`}>
      <div className={styles.article}>
        <div className={styles.articleImage}>
          <Image src={image} alt={title} fill />
        </div>
        <h1 className={styles.articleTitle}>{title}</h1>
        <p className={styles.articleDescription}>{description}</p>
      </div>
    </Link>
  );
};

export default Article;
