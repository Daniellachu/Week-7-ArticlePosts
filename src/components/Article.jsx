import { useEffect, useState } from "react";

export default function Article({ article }) {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    const author_url = "https://jsonplaceholder.typicode.com/users";

    async function getAuthor() {
      const resp = await fetch(author_url);
      const data = await resp.json();
      setAuthor(data);
    }
    getAuthor();
  }, []);
  // const article = props.article;

  return (
    <div className="article">
      {author &&
        author.map((a, index) => {
          return (
            <div key={index}>
              <p>
                <span>{a.name}</span>
              </p>
            </div>
          );
        })}
    </div>
  );
}
