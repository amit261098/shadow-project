import { filter } from '@chakra-ui/react';
import React, {useState} from 'react';
import '../components/sidebar/Sidebar';
import Sidebar from '../components/sidebar/Sidebar';
import VideoCard from '../components/videocard/VideoCard';
import '../pages/Started';
import Dataone from './Dataone';



function Embedded(props) {
  const [searchTerm,setSearchTerm] = useState("");
  const[filteredList,setFilteredList] = useState('Dataone');
  const filterItem = (categItem) => {
    const updatedItems = Dataone.filter((curElem) => {
      return curElem.category === categItem;
    });
    setFilteredList(updatedItems) ;
    console.log(categItem);
  }
    
  
  
  return (
    <div className='gamification'>
      <h1>Embedded</h1>
      <div onLoad={()=>filterItem('category')}>
    
              


      
      </div>
      </div>
    
  );
}

export default Embedded;