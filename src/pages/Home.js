import "../styles/Home.css";
import { Link } from "react-router-dom";
import SuperMarket from "../Images/blurSupermarket.jpg";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${SuperMarket})` }}>
      <div className="headerContainer">
        <h1>Blue Market </h1>
        <p> You order.. We Deliver</p>
        <Link to="/menu">
          <button>Start Shopping </button>
        </Link>
      </div>
      <Link to="/Registration"> Don't have an account? </Link>
    </div>
  );
}
export default Home;