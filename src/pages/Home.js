import ReactPlayer from 'react-player'
import { Text } from '@chakra-ui/react';
import { detectOverflow } from 'react';
import {
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText
  } from "@chakra-ui/react";
import Cardui from "../components/Cardui.js";
import CarduiBody from "../components/CarduiBody.js";
// import './Started.css';
import './Started.js';



const Home = (props) => {
  
  //   const [searchTerm,setSearchTerm] = useState("");
    


  // {Data.filter((ReactPlayer)=>{
  //   if (searchTerm == ""){
  //     return ReactPlayer
  //   }else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
  //     return ReactPlayer
  //   }
  // }).map((ReactPlayer, index) => {
  //   console.log(index); 
    return (
    <>
        
    <h1 className="heading_styles"> Getting Started </h1>
    {/* <nav role="navigation">
        <ul>
        <li><a href="#">One</a></li>
        <li><a href="#">Two</a>
        <ul class="dropdown">
            <li><a href="#">Sub-1</a></li>
            <li><a href="#">Sub-2</a></li>
            <li><a href="#">Sub-3</a></li>
        </ul>
        </li>
        <li><a href="#">Three</a></li>
        </ul>
        </nav> */}

        <div class="nav-container">
            <ul class="nav-items">
            {/* <!-- Navigation --> */}
            <li class="nav-item"><a href="./Started.js">Home</a></li>
            <li class="nav-item"><a href="#">Blogs</a></li>
            
            {/* <!-- Dropdown menu --> */}
            {/* <li class="nav-item nav-item-dropdown">
            </li> */}
            </ul>
        </div>
{/* 
        <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'> */}
        {/* MiniStatistics Card */}
        {/* <Cardui>
          <CarduiBody>
            <Flex flexDirection='row' align='center' justify='center' w='100%'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='sm'
                  color='gray.400'
                  fontWeight='bold'
                  pb='2px'>
                  Today's Money
                </StatLabel>
                </Stat>
                </Flex>
                </CarduiBody>
                </Cardui>
                </SimpleGrid> */}
                
                {/* <Flex>
                  <StatNumber fontSize='lg' color='#fff'>
                    $53,000
                  </StatNumber>
                  <StatHelpText
                    alignSelf='flex-end'
                    justifySelf='flex-end'
                    m='0px'
                    color='green.400'
                    fontWeight='bold'
                    ps='3px'
                    fontSize='md'>
                    +55%
                  </StatHelpText>
                </Flex>
                </Stat>
              <IconBox as='box' h={"45px"} w={"45px"} bg='brand.200'>
                <WalletIcon h={"24px"} w={"24px"} color='#fff' />
              </IconBox> */}
            {/* </Flex> */}
          {/* </CarduiBody>
        </Cardui> */}



               
                {/* </Flex> */}
    <div className="play_one">
    
    <ReactPlayer className='p_one' id='one'
    style={{borderColor:'blue', borderStyle:'inset', padding:'5px', marginLeft:'-20px', marginRight:'20px',marginBottom:'30px'}} 
    width= '282.31px'
    height= '84.91px'
    // showInfo='Call of Duty'
    // p='Call of Duty'
    
     controls 
     url='https://youtu.be/edvnX8TwSTI' 
     onReady={()=> console.log('onReady callback')}
     onStart={()=> console.log('onStart callback')}
     onPause={()=> console.log('onPause callback')}
     onEnded={()=> console.log('onEnded callback')}
     onError={()=> console.log('onError callback')}
     />
     <label for id='one' style={{marginLeft:'-1055px',marginBottom:'500px'}}>Caod</label>
      {/* <Text> Call of Duty WW2 Part-1</Text> */}
     
            {/* <Flex >
              <Stat>
                <StatLabel
                 style={{ 
                  //  fontSize:'sm',
                  // color='gray.400'
                  fontWeight:'bold',
                  marginLeft:'-355px',
                  marginTop:'219px',
                  // pb:'2px' 
                  }}>
                  Call Of Duty WW2 Part1
                </StatLabel>
                </Stat>
                </Flex> */}
               
      
    <ReactPlayer className='p_one' id='two'
    style={{borderColor:'blue', borderStyle:'inset', padding:'5px',  marginRight:'20px', marginBottom:'30px', 
    //  marginTop:'-229px'
    }} 
     width='354px' 
     height='200px'
     margin='20px'
     margin-right='30px'
     
     controls 
     url='https://youtu.be/p_NVOG5QWk0' 
     onReady={()=> console.log('onReady callback')}
     onStart={()=> console.log('onStart callback')}
     onPause={()=> console.log('onPause callback')}
     onEnded={()=> console.log('onEnded callback')}
     onError={()=> console.log('onError callback')}
     /><label for id='two' style={{marginBottom:'90px',marginLeft:'55px'}}>Caod</label>
    
           {/* <Flex >
             <Stat >
               <StatLabel
                style={{ fontSize:'sm',
                 // color='gray.400'
                 fontWeight:'bold',
                 marginLeft:'-355px',
                 marginTop:'-21px',
                 // pb:'2px' 
                 }}>
                 Call Of Duty WW2 Part2
               </StatLabel>
               </Stat>
               </Flex> */}
              
     <ReactPlayer className='p_one'
     style={{borderColor:'blue', borderStyle:'inset', padding:'5px',marginBottom:'30px', 
    //  marginTop:'-229px'
    }} 
     width='354px'
     height='200px'
     controls 
     url='https://youtu.be/bLVcw8eZObw' 
     onReady={()=> console.log('onReady callback')}
     onStart={()=> console.log('onStart callback')}
     onPause={()=> console.log('onPause callback')}
     onEnded={()=> console.log('onEnded callback')}
     onError={()=> console.log('onError callback')}
     /> <label style={{}}>Caod</label>
           {/* <Flex >
             <Stat>
               <StatLabel
                style={{ fontSize:'sm',
                 // color='gray.400'
                 fontWeight:'bold',
                 marginLeft:'-355px',
                 marginTop:'-21px',
                 // pb:'2px' 
                 }}>
                 Call Of Duty WW2 Part3
               </StatLabel>
               </Stat>
               </Flex> */}
               
    <ReactPlayer className='p_one'
    style={{float:'left' ,borderColor:'blue', borderStyle:'inset', padding:'5px', marginRight:'20px', marginLeft:'-20px',marginBottom:'30px', marginTop:'10px'}} 
     width='354px'
     height='200px'
     controls 
     url='https://youtu.be/44qj6I8g-oM' 
     onReady={()=> console.log('onReady callback')}
     onStart={()=> console.log('onStart callback')}
     onPause={()=> console.log('onPause callback')}
     onEnded={()=> console.log('onEnded callback')}
     onError={()=> console.log('onError callback')}
     /><label style={{}}>Caod</label>
     <ReactPlayer className='p_one'
     style={{borderColor:'blue', borderStyle:'inset', padding:'5px', marginRight:'20px',marginBottom:'30px'}}  
     width='354px'
     height='200px'
     controls 
     url='https://youtu.be/U23v33WNvPs' 
     onReady={()=> console.log('onReady callback')}
     onStart={()=> console.log('onStart callback')}
     onPause={()=> console.log('onPause callback')}
     onEnded={()=> console.log('onEnded callback')}
     onError={()=> console.log('onError callback')}
     /><label style={{}}>Caod</label>
    {/* <div className='five'><Flex  className='five'>
     <Stat me='auto'>
       <StatLabel className='five'
        style={{ fontSize:'sm',
         // color='gray.400'
         fontWeight:'bold',
         marginLeft:'-555px',
         marginTop:'521px',
         // pb:'2px' 
         }}>
         Call Of Duty WW2 Part3
       </StatLabel>
       </Stat>
       </Flex></div>  */}
     <ReactPlayer className='p_one'
    //  width='480px' 
    //  height='240px'
    style={{borderColor:'blue', borderStyle:'inset', padding:'5px',marginBottom:'30px'}}  
    width='354px'
    height='200px'
     controls 
     url='https://youtu.be/x-p0HWZl9Eo' 
     onReady={()=> console.log('onReady callback')}
     onStart={()=> console.log('onStart callback')}
     onPause={()=> console.log('onPause callback')}
     onEnded={()=> console.log('onEnded callback')}
     onError={()=> console.log('onError callback')}
     />
     {/* <label style={{}}>Caod</label> */}
     {/* <Flex >
              <Stat>
                <StatLabel className='six'
                 style={{ 
                  //  fontSize:'sm',
                  // color='gray.400'
                  fontWeight:'bold',
                  
                  marginLeft:'-205px',
                  marginTop:'430px',
                  // pb:'2px' 
                  }}>
                  Call Of Duty WW2 Part1
                </StatLabel>
                </Stat>
                </Flex> */}
    </div>
    
    </>
    )
};

// function Started() {
//   return(
// <BrowserRouter>
//             <Routes>
//                 <Route path='/' element={<AppLayout />}>
//                     <Route index element={<Blank />} />
//                     {/* <Route path='/started' element={<Started />} />
//                     <Route path='/calendar' element={<Blank />} />
//                     <Route path='/user' element={<Blank />} />
//                     <Route path='/order' element={<Blank />} /> */}
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }

export default Home;
