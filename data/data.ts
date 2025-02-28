export const navItems = [
    { name: "Invest", link: "/invest" },
    { name: "News", link: "/news" },
    { name: "Forum", link: "/forum" },
];

export type Comment = {
    id: number;
    user: {
      name: string;
      avatar: string;
    };
    date: string;
    content: string;
    image?: string;
    likes: number;
    comments: number;
  };
  
  export const comments: Comment[] = [
    {
      id: 1,
      user: {
        name: "Dindaa",
        avatar: "/avatar1.jpg",
      },
      date: "2 days ago",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      image: "/flower.jpg",
      likes: 12,
      comments: 12,
    },
    {
      id: 2,
      user: {
        name: "Briann",
        avatar: "/avatar2.jpg",
      },
      date: "2 days ago",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      likes: 12,
      comments: 12,
    },
  ];
  