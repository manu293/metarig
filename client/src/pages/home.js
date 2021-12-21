// imports
import React from "react";

// local imports
import "../styles/pages/home.css";
import HeaderContainer from "../containers/header-container";
import FeaturedContainer from "../containers/featured-container";

const Home = () => {
    return (
        <>
            <HeaderContainer />
            <main className="homeContainer">
                <div className="homeFeatureCollectionContainer">
                    <FeaturedContainer />
                </div>
            </main>
        </>
    );
}

export {Home};