import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/52092659?v=4",
      name: "Fred Reis",
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "Bei" },
      {
        type: "paragraph",
        content: "lorem ipsum dolor sit amet, consectetur adip",
      },
      { type: "paragraph", content: "lorem ipsum 😎" },
      { type: "link", content: "john.doo/yeah" },
    ],
    publishedAt: new Date("2022-12-30 14:23:12"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/52092659?v=4",
      name: "Fred Reis",
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "Bei" },
      {
        type: "paragraph",
        content: "lorem ipsum dolor sit amet, consectetur adip",
      },
      { type: "paragraph", content: "lorem ipsum 😎" },
      { type: "link", content: "john.doo/yeah" },
    ],
    publishedAt: new Date("2023-01-10 14:23:12"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/52092659?v=4",
      name: "Fred Reis",
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "Bei" },
      {
        type: "paragraph",
        content: "lorem ipsum dolor sit amet, consectetur adip",
      },
      { type: "paragraph", content: "lorem ipsum 😎" },
      { type: "link", content: "john.doo/yeah" },
    ],
    publishedAt: new Date("2023-01-10 14:23:12"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
