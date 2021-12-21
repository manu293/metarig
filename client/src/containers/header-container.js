// imports
import React from "react";

// local imports
import HeaderComponent from "../components/header-component";

class HeaderContainer extends React.Component  {

    constructor(props) {
        super(props);

        this.state = {
            showMobileMenu: false,
            showMobileSearchContainer: false,
            searchInput: "",
        }
    }

    render() {

        const {showMobileMenu, searchInput, showMobileSearchContainer} = this.state;

        return (
            <HeaderComponent
                toggleMobileMenu={this.toggleMobileMenu}
                showMobileMenu={showMobileMenu}
                searchInput={searchInput}
                updateSerchString={this.updateSerchString}
                toggleMobileSearchContainer={this.toggleMobileSearchContainer}
                showMobileSearchContainer={showMobileSearchContainer}
            />
        );

    }

    updateSerchString = (e) => {
        this.setState({searchInput: e.target.value});
    }

    toggleMobileMenu = () => {
        this.setState((prevState) => ({
            showMobileMenu: !prevState.showMobileMenu,
        }));
    }

    toggleMobileSearchContainer = () => {
        this.setState((prevState) => ({
            showMobileSearchContainer: !prevState.showMobileSearchContainer,
        }));
    }

}

export default HeaderContainer; 