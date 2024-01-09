import { CreateStars } from "../../CreateStars.jsx";
import { Endpoint3 } from "../../Endpoint.js";
import { Link } from "react-router-dom";
export default function Latest() {
  const { data: dataEndpoint3, error: errorEndpoint3 } = Endpoint3();
  if (errorEndpoint3) {
    console.error("Failed to load data:", errorEndpoint3);
    return <div>Failed to load</div>;
  }
  const data = dataEndpoint3;
  const datas = Array.isArray(data?.data) ? data?.data.slice(17, 21) : [];

  return (
    <>
      <div className="list-container">
        <div className="latest-info">
          <h2>
            Our <span>Latest</span> Collection
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
                    <button className="full-btn">Read Book</button>
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
