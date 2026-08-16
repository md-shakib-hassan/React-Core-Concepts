import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import NewsCard from '../Components/NewsCard';

const CategoriesNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  

  const [typeNews, setTypeNews] = useState([]);

  // console.log(typeNews);
  useEffect(() => {

    if (id == "0") {
      setTypeNews(data);
      return;
    } else if (id == "1") {
      const filterNews = data.filter(value => value.others.is_today_pick == true);
      setTypeNews(filterNews);
    } else {
      const filterNews = data.filter(value => value.category_id == id);
      setTypeNews(filterNews);
    }
  }, [data, id])

  return (
    <>
     <div>
      CategoriesNews-{id.name}
      {
        typeNews.map(element => <NewsCard  key={element.id} news={element}></NewsCard> )
      }
      
    </div>
    </>
   
  )
}

export default CategoriesNews