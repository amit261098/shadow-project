import "./Started.css";
import Dataone from "./Dataone";
import VideoCard from "../components/videocard/VideoCard";
import { useState } from "react";
import Calender from "./Calender";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import 'react-tabs/style/react-tabs.css';
// import { TabComponent } from '@syncfusion/ej2-react-navigations';
import Cardsone from "./Cardsone";
import Datatwo from "./Datatwo";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import Switch from "react";

// function Started() {
//   return (
//     <>
//       <Router>
//         {/* <Navbar /> */}
//         <Routes>
//           {/* <Route path='/'  element={<Home/>}  />
//           <Route path='/roles' element={Roles} /> */}
//           <Route path='/Calender' element={Calender} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default Started;

const Started = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState("Dataone");
  const filterItem = (categItem) => {
    const updatedItems = Dataone.filter((curElem) => {
      return curElem.category === categItem;
    });
    setFilteredList(updatedItems);
    console.log(categItem);
  };

  return (
    <>
      <Tabs defaultIndex={0}>
        <TabList className="tab__item">
          {/* <TabComponent> */}
          <Tab className="tab-list-active">Videos</Tab>
          <Tab>Blogs</Tab>
          {/* </TabComponent> */}
        </TabList>
        <TabPanel>
          {/* <h1 className="heading_styles"> Getting Started </h1> */}
          <input
            type="text"
            className="oneplay"
            style={{
              marginLeft: "-110px",
              width: "931px",
              height: "50px",
              borderRadius: "36px",
              marginBottom: "25px",
              marginTop: "70px",
              borderColor: "blue",
              borderWidth: "2px",
              fontFamily: "Red Hat Text",
              fontSize: "16px",
              // position:"fixed"
            }}
            placeholder="     Search for videos..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />

          <div className="play_one">
            {Dataone.filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((item, index, elem) => {
              const { id, url, title } = elem;
              return <VideoCard item={item} key={index} />;
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <input
            type="text"
            style={{
              marginLeft: "-125px",
              width: "1020px",
              height: "50px",
              borderRadius: "36px",
              marginBottom: "20px",
              marginTop: "60px",
              borderColor: "blue",
              borderWidth: "2px",
              fontFamily: "Red Hat Text",
              fontSize: "16px",
            }}
            placeholder="    Search for blogs..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />

          {Datatwo.filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((val, index) => {
            console.log(index);
            return (
              <Cardsone
                // id={val.id}
                imgscr={val.imgscr}
                title={val.title}
                description={val.description}
                link={val.link}
              />
            );
          })}
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Started;
