import React from "react";
import { Link } from "react-router-dom";
import "./Cardstwo.css";
import Datatwo from "./Datatwo";
import FullBlog from "./FullBlog";

// import Search  from './Search';

function Cardsone(props) {
  // const { search } = window.location;
  // const id = new URLSearchParams(search).get('id');
  // const filteredProps = filteredProps(props, id);
  return (
    <>
      {/* <div>
            <Search />
            <ul>
                {filteredProps.map(props => (
                    <li key={props.id}>{props.first_name}</li>
                ))}
            </ul>
        </div> */}

      <div className="cardsone">
        <div className="cardone">
          <img src={props.imgscr} alt="myPic" className="card_imgone" />
          <div className="card__info">
            <span className="card__categoryone">
              {/* {props.id} */}
              <h3 className="card__titleone"> {props.title} </h3>
              <p className="cards__description">{props.description}</p>
              {/* <Link to="./Cardsone" value={props.link} className='link_one'>Read More</Link> */}
              <a href={props.link} className="link_one">
                Read More
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cardsone;
