// imports
import React from "react";

// local imports
import VideoComponent from "../components/video-component";

class VideoContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            muteVideo: true,
        }
    }

    render() {
        const {muteVideo} = this.state;

        return (
            <VideoComponent
                muteVideo={muteVideo}
                toggleVideoMute={this.toggleVideoMute}
                {...this.props}
            />
        )
    }

    toggleVideoMute = () => {
        this.setState((prevState) => ({
            muteVideo: !prevState.muteVideo
        }))
    }

}

export default VideoContainer;