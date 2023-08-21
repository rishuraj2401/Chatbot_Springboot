// import React, { useState } from 'react';
// import axios from 'axios';

// const Home = () => {
//   const [prompt, setPrompt] = useState("Hi");
//   const [data, setData]=useState([]);

//   const handleChange = (e) => {
//     setPrompt(e.target.value);
//     // console.log(prompt);
//   };
  

//   const fetchData = () => {
//     console.log(prompt);
//     axios.get(`http://localhost:8080/search?query=${prompt}`)
//       .then(response => {
//         console.log('Response:', response.data);
//         setData(response.data);
//         // animateTyping();
//         // console.log(data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };
  
  
  
//   return (
//     <>
//       <div className="mainbody">
//         <div className="search">
//         <input type="text" onChange={handleChange} />
//         <button type="button" onClick={fetchData}>Send
//       </button>
//         </div>
//         <div className="result">
//         <div className="area">
//          {data.map((item)=><div > <h1 className='typewriter'>{item.title}</h1>
//         <p className='typewriter'>{item.snippet}</p></div>)}
//       </div>
//         </div>
//       </div>
     
      
     
        
      
//     </>
//   );
// };

// export default Home;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [prompt, setPrompt] = useState("Hi");
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [headings, setHeadings] = useState([]);
  const [counter, setCounter] = useState(0);
  const [p, setP]=useState([]);
   // Track the current item index

  const handleChange = (e) => {
    setPrompt(e.target.value);
    
  };

  const fetchData = () => {
    axios.get(`http://localhost:8080/search?query=${prompt}`)
      .then(response => {
        setData(prevData => [ ...response.data]);
        // Start the animation when data is fetched
        // if (data.length > 0) {
        //   animateTyping();
        // }
        // animateTyping();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  // Function to animate the items one by one
  const question=()=>{
    return (<h1>{prompt}</h1>)
  }
  useEffect(()=>{
const st={
  display:'none'

}
setP([...p, prompt]
)
setCounter(counter + 1);
setHeadings([...headings, <h1 key={counter}>Heading {counter}</h1>]);
animateTyping();

  },[data])
  const animateTyping = () => {
   
    const interval = setInterval(() => {
      console.log(data.length);
      setCurrentIndex((prevIndex) => {
        console.log("&" ,prevIndex);
        if (prevIndex < data.length-1 ) {
          var x=prevIndex+1;
          console.log("x-is:", x);
          return x;
        } else {
          clearInterval(interval); // Stop the animation when all items are displayed
          console.log("else is working");
          return prevIndex;
        }
      });
    }, 3000); // Adjust the delay between items as needed
  };

  return (
    <>
      <div className="mainbody">
       <div className="head1">
       <h1>ChatBot</h1>
       </div>
        <div className="result">
          <div className="area">
            <div className="prompt" style={{textAlign:"center"}}>
              {/* <h2>Question: {prompt}</h2> */}
            </div>
            
            {data.map((item, index) => (
              <div key={index} style={{ display: index <= currentIndex ? 'block' : 'none' ,padding:"1vw" }}>
                {/* {(() => {if(index%3===0){ 
                
                  return <h1>{p[p.length -1]}</h1>}})()} */}
                <h3 className="typewriter">{item.title}</h3>
                {/* <br /> */}
                {/* <details className="typewriter">{item.snippet}</details> */}
                <p className="typewrite">{item.snippet}</p>
              </div>
            ))}
          </div>
          </div>
          <div className="search">
          
          <input type="text" onChange={handleChange} />
          <button type="button" onClick={fetchData}>Send</button>
        </div>
       

      </div>
    </>
  );
};

export default Home;
