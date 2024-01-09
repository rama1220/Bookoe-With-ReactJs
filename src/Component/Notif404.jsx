import Error from "../assets/img/404.png";
import { Link } from "react-router-dom";
Link;

export default function Notif404() {
  return (
    <div className="notif">
      <div className="notif-container">
        <img src={Error} alt="" />
        <h1 className="not">404</h1>

        <h3>Looks like you&apos;ve got lost...</h3>
        <h5>The Page you&apos;re looking for doesn&apos;t exist or has been moved</h5>
        <Link to="/" className="link-not">
          <button>Back Home</button>
        </Link>
      </div>
    </div>
  );
}
