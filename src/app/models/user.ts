import { Idea } from './idea';

export interface User {
  id: string;
  username: string;
  created: Date;
  token?: string;
  bookmarks?: Idea;
}
