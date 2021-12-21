// imports
import React from "react";

// local imports
import ModelViewerComponent from "../components/modelViewer-component";

class ModelViewerContainer extends React.Component {

    modelViewerScript = null;

    componentDidMount() {
        this.modelViewerScript = document.createElement("script");
        this.modelViewerScript.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
        this.modelViewerScript.type = "module";
        document.body.appendChild(this.modelViewerScript);
    }

    componentWillUnmount() {
        document.body.removeChild(this.modelViewerScript);
    }

    render() {

        return (
            <ModelViewerComponent
                {...this.props}
            />
        );
    }

}

export default ModelViewerContainer;