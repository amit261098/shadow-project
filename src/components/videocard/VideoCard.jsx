import ReactPlayer from "react-player";
import "./videoCard.css";
const VideoCard = ({ item }) => {
  return (
    <>
    <div className="videoCard">
      <iframe
       className="videoFrame"
        src={item.url}
        title={item.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
       <p style={{fontFamily:"'Raleway', sans-serif", fontStyle:"normal", fontWeight:"300", fontSize:"13px",lineHeight:"22px"}}>{item.title}</p>
      </div>
      {/* <div className="videoTitle">
          <p>{item.title}</p>
    </div> */}
    </>
  );
};

export default VideoCard;
