import ArticleNavigation from "@/components/article-navigation";
import Recomendation from "@/components/recomendation";

const articles = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Importance of Sustainable Design in Architectural Projects",
    description:
      "In recent years, sustainable design has become a cornerstone of architectural project planning. Sustainable design focuses on creating buildings that minimize environmental impact and promote energy efficiency.",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Importance of Sustainable Design in Architectural Projects",
    description:
      "In recent years, sustainable design has become a cornerstone of architectural project planning. Sustainable design focuses on creating buildings that minimize environmental impact and promote energy efficiency.",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Importance of Sustainable Design in Architectural Projects",
    description:
      "In recent years, sustainable design has become a cornerstone of architectural project planning. Sustainable design focuses on creating buildings that minimize environmental impact and promote energy efficiency.",
  },
];

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h1>Article Header</h1>
      <ArticleNavigation
        category={{
          documentId: "3",
          seo: {
            title: "Residential Interiors",
          },
        }}
        article={{ documentId: id, seo: { title: "Article" } }}
      />
      <p>Article Description</p>
      <Recomendation articles={articles} />
    </div>
  );
}
