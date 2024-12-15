import React from "react";
import './Card.css';

const Card = ({
    imgSrc,
    imgAlt, 
    productName,
    description,
    buttonText,
    price,
    link
}) => {
    return (
        <div className="card-container">
            {
                imgSrc && imgAlt && (
                <img 
                    src={imgSrc}
                    alt={imgAlt}
                    className="card-img">
                </img>
                )
            }
            {productName && <h1 className="card-title">{productName}</h1>}
            {description && <p className="card-description">{description}</p>}
            {price && <p className="card-price">{price}</p>}
            {
                buttonText && link && (
                <a href={link} className="card-btn">{buttonText}</a>
                )
            }
        </div>
    );
}

export default Card;