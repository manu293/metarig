// imports
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import {FaLongArrowAltLeft} from "react-icons/fa";
import {MdVerified, MdOutlineInfo} from "react-icons/md";

// local imports
import "../styles/pages/home.css";
import "../styles/pages/auction.css";
import "../styles/components/featuredCollection.css";
import WalletContainer from "../containers/wallet-container";
import HeaderContainer from "../containers/header-container";
import VideoContainer from "../containers/video-container";
import ModelViewerComponent from "../containers/modelViewer-container";
import ImageContainer from "../containers/image-container";
import Utils from "../helpers/utils";

const Auction = () => {
    const params = useParams();
    const [auctionContent, setAuctionContent] = useState(null);
    const [showWalletSection, setShowWalletSection] = useState(false);
    
    useEffect(() => {
        
        if (
            (params.collectibleId) &&
            (params.collectibleId.length > 0)
        ) {
            fetch(`/api/v1/auctions/${params.collectibleId}`)
            .then((auctionResp) => auctionResp.json())
            .then((collectibleData) => {
                if (
                    (collectibleData.filteredAuctionsList) &&
                    (collectibleData.filteredAuctionsList.length > 0)
                ) {
                    setAuctionContent(collectibleData.filteredAuctionsList[0])
                }
            })
            .catch((err) => console.log("err", err))
        }
    }, []);

    const renderAuctionList = (auctionContent) => {

        const bidTimeLeft = new Utils().formatBidDate(auctionContent.bidEndDate);

        return (
            <div className="auctionContainer">

                <div className="auctionBackButtonContainer">
                    <Link
                        className="auctionLink"
                        to="/"
                    >
                        <button className="auctionButton">
                            <FaLongArrowAltLeft
                                color="fff"
                                size={20}
                            />
                            <span className="auctionButtonText">
                                Back
                            </span>
                        </button>
                    </Link>
                </div>

                <div className="auctionContentContainer">

                    <div className="auctionContentSection auctionContentSectionRight">
                       {renderAuctionDisplayType(auctionContent)}
                    </div>

                    <div className="auctionContentSection">

                        <div className="auctionContentSectionImageContainer">
                            <img
                                className="auctionContentSectionImage"
                                src={auctionContent.collectibleInitatorAvatar}
                                alt={auctionContent.collectibleInitator}
                            />
                        </div>

                        <div className="auctionContentInitiatorSection">
                            <p className="auctionContentIntiator">
                                {auctionContent.collectibleInitator}
                            </p>

                            <MdVerified
                                className="auctionVerifiedIcon"
                                color="ff2e63"
                                size={15}
                            />
                        </div>

                        <span className="auctionText">AUCTION</span>

                        <span className="auctionCollectibleName">
                            "{auctionContent.collectibleName}"
                        </span>

                        <span className="auctionText">DESCRIPTION</span>

                        <span className="auctionCollectibleDescription">
                            {auctionContent.collectibleDescription}
                        </span>

                        <span className="auctionText">
                            <MdOutlineInfo color="ff2e63"/>&nbsp;
                            Authenticity
                        </span>

                        <div className="auctionAuthInfoContainer">

                            <div className="auctionAuthInfoSection">
                                <span className="auctionAuthInfoText">
                                    Total Run
                                </span>
                                <span className="auctionAuthInfoText2">
                                    {auctionContent.totalRuns}
                                </span>
                            </div>

                            <div className="auctionAuthInfoSection">
                                <span className="auctionAuthInfoText">
                                    Number
                                </span>
                                <span className="auctionAuthInfoText2">
                                    {auctionContent.number}
                                </span>
                            </div>

                            <div className="auctionAuthInfoSection">
                                <span className="auctionAuthInfoText">
                                    Token Type
                                </span>
                                <span className="auctionAuthInfoText2">
                                    {auctionContent.tokenType}
                                </span>
                            </div>

                        </div>

                        <div className="auctionCurrentBidContainer">
                            <span className="auctionCurrentBidText">Current bid at</span>

                            <span className="auctionCurrentBidAmount">
                                {new Utils().currencyFormatter(auctionContent.collectiCurrectBit)}
                            </span>
                        </div>

                        <div className="auctionContentDateSection">

                            <div className="auctionContentDateSubSection">
                                <span className="auctionDateNumber">
                                    {bidTimeLeft[0]}
                                </span>

                                <span className="auctionDateText">Days</span>
                            </div>

                            <div className="auctionContentDateSubSection">
                                <span className="auctionDateNumber">
                                    {bidTimeLeft[1]}
                                </span>

                                <span className="auctionDateText">Hours</span>
                            </div>

                            <div className="auctionContentDateSubSection">
                                <span className="auctionDateNumber">
                                    {bidTimeLeft[2]}
                                </span>

                                <span className="auctionDateText">Minutes</span>
                            </div>

                            <div className="auctionContentDateSubSection">
                                <span className="auctionDateNumber">
                                    {bidTimeLeft[3]}
                                </span>

                                <span className="auctionDateText">Seconds</span>
                            </div>
                        </div>

                        <button
                            className="auctionBidButton"
                            onClick={() => setShowWalletSection(true)}
                        >
                            BID
                        </button>

                    </div>

                </div>

                <div className="auctionContentMobileContainer">

                    <div className="auctionContentMobileSection">
                        {renderAuctionDisplayType(auctionContent)}
                    </div>

                    <div className="auctionContentMobileSection auctionContentMobileSectionPadding">

                        <div className="auctionContentSectionImageContainer">
                            <img
                                className="auctionContentSectionImage"
                                src={auctionContent.collectibleInitatorAvatar}
                                alt={auctionContent.collectibleInitator}
                            />
                        </div>

                        <div className="auctionContentInitiatorSection">
                            <p className="auctionContentIntiator">
                                {auctionContent.collectibleInitator}
                            </p>

                            <MdVerified
                                className="auctionVerifiedIcon"
                                color="ff2e63"
                                size={15}
                            />
                        </div>

                        <span className="auctionText">AUCTION</span>

                        <span className="auctionCollectibleNameMobile">
                            "{auctionContent.collectibleName}"
                        </span>

                        <span className="auctionText">DESCRIPTION</span>

                        <span className="auctionCollectibleDescriptionMobile">
                            {auctionContent.collectibleDescription}
                        </span>

                        <span className="auctionText">
                            <MdOutlineInfo color="ff2e63"/>&nbsp;
                            Authenticity
                        </span>

                        <div className="auctionAuthInfoContainerMobile">

                            <div className="auctionAuthInfoSection">
                                <span className="auctionAuthInfoText">
                                    Total Run
                                </span>
                                <span className="auctionAuthInfoText2">
                                    {auctionContent.totalRuns}
                                </span>
                            </div>

                            <div className="auctionAuthInfoSection">
                                <span className="auctionAuthInfoText">
                                    Number
                                </span>
                                <span className="auctionAuthInfoText2">
                                    {auctionContent.number}
                                </span>
                            </div>

                            <div className="auctionAuthInfoSection">
                                <span className="auctionAuthInfoText">
                                    Token Type
                                </span>
                                <span className="auctionAuthInfoText2">
                                    {auctionContent.tokenType}
                                </span>
                            </div>

                        </div>

                        <div className="auctionCurrentBidContainerMobile">
                            <span className="auctionCurrentBidText">Current bid at</span>

                            <span className="auctionCurrentBidAmount">
                                {new Utils().currencyFormatter(auctionContent.collectiCurrectBit)}
                            </span>
                        </div>

                        <div className="auctionContentDateSection">

                            <div className="auctionContentDateSubSection">
                                <span className="auctionDateNumber">
                                    {bidTimeLeft[0]}
                                </span>

                                <span className="auctionDateText">Days</span>
                            </div>

                            <div className="auctionContentDateSubSection">
                                <span className="auctionDateNumber">
                                    {bidTimeLeft[1]}
                                </span>

                                <span className="auctionDateText">Hours</span>
                            </div>

                            <div className="auctionContentDateSubSection">
                                <span className="auctionDateNumber">
                                    {bidTimeLeft[2]}
                                </span>

                                <span className="auctionDateText">Minutes</span>
                            </div>

                            <div className="auctionContentDateSubSection">
                                <span className="auctionDateNumber">
                                    {bidTimeLeft[3]}
                                </span>

                                <span className="auctionDateText">Seconds</span>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowWalletSection(true)}
                            className="auctionBidButton"
                        >
                            BID
                        </button>   

                    </div>

                </div>

            </div>
        )
    }

    const renderAuctionDisplayType = (auctionContent) => {

        let auctionType = auctionContent.collectibleDisplayType;
        
        switch(auctionType) {
            case "video": 
                return (
                    <VideoContainer
                            displayImage={auctionContent.displayImage}
                            collectibleDisplayURL={auctionContent.collectibleDisplayURL}
                        />
                );
            case "glb": 
                return (
                    <ModelViewerComponent
                        collectiblePosterImage={auctionContent.displayImage}
                        collectibleName={auctionContent.collectibleName}
                        collectibleDisplayURL={auctionContent.collectibleDisplayURL}
                    />
                );
            case "image": 
                    return (
                        <ImageContainer
                            collectibleName={auctionContent.collectibleName}
                            collectibleDisplayURL={auctionContent.collectibleDisplayURL}
                        />
                    )
            default:
                return (
                    <VideoContainer
                        collectibleDisplayURL={auctionContent.collectibleDisplayURL}
                    />
                );
        }

    }

    return (
        <>
            <HeaderContainer />
            <main className="homeContainer">
                {
                    (auctionContent === null)
                    ?
                        null
                    :
                        renderAuctionList(auctionContent)
                }
            </main>

            {
                (showWalletSection === true) &&
                    <WalletContainer
                        toggleWalletVisibility = {setShowWalletSection}
                    />
            }
            
        </>
    )
}


export {Auction};