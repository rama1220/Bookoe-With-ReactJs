import useSWR from "swr";
import { CreateStars } from "../../CreateStars.jsx";
import { Link } from "react-router-dom";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function SeeAll() {
  const baseUrl = `https://bookapi.cm.hmw.lol/api/books?is_top_pick={true/false}`;
  const { data, error } = useSWR(baseUrl, fetcher);

  if (error) {
    console.error("Failed to load data:");
    return <div>Failed to load</div>;
  }

  const datas = Array.isArray(data?.data) ? data?.data.slice().sort((a, b) => b.rating - a.rating).slice(5,13) : [];
  return (
    <>
      <div className="list-container">
        <div className="latest-info">
          <h2>
            <span>All</span> Recomended
          </h2>
        </div>
        <div className="list-box">
          {datas.map((book) => {
            const date = new Date(book.created_at);
            const formateDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            return (
              <div className="list-book" key={book.id}>
                <div className="list-pict">
                  <div className="date">{formateDate}</div>
                  <img src={book.image_url} alt="" />
                </div>
                <div className="list-detail">
                  <div className="list-title">
                    <h4>{book.title}</h4>
                  </div>
                  <div className="list-author">by {book.author.name}</div>
                  <div className="list-rating">{CreateStars(book.rating)}</div>
                  <Link to={`detail/${book.id}`} className="detail-btn">
                    <button className="full-btn">Read Book {/* <ArrowRight color="white" size={20} /> */}</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
