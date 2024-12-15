import React from "react";
import Card from '../components/Card';
import { cardData } from "../components/CardData";
import './Collections.css';

const Collections = () => {
    return (
        <div className="collections-container" >
            {cardData.map((card) => (
                <Card 
                    key={card.id}
                    imgSrc={card.imgSrc}
                    imgAlt={card.imgAlt}
                    productName={card.productName}
                    description={card.description}
                    buttonText={card.buttonText}
                    price={card.price}
                    link={card.link}
                />
            ))}
        </div>
    )
}

export default Collections;