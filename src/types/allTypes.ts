export interface Post {
  _id: string;
  title: string;
  author: string;
  image: string;
  slug: string;
  people?: string;
}

export interface ClubEvent {
  _id: string;
  title: string;
  excerpt: string;
  image: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  slug: {
    _type: "slug";
    current: string;
  };
  startDate: string;
  endDate: string;
  body: unknown; // For full details on the dynamic page
}
