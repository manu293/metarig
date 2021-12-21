// imports
import React from "react";
import {IoSearch} from "react-icons/io5";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoMdClose} from "react-icons/io";
import {MdOutlineInfo, MdHelpOutline, MdListAlt} from "react-icons/md";


// local imports
import "../styles/components/header.css";

class HeaderComponent extends React.PureComponent {

    render() {

        const {toggleMobileMenu, showMobileMenu, showMobileSearchContainer,
            toggleMobileSearchContainer, searchInput, updateSerchString} = this.props;

        return (
            <header className="headerContiner">
                <span className="headerIcon">Metarig</span>
                <div className="headerSearchBarContainer">
                    <IoSearch color="6d6d6d" />
                    <input
                        className="headerSearchInputField"
                        type="text"
                        placeholder="Search NFT's..."
                        value={searchInput}
                        onChange={(e) => updateSerchString(e)}
                        onClick={() => toggleMobileSearchContainer()}
                    />
                    {
                        (searchInput.length !== 0) &&
                        (
                            <div className="searchResultModalContainer">
                                <div className="searchResultModalTextContainer">
                                    <span className="searchResultModelTextDefault">
                                        Search result for&nbsp;
                                    </span>
                                    <p className="searchResultModelText">
                                        {searchInput}...
                                    </p>
                                </div>

                                <div className="searchResultModelMarketPlaceContainer">
                                    <span className="searchResultModelTextContainer">
                                        Marketplaces
                                    </span>
                                    <div className="searchResultModelContentContainer">
                                        <p className="searchResultModelTextDefault">
                                            No search result for {searchInput} !
                                        </p>
                                    </div>
                                </div>

                                <div className="searchResultModelMarketPlaceContainer">
                                    <span className="searchResultModelTextContainer">
                                        NFT's
                                    </span>
                                    <div className="searchResultModelContentContainer">
                                        <p className="searchResultModelTextDefault">
                                            No search result for {searchInput} !
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {
                        (showMobileSearchContainer === true) &&
                        (
                            <div className="searchResultModalMobileContainer">
                                <div className="mobileSearchHeaderContainer">
                                    <p className="mobileSearchHeaderText">Search</p>
                                    <IoMdClose
                                        onClick={() => toggleMobileSearchContainer()}
                                        size={25}
                                        color="fff"
                                    />
                                </div>

                                <div className="mobileContentContainer">
                                    <div className="headerSearchBarContainer">
                                        <IoSearch color="6d6d6d" />
                                        <input
                                            className="headerSearchInputField"
                                            type="text"
                                            placeholder="Search NFT's..."
                                            value={searchInput}
                                            onChange={(e) => updateSerchString(e)}
                                        />
                                    </div>

                                    {
                                        (searchInput.length > 0) &&
                                            <div className="mobileSearchInputContainer">
                                                <div className="searchResultModalTextContainer">
                                                    <span className="searchResultModelTextDefault">
                                                        Search result for&nbsp;
                                                    </span>
                                                    <p className="searchResultModelText">
                                                        {searchInput}...
                                                    </p>
                                                </div>

                                                <div className="searchResultModelMarketPlaceContainer">
                                                    <span className="searchResultModelTextContainer">
                                                        Marketplaces
                                                    </span>
                                                    <div className="searchResultModelContentContainer">
                                                        <p className="searchResultModelTextDefault">
                                                            No search result for {searchInput} !
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="searchResultModelMarketPlaceContainer">
                                                    <span className="searchResultModelTextContainer">
                                                        NFT's
                                                    </span>
                                                    <div className="searchResultModelContentContainer">
                                                        <p className="searchResultModelTextDefault">
                                                            No search result for {searchInput} !
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                    }
                                    
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="headerInfoSection">
                    <div className="headerInfoSectionContainer">
                        <ul className="headerInfoSectionItems">
                            <li className="headerInfoSectionContent">About</li>
                            <li className="headerInfoSectionContent">Blog</li>
                            <li className="headerInfoSectionContent">Help</li>
                        </ul>
                    </div>
                    <div className="headerButtonContainer">
                        <span className="headerButton">
                            CONNECT
                        </span>
                    </div>
                </div>
                <div className="headerMobileMenuIcon">
                    <GiHamburgerMenu
                        color="fff"
                        size={20}
                        onClick={() => toggleMobileMenu()}
                    />
                </div>

                {
                    (showMobileMenu === true) &&
                    (
                        <div className="mobileMenuContainer">
                            <div className="mobileMenuCloseContainer">
                                <IoMdClose
                                    color="fff"
                                    size={40}
                                    onClick={() => toggleMobileMenu()}
                                />
                            </div>

                            <div className="mobileMenuConnectContainer">
                                <span className="mobileConnectButton">
                                    CONNECT
                                </span>
                            </div>

                            <div className="mobileMenuListContainer">
                                <ul className="mobileMenuUnorderedList">
                                    <li className="mobileMenuListItem">
                                        <MdOutlineInfo
                                            size={18}
                                            color="fff"
                                        /> &nbsp;&nbsp;
                                        <p className="mobileMenuListItemText">About</p>
                                    </li>
                                    <li className="mobileMenuListItem">
                                        <MdListAlt
                                            size={18}
                                            color="fff"
                                        /> &nbsp;&nbsp;
                                        <p className="mobileMenuListItemText">Blog</p>
                                    </li>
                                    <li className="mobileMenuListItem">
                                        <MdHelpOutline
                                            size={18}
                                            color="fff"
                                        /> &nbsp;&nbsp;
                                        <p className="mobileMenuListItemText">Help</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                }

            </header>
        )
    }

}

export default HeaderComponent;