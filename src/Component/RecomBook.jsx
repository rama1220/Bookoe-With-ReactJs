import { Endpoint2 } from "../../Endpoint";
import { CreateStars } from "../../CreateStars.jsx";
import { Link } from "react-router-dom";
export default function RecomBook() {
  const { data: dataEndpoint2, error: errorEndpoint2 } = Endpoint2();
  if (errorEndpoint2) {
    console.error("Failed to load data:", errorEndpoint2);
    return <div>Failed to load</div>;
  }
  const data = dataEndpoint2;
  const datas = Array.isArray(data?.data) ? data?.data.slice(2, 6) : [];

  return (
    <>
      <div className="recom-container">
        <div className="recom-box">
          {datas.map((book) => (
            <div className="box-book" key={book.id}>
              <div className="recom-pict">
                <img src={book.image_url} alt="" />
              </div>
              <div className="recom-detail">
                <div className="box-title">
                  <h4>{`${book.title.slice(0,65)}...`}</h4>
                  <p className="author">by {book.author.name || "Unknown Author"}</p>
                </div>
                <div className="box-rating">
                  <div className="round">{book.rating} </div>
                  <div className="star">{CreateStars(book.rating)}</div>
                </div>
                <div className="box-sinops">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore autem aspernatur quae nam nisi culpa maxime saepe.</div>
                <Link to={`detail/${book.id}`} className="detail-btn">
                  <button className="full-btn">Read Book </button>
                </Link>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
