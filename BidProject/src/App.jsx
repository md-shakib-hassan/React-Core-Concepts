import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Main } from './components/Main/Main'
import { Banner } from './components/Banner/Banner'
import { Footer } from './components/Footer/Footer'


import './App.css'

function App() {

  const [data, setData] = useState([]);


  const [bidItemList, setBidItemList] = useState([]);
   const [amount,setAmount]=useState(0);

  useEffect(()=>{
    fetch('Data.json')
    .then(response => response.json())
    .then(result => setData(result));
  },[])

  const handleBidItemLIst=(element)=>{
    const newItem = [...bidItemList,element]
        setBidItemList(newItem)
        const newAmount = amount+element.currentBidPrice;
        setAmount(newAmount)
  }

  const handleDeleteBidItem = (element)=>{
     const remainingItem = bidItemList.filter(item => item.id!==element.id)
     setBidItemList(remainingItem);
     const remainingAmount = amount-element.currentBidPrice;
      setAmount(remainingAmount);

  }

  return (
    <>
   
      <Navbar></Navbar>
      <Banner></Banner>

     
      <Main handleDeleteBidItem={handleDeleteBidItem }  handleBidItemLIst={handleBidItemLIst} data ={data} bidItemList={bidItemList} amount={amount}></Main>

      <Footer></Footer>
      
    </>
  )
}

export default App
