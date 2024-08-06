export interface Post {
  postId: number;
  user: {
    userId: number;
    nickname: string;
    age: number;
    mbti: string;
    gender: string;
    regDate: string;
    recent_match: string;
    count: number;
    degree: number;
  };
  dest: {
    destId: number;
    destName: string;
    label: string;
    address: string;
    roadaddress: string;
    latitude: number;
    longitude: number;
    tagList: string[];
  };
  title: string;
  content: string;
  postDate: string;
  tag: string;
  likes: number;
  views: number;
  people: number;
}
