import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchNews } from "../services/newsService";
import NewsCard from "../components/NewsCard";
import Pagination from "../components/Pagination";
import withLoader from "../hoc/withLoader";
import styles from "../styles/Page.module.css";

const CategoryView = ({ articles, type }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>{type.toUpperCase()} News</h2>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {articles && articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        ) : (
          <p>No news available</p>
        )}
      </div>
    </div>
  );
};

const CategoryContainer = () => {
  const { type } = useParams();
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchNews(type, page).then((data) => {
      setArticles(data.data);
      setLoading(false);
    });
  }, [type, page]);

  const CategoryWithLoader = withLoader(CategoryView);

  // const HomeView = ({ articles }) => {
  //   return (
  //     <div className={styles.container}>
  //       <h2>Latest News</h2>
  
  //       <div className={styles.grid}>
  //         {articles && articles.length > 0 ? (
  //           articles.map((article, index) => (
  //             <NewsCard key={index} article={article} />
  //           ))
  //         ) : (
  //           <p>No news available</p>
  //         )}
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <>
      <CategoryWithLoader
        isLoading={loading}
        articles={articles}
        type={type}
      />
      <Pagination page={page} setPage={setPage} />
    </>
  );
};

export default CategoryContainer;
