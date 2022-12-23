import styles from "./styles.module.css";

export const Avatar = ({ url, hasBorder = true }) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={url}
    />
  );
};
