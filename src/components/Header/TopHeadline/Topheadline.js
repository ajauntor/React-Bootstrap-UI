import React, { useEffect, useState } from 'react';
import News from '../News/News';
import './Topheadline.css'


const Topheadline = () => {

    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=74eb614fa52f4ae7a15ba1bdddff224f')
        .then(response => response.json())
        .then(data => setArticles(data.articles))
    },[])



    return (
        <div className="news-div">
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default Topheadline;