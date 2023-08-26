type User = {
  name: string;
  avatar: string;
};
export type Review = {
  id: string;
  user: User;
  rating: number;
  text: string;
  time: string;
};