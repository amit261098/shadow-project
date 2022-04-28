import React from "react";
import './Cards.css';
// import Search  from './Search';



function Cards(props) {
    // const { search } = window.location;
    // const id = new URLSearchParams(search).get('id');
    // const filteredProps = filteredProps(props, id);
    return(
        <>
        
        {/* <div>
            <Search />
            <ul>
                {filteredProps.map(props => (
                    <li key={props.id}>{props.first_name}</li>
                ))}
            </ul>
        </div> */}
        
        
        
        <div className="cards">
            <div className="card">
            <img src={props.imgscr} alt='myPic' className='card_img' />
                <div className="card__info">
                
                    <span className="card__category">{props.id} 
                   
                    <h3 className="card__title"> {props.first_name} {props.last_name} </h3> 
                     
                    {props.gender} <br />              
                    {props.email} <br/>
                    {props.ip_address}
                    </span> 
                </div>
            </div>
        </div>
        </>
    );
}

export default Cards;