// imports
import React from "react";

// local imports
import "../styles/components/webViewer.css";

class ModelViewerComponent extends React.PureComponent {
    render() {

        const {collectibleDisplayURL, collectibleName,
            collectiblePosterImage} = this.props;

        return (
            <div className="webViewerContainer">
                <model-viewer
                    src={collectibleDisplayURL}
                    alt={collectibleName}
                    // poster={collectiblePosterImage}
                    seamless-poster={true}
                    shadow-intensity="1"
                    camera-controls={true}
                    autoplay={true}
                    ar={true}
                    auto-rotate={true}
                    ar-modes="webxr scene-viewer quick-look"
                    loading="lazy"
                />
            </div>
        )
    }
}

export default ModelViewerComponent;