interface ITag {
  documentId: string;
  locale: string;
  system_title: string;
  seo: {
    description: string;
    id: string;
    slug: string;
    title: string;
  };
}

export type { ITag };
