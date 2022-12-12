import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Navbar from './App';


const root = ReactDOM.createRoot(document.getElementById('root'))
var currDate = new Date()
currDate = currDate.getHours()
var greeting = ''
var cssStyle = {}

if(currDate >= 1 && currDate < 12){
  greeting = 'Good Morning'
  cssStyle.color = 'green'
}
else if(currDate >= 12 && currDate < 19 ){
  greeting = 'Good Afternoon'
  cssStyle.color = 'red'
}
else{
  greeting = 'Good Night'
}


const element = (
  <>
  <Navbar></Navbar>
  <div className='container'>
    
    <h1 className='Header'>Hello Sir, <span style={cssStyle}>{greeting}</span> </h1>
  </div>
  </>
)

root.render(element)