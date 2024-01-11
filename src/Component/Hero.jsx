// eslint-disable-next-line no-unused-vars
import React from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { Endpoint1 } from "../../Endpoint";
import { CreateStars } from "../../CreateStars.jsx";
import { Link } from "react-router-dom";

export default function Hero() {
  const { data: dataEndpoint1, error: errorEndpoint1 } = Endpoint1();

  if (errorEndpoint1) {
    console.error("Failed to load data:", errorEndpoint1);
    return <div>Failed to load</div>;
  }

  const data = dataEndpoint1;
  const sortedData = Array.isArray(data?.data) ? data?.data.sort((a, b) => b.rating - a.rating) : [];
  const datas = sortedData.slice(0, 10);
  console.log(datas);

  if (!datas) {
    return <div>No data available</div>;
  }

  return (
    <div className="hero" key={datas?.[0]?.isbn}>
      <div className="hero-container">
        <div className="hero-left">
          <h4>MUST READ</h4>
          <h1>{datas?.[0]?.title}</h1>
          <div className="rating">{CreateStars(datas?.[0]?.rating)}</div>
          <div className="sinopsis">{datas?.[0]?.synopsis}</div>
          <div className="button-nav">
            <Link to={`detail/${datas?.[0]?.id}`} className="detail-btn">
              <button className="btn-nav">
                READ BOOK <ArrowRight color="white" size={20} />
              </button>
            </Link>
            <Link to="/seeDetail" className="navSee">
              <button className="btnNav">SEE ALL RECOMMENDATIONS</button>
            </Link>
          </div>
        </div>
        <div className="hero-right">
          <img src={datas?.[2]?.image_url} alt="" className="c2"/>
          <img src={datas?.[0]?.image_url} alt="" className="c1"/>
          <img src={datas?.[5]?.image_url} alt="" className="c3" />
        </div>
      </div>
    </div>
  );
}
