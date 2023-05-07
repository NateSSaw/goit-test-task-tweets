import { useEffect, useState } from "react";
import api from "../../servises/api";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";

export default function CardsList() {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    setPage(1);
    setStatus("pending");
    api
      .getTweets()
      .then((data) => {
        if (data.length > 0) {
          setTweets(data);
          setPage((prevPage) => prevPage + 1);
          setStatus("resolved");
        } else return Promise.reject(new Error(`Didn't find tweets`));
      })
      .catch(({ message }) => {
        setError(message);
        setStatus("rejected");
      });
  }, []);

  const onLoadMore = () => {
    api
      .getTweets(page)
      .then((data) => {
        if (data.length > 0) {
          setTweets((prevState) => [...prevState, ...data]);
          setPage((prevPage) => prevPage + 1);
        } else return Promise.reject(new Error(`Didn't find more tweets`));
      })
      .catch(({ message }) => {
        setError(message);
        setStatus("rejected");
      });
  };
  if (status === "pending") return <p> Loadind...</p>;
  if (status === "rejected")
    return (
      <div className="Error">
        <h2 className="title">{error}</h2>
        <img
          src="https://www.2dsl.ru/wp-content/uploads/kak-ispravit-oshibku-404not-found-469152c.jpg"
          alt="error 404"
          width="1000"
          height="1000"
        />
        ;
      </div>
    );
  if (status === "resolved")
    return (
      <div>
        <ul>
          <Card tweets={tweets} />
        </ul>

        <Button onClick={onLoadMore} />
      </div>
    );
}
