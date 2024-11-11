import { useState } from "react";

export default function DishCard ( {articleName, description, imageUrl} ) {
    const [expandContent, setExpandContent] = useState(false);
    
    function handleExpandContent () {   
        setExpandContent(prevVal => !prevVal);
    }
    
    return (
        <div className="dish-card slides">
            <div>
                <img src={imageUrl} alt="" />
            </div>
            <div className="dish-content">
                <h1>{articleName}</h1>
                <p>{expandContent ? description : description.slice(0, 140) + '...'}</p>
                <button className="read-more-btn" onClick={handleExpandContent}>Read More</button>
            </div>
        </div>
    )
}