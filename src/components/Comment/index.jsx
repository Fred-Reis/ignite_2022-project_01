import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "../Avatar";

import styles from "./styles.module.css";

export const Comment = ({ content, onDeleteComment }) => {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((prevState) => prevState + 1);
  }

  return (
    <div className={styles.commentContainer}>
      <Avatar
        hasBorder={false}
        url="https://avatars.githubusercontent.com/u/52092659?v=4"
      />

      <div className={styles.comment}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fred Reis</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentários" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
