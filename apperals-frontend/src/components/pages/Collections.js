import React from "react";
import {Card} from '../Card.js';

const Collections = () => {
    return (
        <div className="collections-container" >
            <Card 
                imgSrc="https://picsum.photos/300/200"
                imgAlt="Card Image"
                productName="Card title"
                description="This is the card description"
                buttonText="Add to cart"
                link="cardPage"
            />
            <Card 
                imgSrc="https://picsum.photos/300/200"
                imgAlt="Card Image"
                productName="Card title"
                description="This is the card description"
                buttonText="Add to cart"
                link="cardPage"
            />
            <Card 
                imgSrc="https://picsum.photos/300/200"
                imgAlt="Card Image"
                productName="Card title"
                description="This is the card description"
                buttonText="Add to cart"
                link="cardPage"
            />
            <Card 
                imgSrc="https://picsum.photos/300/200"
                imgAlt="Card Image"
                productName="Card title"
                description="This is the card description"
                buttonText="Add to cart"
                link="cardPage"
            />
        </div>
    )
}

export default Collections;