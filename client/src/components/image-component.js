// imports
import React from "react";

// local imports
import "../styles/components/video.css";

class ImageComponent extends React.PureComponent {


    render() {

        const {collectibleName, collectibleDisplayURL} = this.props;

        return (
            <div className="videoContainer">
                <img
                    src={collectibleDisplayURL}
                    alt={collectibleName}
                />
            </div>
        )
    }

}

export default ImageComponent;