// imports
import React from "react";

// local imports
import FeaturedComponent from "../components/featured-componet";

class FeaturedContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            featuredCollectionList: [],
        };
    }

    componentDidMount() {
        fetch("/api/v1/featuredCollections")
        .then((featuredResp) => featuredResp.json())
        .then((collectionData) => {
            if (
                (collectionData.featuredCollections) &&
                (collectionData.featuredCollections.length > 0)
            ) {
                this.setState({
                    featuredCollectionList: collectionData.featuredCollections
                });
            }
        })
        .catch((err) => console.log("err", err))
    }

    render() {

        const {featuredCollectionList} = this.state;

        return (
            <FeaturedComponent
                featuredCollectionList={featuredCollectionList}
            />
        );

    }

}

export default FeaturedContainer;