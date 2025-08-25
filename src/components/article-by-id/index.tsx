"use client";

import ArticleNavigation from "@/components/article-navigation";
import Recomendation from "@/components/recomendation";
import { getArticle } from "@/lib/query";
import { useQuery } from "@apollo/client/react";
import Image from "next/image";
import styles from "./article-by-id.module.css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Metadata from "@/components/metadata";

export default function ArticleById({ articleId }: { articleId: string }) {
  const { data, loading, error } = useQuery(getArticle, {
    variables: { documentId: articleId },
  });

  if (!data) {
    return null;
  }

  const tag = data.article.tags[0];

  function getWidthClass(value?: string) {
    switch (value) {
      case "width_33":
        return "col-span-1";
      case "width_66":
        return "col-span-2";
      case "width_100":
        return "col-span-3";
      default:
        return "col-span-3";
    }
  }

  function getTextPositionClass(position?: string) {
    switch (position) {
      case "bottom_left":
        return "absolute bottom-10 left-10 text-white max-w-[50%]";
      case "bottom_right":
        return "absolute bottom-10 right-10 text-white max-w-[50%]";
      case "top_left":
        return "absolute top-10 left-10 text-white max-w-[50%]";
      default:
        return "";
    }
  }

  return (
    <div>
      <Metadata
        seoTitle={data.article.seo.title}
        seoDescription={data.article.seo.description}
      />

      <div className={styles.articleHeader}>
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.article.Hero.background.url}`}
          alt={data.article.Hero.background.alternativeText || "preview"}
          width={1920}
          height={0}
        />
        <h1>{data.article.Hero.title}</h1>
        <p>{data.article.Hero.description}</p>
      </div>

      <ArticleNavigation
        category={{
          documentId: tag.documentId,
          seo: {
            title: tag.seo.title,
          },
        }}
        article={{
          documentId: articleId,
          seo: { title: data.article.seo.title },
        }}
      />

      <div className={`${styles.articleContent}`}>
        {data.article.content.map((block, index) => (
          <div
            key={index}
            className={`${getWidthClass(
              block.width?.value || block._width?.value
            )} ${styles.articleContentItem}`}
          >
            {/* Image */}
            {block.image && (
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${block.image.url}`}
                alt={block.image.alternativeText || "preview"}
                width={block.image.width}
                height={0}
              />
            )}

            {/* Text */}
            {block.text && (
              <div
                className={`${getTextPositionClass(
                  block.text_position?.position
                )} ${styles.articleContentText}`}
              >
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {block.text}
                </ReactMarkdown>
              </div>
            )}
          </div>
        ))}
      </div>

      <Recomendation articles={data.article.recommendations} />
    </div>
  );
}
