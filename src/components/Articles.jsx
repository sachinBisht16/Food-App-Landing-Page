import { Fragment, useState } from "react";

import ArticleCard from "./ArticleCard.jsx";
import { articles as data} from "../articlesData.js"; 

export default function Articles () {
    const [index, setIndex] = useState(0);

    function handleLeftClick () {
        index !== 0 && setIndex(0);
    }

    function handleRightClick () {
        index !== 1 && setIndex(1);
    }
    
    return (
        <div id="article-container">
            <section id="article-section">   
                <h1>Latest Articles</h1>
                <div className="articles">
                    {data[index].map(article => 
                        <Fragment key={article.topic}>
                            <ArticleCard key={article.topic} articleName={article.topic} description={article.description} imageUrl={article.imgUrl}/>
                        </Fragment>
                    )}
                </div>
            </section>
            
                <span>
                        <input type="button" value='<' onClick={handleLeftClick}/>
                        <p>{index + 1}/2</p>
                        <input type="button" value='>' onClick={handleRightClick}/>
                </span>
            
        </div>
    )
}