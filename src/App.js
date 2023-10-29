import "./styles.css";
import { useState, useEffect } from "react";
import Article from "./components/Article";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const source_url = "https://jsonplaceholder.typicode.com/posts";

    async function getArticles() {
      // const response = await fetch(source_url);
      // const data = await response.json();
      const resp = await fetch(source_url);
      const data = await resp.json();
      setArticles(data);
      setLoading(false);
    }

    setTimeout(() => {
      getArticles();
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1 className="recent-articles">Recent articles</h1>
      <hr />
      {loading ? (
        <div>Loading...</div>
      ) : (
        articles.map((a, index) => {
          return (
            <div key={index}>
              <p>
                <span>
                  <h1>"{a.title}"</h1>
                </span>
                <span>
                  <p>{a.body}</p>
                </span>
                <span className="author-name">
                  <p>By: Leanne Graham</p>
                </span>
              </p>
              <br />
              <hr />
              <br />
            </div>
          );
        })
      )}
    </div>
  );
}
