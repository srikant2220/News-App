import React from "react";
import styles from "../styles/NewsCard.module.css";

const NewsCard = ({ article }) => {
  return (
    <div className={styles.card}>
      {article.image_url && (
        <img src={article.image_url} alt="news" className={styles.image} />
      )}

      <h3 className={styles.title}>{article.title}</h3>
      <p className={styles.desc}>{article.description}</p>

      <a
        className={styles.link}
        href={article.url}
        target="_blank"
        rel="noreferrer"
      >
        Read More
      </a>
    </div>
  );
};

export default NewsCard;
