import styles from "./styles.module.css";

export const Post = ({ author, content }) => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/52092659?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Fred Reis</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 🤨</p>{" "}
        <p> Quo, dolor ea! 🎄</p>
        <p>
          <a href="">john.doo/yeah</a>
        </p>{" "}
        <p>
          <a href="">#newproject,</a> <a href="">#berich,</a>{" "}
          <a href="">#growth.</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
};
