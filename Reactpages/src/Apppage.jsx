import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import CryptoLists from './Crypto/CryptoLists';
import { Data } from './Data';
import Pagination from './Pagenumbers/Pagination';

function Apppage() {
    const [coinsData, setCoinsData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const[postPerpage, setPostperpage] = useState(8);

    // useEffect(async () => {
    //     const response = await axios.get(
    //         'https://api.Coingecko.com/api/v3/coins/markets?vs_Currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    //     );
    //     setCoinsData(response.data);
    // }, [])
    useEffect (()=> {
        setCoinsData(Data)
    }, [])
    
    const lastpostindex = currentPage * postPerpage;
    const firstpostindex = lastpostindex - postPerpage;
    const currentPost = coinsData.slice(firstpostindex,lastpostindex)
  return (
    <div>
        <h1>Crypto Gallery</h1>
        <CryptoLists coinsData = {currentPost}/>
        <Pagination coinsData = {coinsData} 
                    postPerpage = {postPerpage} 
                    setCurrentpage={setCurrentPage}
                    currentpage={currentPage}
        /> 
        

    </div>
  )
}

export default Apppage