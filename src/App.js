import React,{useState} from 'react';
import './App.css';
import Card from './card.js';


function App() {

const [flower, setFlower]=useState(
  [
  {
    Title: "Hydrangea", 
    image: "https://www.thespruce.com/thmb/BtzO7HgdFe0bZadt7YTOEt5Rofo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plants-with-big-flowers-4138211-03-0a748cea615643c89567e218eebac7d4.JPG",
    Total: 0
  }, 
  {
    Title: "Tree Peony", 
    image: "https://www.thespruce.com/thmb/1byTGTzzK-fS8ERpe5SgCEdlFnc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plants-with-big-flowers-4138211-02-a6ae89e754fb4e3fb71193b5559df4d9.jpg",
    Total: 0
  }, 
  {
    Title: "Oriental Poppy", 
    image: "https://www.thespruce.com/thmb/p_UNZ5EDFNtNkNcHQA8wzmHLX-8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plants-with-big-flowers-4138211-hero-b10becb169064cc4b3c7967adc1b22e1.jpg",
    Total: 0
  }
]); 
  
  //useState: update the componant state 
  // const [num, setNum] = useState(0); 
  // const lik = (q) => {
  //    setNum(num+1); 
  // }
  const calculate = (p) =>{
    let x=[]
    console.log(p, flower);
    flower.forEach((f, index)=>{
      if (f.Title==p){
        console.log(f.Total, f.Title, f.image, index)
        flower[index].Total = flower[index].Total+1
      }

    })
    setFlower([...flower])
  }
    

  return (
    <div className="App">
      {
       flower.map((i) => <Card   res={i.Total} t={i.Title} img={i.image}  likes={(e)=> calculate(e)}/>) 
      }

    </div>
  );
}

export default App;
