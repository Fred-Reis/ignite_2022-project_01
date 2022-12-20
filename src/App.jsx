import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="João"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad sunt tempora quasi. Dolorem cumque repellat quo quis impedit suscipit sequi, molestias fugit ducimus facere adipisci recusandae assumenda sint! Cupiditate, neque!"
          />
          <Post
            author="João"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad sunt tempora quasi. Dolorem cumque repellat quo quis impedit suscipit sequi, molestias fugit ducimus facere adipisci recusandae assumenda sint! Cupiditate, neque!"
          />
        </main>
      </div>
    </div>
  );
}
