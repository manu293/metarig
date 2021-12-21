// imports
import React from "react";
import {MdVolumeUp, MdVolumeOff} from "react-icons/md";

// local imports
import "../styles/components/video.css";

class VideoComponent extends React.Component {

    render() {

        const {muteVideo, collectibleDisplayURL, 
            toggleVideoMute, displayImage} = this.props;

        return (
            <div className="videoContainer">
                <video
                    id="visualizer_video"
                    autoPlay={true}
                    controls={false}
                    controlsList="nodownload"
                    crossOrigin="anonymous"
                    loop={true}
                    preload="muteVideo"
                    src={collectibleDisplayURL}
                    muted={muteVideo}
                    poster={displayImage}
                />

                <div className="videoVolumeContainer">

                    {
                        (muteVideo === true) ?
                            <div
                                onClick={() => toggleVideoMute()}
                                className="videoVolumeIconContainer"
                            >
                                <MdVolumeOff size={20} color="ff2e63" /> 
                            </div>
                            
                        :
                            <div
                                onClick={() => toggleVideoMute()}
                                className="videoVolumeIconContainer"
                            >
                                <MdVolumeUp size={20} color="ff2e63" /> 
                            </div>
                    }

                </div>
                
            </div>
        )
    }

}

export default VideoComponent;