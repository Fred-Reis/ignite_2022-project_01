import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

export const Comment = () => {
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

            <button title="Deletar comentários">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Fred, parabéns 🪄</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};