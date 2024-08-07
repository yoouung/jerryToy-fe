export interface Tag {
  tag: string;
  name: string;
}

export const tags: Tag[] = [
  { tag: 'accomodation', name: '숙박' },
  { tag: 'restaurant', name: '음식점' },
  { tag: 'theme_travel', name: '테마여행' },
  { tag: 'tourist', name: '관광지' },
  { tag: 'festival', name: '축제/행사' },
  { tag: 'shopping', name: '쇼핑' },
];

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
    introduction: string;
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
