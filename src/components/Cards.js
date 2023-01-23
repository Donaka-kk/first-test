import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards(){
    return(
        <div className="cards">
            <h1>Check out these EPIC Destinations !</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the amazon jungle"
                        label="advanture"
                        path="/services"
                        />
                        <CardItem
                        src="images/img-2.jpg"
                        text="Travel through the Islands of Bali in a private cruise"
                        label="Luxury"
                        path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-3.jpg"
                        text="Set Sail in the Atlantic Ocean visiting Uncharted waters"
                        label="advanture"
                        path="/services"
                        />
                        <CardItem
                        src="images/img-4.jpg"
                        text="Experience Football on Top of the Himilayan Mountains"
                        label="advanture"
                        path="/services"
                        />
                        <CardItem
                        src="images/img-8.jpg"
                        text="Ride through the Sahra Desert on a guided camel tour"
                        label="advanture"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;