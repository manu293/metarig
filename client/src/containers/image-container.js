// imports
import React from "react";

// local imports
import ImageComponent from "../components/image-component";

class ImageContainer extends React.Component {

    render() {
        return (
            <ImageComponent {...this.props} />
        )
    }

}

export default ImageContainer;