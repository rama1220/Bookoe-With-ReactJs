import useSWR from "swr";
import { CreateStars } from "../../CreateStars.jsx";
import { useParams } from "react-router-dom";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Detail() {
  const { id } = useParams();
  const baseUrl = `https://bookapi.cm.hmw.lol/api/books/`;
  const { data, error } = useSWR(`${baseUrl}${id}`, fetcher);

  if (error) {
    console.error("Failed to load data:");
    return <div>Failed to load</div>;
  }


const date = data?.created_at ? new Date(data.created_at) : null;
const options = { day: "numeric", month: "long", year: "numeric" };
const formattedDate = date ? new Intl.DateTimeFormat("id-ID", options).format(date) : "Invalid Date";

  return (
    <>
      <div className="detail-container">
        <div className="detail-box">
          <div className="det-left">
            <img src={data?.image_url} alt="" />
          </div>
          <div className="det-right">
            <div className="det-title">
              <h2>{data?.title}</h2>
              <h4>by {data?.author?.name}</h4>
              <div className="box-rating">
                <div className="round"> {data?.rating}</div>
                <div className="star">{CreateStars(data?.rating)}</div>
              </div>
            </div>
            <p className="det-sinopsis">{data?.synopsis}</p>
            <h5>First Published  {formattedDate }</h5>
          </div>
        </div>
      </div>
    </>
  );
}
