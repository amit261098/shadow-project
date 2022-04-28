import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Datatwo from "../../pages/Datatwo";
// import { FaHeart, FaBars } from 'react-icons/fa';
import "./sidebar.scss";
import pic from "./dextruslogo.jpeg";
import { propNames } from "@chakra-ui/react";
import Dataone from '../../pages/Dataone';
// import Embedded from "../../Embedded";
// import FacebookPlayer from 'react-player/facebook';

const sidebarNavItems = [
  // {
  //     display: 'Dashboard',
  //     icon: <i className='bx bx-home'></i>,
  //     to: '/',
  //     section: ''
  // },
  {
    display: "Getting Started",
    icon: <i className="bx bx-star"></i>,
    to: "/started",
    section: "started",
    category:"started"
  },
  // {
  //     display: 'Calendar',
  //     icon: <i className='bx bx-calendar'></i>,
  //     to: '/calendar',
  //     section: 'calendar'
  // },
  // {
  //     display: 'User',
  //     icon: <i className='bx bx-user'></i>,
  //     to: '/user',
  //     section: 'user'
  // },
  // {
  //     display: 'Orders',
  //     icon: <i className='bx bx-receipt'></i>,
  //     to: '/order',
  //     section: 'order'
  // },
  {
    display: "Embedded Analytics",
    icon: <i className="bx bx-home"></i>,
    to: "/embedded",
    section: "embedded",
    category:"embedded"
  },

  {
    display: "ML Based Modelling",
    icon: <i className="bx bx-home"></i>,
    to: "/mlbased",
    section: "mlbased",
    category:"mlbased"
  },
  {
    display: "Data Wrangling",
    icon: <i className="bx bx-home"></i>,
    to: "/datawrangling",
    section: "datawrangling",
    category:"datawrangling"
  },

  {
    display: "Data Streaming Replication",
    icon: <i className="bx bx-home"></i>,
    to: "/datastreaming",
    section: "datastreaming",
    category:"dtastreaming"
  },
  {
    display: "Etl Testing",
    icon: <i className="bx bx-star"></i>,
    to: "/etltesting",
    section: "etltesting",
    category:"etltesting"
  },
  {
    display: "Big Data Testing",
    icon: <i className="bx bx-calendar"></i>,
    to: "/bigdata",
    section: "bigdata",
    category:"bigdata"
  },
  {
    display: "DevOps to Data ops",
    icon: <i className="bx bx-calendar"></i>,
    to: "/Devops",
    section: "Devops",
    category:"devops"
  },
  {
    display: "Bl/Report Testing",
    icon: <i className="bx bx-calendar"></i>,
    to: "/blreporting",
    section: "blreporting",
    category:"devops"
  },
  {
    display: "SAP Data Testing",
    icon: <i className="bx bx-user"></i>,
    to: "/sapdata",
    section: "sapdata",
    category:"devops"
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  const[filteredList,setFilteredList] = useState('Dataone');
  const filterItem = (categItem) => {
    const updatedItems = Dataone.filter((curElem) => {
      return curElem.category === categItem;
    });
    setFilteredList(updatedItems) ;
  }
  

  // useEffect(() => {
  //   setTimeout(() => {
  //     const sidebarItem = sidebarRef.current.querySelector(
  //       ".sidebar__menu__item"
  //     );
  //     indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
  //     setStepHeight(sidebarItem.clientHeight);
  //   }, 50);
  // }, []);

  // change active index
  useEffect((props) => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }
  , [location]
  );

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        Resources > {activeIndex}
        <img
          src={pic}
          alt="Choose a topic"
          style={{
            marginTop: "15px",
            marginBottom: "-10px",
            marginLeft: "140px",
            height: "50px",
          }}
        ></img>
        <p
          style={{
            marginBottom: "-35px",
            marginLeft: "110px",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          Choose a topic
        </p>
      </div>
      <div ref={sidebarRef} className="sidebar__menu">
        {/* <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)`,
          }}
        ></div> */}
        {sidebarNavItems.map((item, index) =>  (
          <Link to={item.to} key={index} category={item.category} onchange={()=> filterItem('category')}>
            <div
              className={`sidebar__menu__item ${
                activeIndex === index ? "active" : ""
              }`   }
            >  
              <div className="sidebar__menu__item__icon">
                {/* {item.icon} */}
              </div>
              <div className="sidebar__menu__item__text" >{item.display}</div>
            
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
