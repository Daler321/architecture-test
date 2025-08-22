import { gql } from "@apollo/client";
import HomeHeader from "@/components/home-header";
import client from "@/lib/apolloClient";

export default function Home() {
  client.query({
    query: gql`
      query Query {
        articles {
          documentId
          seo {
            slug
            title
          }
          Hero {
            description
            id
            title
            background {
              url
              previewUrl
              name
              caption
              alternativeText
            }
          }
        }
        tags {
          documentId
          seo {
            slug
            title
          }
        }
      }
    `,
  });

  return (
    <div>
      <HomeHeader />
      <h1>hello</h1>
    </div>
  );
}
