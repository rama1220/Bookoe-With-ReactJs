import useSWR from "swr";
import { CreateStars } from "../../CreateStars.jsx";
import { useSearch } from "../../SearchContext.jsx";
import NotFound from "./NotFound.jsx";
import { Link } from "react-router-dom";
import SkeletonLoading from "./SkeletonLoading.jsx";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Search() {
  const { searchTerm } = useSearch();

  const baseUrl = `https://bookapi.cm.hmw.lol/api/books?search=${searchTerm}`;
  const { data, error, isLoading } = useSWR(searchTerm ? baseUrl : null, fetcher);
  if (error) {
    console.error("Failed to load data:");
    return <div>Failed to load</div>;
  }

  const sortedData = Array.isArray(data?.data) ? data?.data : [];
  const datas = sortedData;
  const searchResult = searchTerm.replace(/\b\w/g, (match) => match.toUpperCase());

  return (
    <>
      <div className="list-container">
        <div className="latest-info">
          <h2>
            Search For <span>{searchResult}</span>
          </h2>
        </div>
        <div className="list-seacrh">
          {datas.length > 0 ? (
            datas.map((book, index) => (
              <div className="list-book" key={book.id}>
                <div className="list-pict">
                  <div className="number">
                    <div className="round">{index + 1}</div>
                  </div>
                  <img src={book.image_url} alt="" />
                </div>
                <div className="list-detail">
                  <div className="list-title">
                    <h4>{`${book.title.slice(0, 65)}`}</h4>
                  </div>
                  <div className="list-author">by {book.author.name ? book.author.name : "Unknow"}</div>
                  <div className="list-rating">{CreateStars(book.rating)}</div>
                  <Link to={`detail/${book.id}`} className="detail-btn">
                    <button className="full-btn">Read Book {/* <ArrowRight color="white" size={20} /> */}</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (isLoading? <SkeletonLoading/> :
            <NotFound />
          )}
        </div>
      </div>
    </>
  );
}
