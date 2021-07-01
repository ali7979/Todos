import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import BackgroundSlideshow from 'react-background-slideshow'
import './App.css';
import Todo from './Todo'
import img1 from './images/002.jpg'
import Typical from 'react-typical'

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);


  const itemEvent = (event) => {
    setInputList(event.target.value)

  };
  const listOfItems = () => {
    setItems((prev) => {
      return [...prev, inputList];
    });
    setInputList("")


  };
  const deletet =(id) =>{
    console.log(id);
    setItems((olditems) => {
      return olditems.filter((elem,index)=> {
        return index !== id;
      });
    });
  };

  return (
    <>




     
    
  

    
 
      
      <div className="main_div">
        
        <div className="center_div">
          <br />
          <div className="w3-panel w3-blue w3-round-xlarge " >
          <h1 className="w3-monospace" >Todos LiSt</h1>
          <Typical
        className="tx"
        steps={["For adding a new To do work",1000,"Type on Add Text area and click on Plus button", 3000, 'Click on small red button for deleting ', 4000,"my first react project",1000]}
        loop={Infinity}
        wrapper="p"
      />
          </div>
         
          <br />
          <input type="text" placeholder=" Add items" value={inputList} onChange={itemEvent} />
          <button onClick={listOfItems}> + </button>
          <ol>

            {items.map((val,index) => {
              //  return <li>{val}</li>}
              
              return <Todo id = {index} key={index} selectt={deletet} t={val} />
              
            })}

          </ol>
        </div>

      </div>
      <div>
        <h3 className="ali" style={{color:"#DCDCDC"}}  >My First React Project</h3>
        
      </div>
           
            
      


















      
      

    </>
  )
};

export default App;
