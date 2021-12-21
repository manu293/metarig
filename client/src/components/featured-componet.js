// imports
import React from "react";
import {MdVerified} from "react-icons/md";
import {Link} from "react-router-dom";

// local imports
import "../styles/components/featuredCollection.css";
import Utils from "../helpers/utils";

class FeaturedComponent extends React.PureComponent {

    render() {

        const {featuredCollectionList} = this.props;

        if (
            featuredCollectionList.length > 0
        ) {
            return featuredCollectionList.map((featuredCollectionItem, index) => {

                const bidTimeLeft = new Utils().formatBidDate(featuredCollectionItem.bidEndDate);

                return (
                        <div
                            className={(index === 0) ? `featuredCollectionCardContainer featuredCollectionCardContainerMargin` : "featuredCollectionCardContainer"}
                            key={featuredCollectionItem.id}
                        >
                            <div className="featureCollectionCardSection">
                                <div className="featureCollectionCardImage">
                                    <img
                                        className="featureCollectionImage"
                                        src={featuredCollectionItem.displayImage}
                                        alt={featuredCollectionItem.collectibleName}
                                    />
                                </div>

                                <div className="featureCollectionCardContent">
                                    <div className="collectibleInitatorContainer">
                                        <img
                                            className="collectibleInitatorAvatar"
                                            src={featuredCollectionItem.collectibleInitatorAvatar}
                                            alt={featuredCollectionItem.collectibleInitator}
                                        />
                                        <p className="collectibleInitatorName">
                                            {featuredCollectionItem.collectibleInitator}
                                        </p>
                                        {
                                            (featuredCollectionItem.isCollectibleInitatorVerified) &&
                                            (
                                                <MdVerified
                                                    className="collectibleInitatorVerified"
                                                    size={10}
                                                    color="ff2e63"
                                                />
                                            )
                                        }
                                    </div>

                                    <div className="collectibleNameContainer">
                                        <p className="collectibleNameText">
                                            {featuredCollectionItem.collectibleName}
                                        </p>
                                    </div>

                                    <div className="collectibleBidContainer">
                                        <div className="collectibleBitSeciton">
                                            <p className="collecitbleBidText">Current bid at</p>
                                            <div className="collectibleBidAmount">
                                                {
                                                    new Utils().currencyFormatter(featuredCollectionItem.collectiCurrectBit)
                                                }
                                            </div>
                                        </div>

                                        <div className="collectibleBitSeciton">
                                            <p className="collecitbleBidText">Time left</p>

                                            <div className="collectibleDateContainer">
                                                <div className="collectibleDateSection">
                                                    <span className="collectibleSubSection">
                                                        <p className="collectibleSubScetionName">
                                                            {bidTimeLeft[0]}
                                                        </p>
                                                    </span>
                                                    <span className="collectibleSubNames">Days</span>
                                                </div>
                                                <div className="collectibleDateSection">
                                                    <span className="collectibleSubSection">
                                                        <p className="collectibleSubScetionName">
                                                            {bidTimeLeft[1]}
                                                        </p>
                                                    </span>
                                                    <span className="collectibleSubNames">Hours</span>
                                                </div>
                                                <div className="collectibleDateSection">
                                                    <span className="collectibleSubSection">
                                                        <p className="collectibleSubScetionName">
                                                            {bidTimeLeft[2]}
                                                        </p>
                                                    </span>
                                                    <span className="collectibleSubNames">Minutes</span>
                                                </div>
                                                <div className="collectibleDateSection">
                                                    <span className="collectibleSubSection">
                                                        <p className="collectibleSubScetionName">
                                                            {bidTimeLeft[3]}
                                                        </p>
                                                    </span>
                                                    <span className="collectibleSubNames">Seconds</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="collectionBidButtonContainer">
                                        <Link
                                            className="bidButtonLink"
                                            to={`/auction/${featuredCollectionItem.id}`}
                                        >
                                            <p className="collectionBidButtonText">BID</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="featureCollectionMobileCardSection">
                                <div>
                                    <img
                                        className="featureCollectionImageMobile"
                                        src={featuredCollectionItem.displayImage}
                                        alt={featuredCollectionItem.collectibleName}
                                    />
                                </div>

                                <div className="collectibleInitatorContainerMobile">
                                    <img
                                        className="collectibleInitatorAvatar"
                                        src={featuredCollectionItem.collectibleInitatorAvatar}
                                        alt={featuredCollectionItem.collectibleInitator}
                                    />
                                    <p className="collectibleInitatorName">
                                        {featuredCollectionItem.collectibleInitator}
                                    </p>
                                    {
                                        (featuredCollectionItem.isCollectibleInitatorVerified) &&
                                        (
                                            <MdVerified
                                                className="collectibleInitatorVerified"
                                                size={10}
                                                color="ff2e63"
                                            />
                                        )
                                    }
                                </div>

                                <div className="collectibleNameContainer">
                                    <p className="collectibleNameTextMobile">
                                        {featuredCollectionItem.collectibleName}
                                    </p>
                                </div>  

                                <div className="collectibleBitSeciton">
                                    <p className="collecitbleBidText">Current bid at</p>
                                    <div className="collectibleBidAmountMobile">
                                        {
                                            new Utils().currencyFormatter(featuredCollectionItem.collectiCurrectBit)
                                        }
                                    </div>
                                </div>

                                <div className="collectibleBitSecitonMobile">
                                    <p className="collecitbleBidText">Time left</p>

                                    <div className="collectibleDateContainer">
                                        <div className="collectibleDateSection">
                                            <span className="collectibleSubSection">
                                                <p className="collectibleSubScetionName">
                                                    {bidTimeLeft[0]}
                                                </p>
                                            </span>
                                            <span className="collectibleSubNames">Days</span>
                                        </div>
                                        <div className="collectibleDateSection">
                                            <span className="collectibleSubSection">
                                                <p className="collectibleSubScetionName">
                                                    {bidTimeLeft[1]}
                                                </p>
                                            </span>
                                            <span className="collectibleSubNames">Hours</span>
                                        </div>
                                        <div className="collectibleDateSection">
                                            <span className="collectibleSubSection">
                                                <p className="collectibleSubScetionName">
                                                    {bidTimeLeft[2]}
                                                </p>
                                            </span>
                                            <span className="collectibleSubNames">Minutes</span>
                                        </div>
                                        <div className="collectibleDateSection">
                                            <span className="collectibleSubSection">
                                                <p className="collectibleSubScetionName">
                                                    {bidTimeLeft[3]}
                                                </p>
                                            </span>
                                            <span className="collectibleSubNames">Seconds</span>
                                        </div>
                                    </div>
                                </div> 

                               
                                <div className="collectionBidButtonContainer">
                                    <Link
                                        className="bidButtonLink"
                                        to={`/auction/${featuredCollectionItem.id}`}
                                    >
                                        <p className="collectionBidButtonText">BID</p>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                );
            });
        } else {
            return null;
        }
        
    }

}

export default FeaturedComponent;