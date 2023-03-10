import { useState } from "react";
import ptBr from "date-fns/locale/pt-BR";
import { format, formatDistanceToNow } from "date-fns";

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

import styles from "./styles.module.css";

export const Post = ({ author, content, publishedAt }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBr,
    }
  );

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment("");
  }

  function handleChangeNewComment() {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  }

  function deleteComment(_comment) {
    const newCommentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== _comment
    );

    setComments(newCommentsWithoutDeletedOne);
  }

  function handleInvalidNewComment(_comment) {
    event.target.setCustomValidity("Digite um comentário!");
  }

  const isNewCommentEmpty = newComment.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar url={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#"> {line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
          value={newComment}
          onChange={handleChangeNewComment}
          onInvalid={handleInvalidNewComment}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
};
