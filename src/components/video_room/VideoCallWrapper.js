import React, { Component } from "react";
import ChannelForm from "./ChannelForm";
import Call from "./Call";

class VideoCallWrapper extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.history.location.state.courseName)
    this.state = {
      channel: "",
    };
  }

  selectChannel = (channel) => {
    this.setState({ channel });
  };

  render() {
    return (
      <div className=" bg-hero-pattern bg-cover  sm:max-w-xl sm:p-32 md:max-w-full  md:px-24 lg:px-8 lg:py-20 h-screen">
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
            <div className="w-full  px-4">
              <div className="relative flex flex-col min-w-0 min-h-full break-words bg-white w-full m-6 shadow-lg rounded-lg pb-20 h-full">
              <ChannelForm
                selectChannel={this.selectChannel}
                courseName={this.props.history.location.state.courseName}
              />
              <Call channel={this.state.channel} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoCallWrapper;
