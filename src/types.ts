export interface CatFactType {
  id: string;
  text: string;
  type: string;
  user: {
    id: string;
    name: {
      first: string;
      last: string;
    };
  };
  upvotes: number;
  userUpvoted: null | any[];
}
