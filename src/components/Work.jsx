
import "../styles/work.css";
import "../images/bear.png";

function Work() {

  const image1 = "../images/bear.png";

  return (
    <div>
      <div>
        <h1>Portfolio</h1>
      </div>

      <div className="portfolio-nav">
        <p>All</p>
        <p>Web design</p>
        <p>Applications</p>
        <p>Web Development</p>
        <p>Home</p>
      </div>

      <div className="porfolio-one">
        <img className="image-one" src={image1} alt="image" />
        <div>
          <h3>Moonboard</h3>
          <p>Web design</p>
        </div>
      </div>

    </div>
  )
}

export default Work;