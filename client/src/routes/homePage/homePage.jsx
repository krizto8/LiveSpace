import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Unlocking Doors to New Beginnings!</h1>
          <p>
          Discover your dream home with LiveSpace, the ultimate real estate app designed to simplify your home search. Whether you're buying, renting, or just browsing, our user-friendly interface and powerful search tools help you find the perfect property in no time. Explore detailed listings, view high-quality photos. With LiveSpace, finding your next home is easier and more enjoyable than ever.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>12+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>25+</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
