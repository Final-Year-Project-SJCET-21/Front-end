import React, { Component } from "react";

export default class ChannelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: "",
      toggle: true
    };
  }
//   onChange = e => {
//     let { name, value } = e.target;
//     this.setState({ [name]: value });
//   };
  onSubmit = e => {
    e.preventDefault();
    console.log("Submiting ", this.props.courseName);
    this.props.selectChannel("hello");
    this.setState({ channel: "" });
    this.setState({toggle: false}) 
  };
  
  render() {
    return (
      <div>
          {this.state.toggle?( 
              
          <button
                        className=" max-auto  border border-indigo-500 text-indigo-500 active:bg-blueGray-600   text-sm font-semibold  px-3 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150 hover:bg-indigo-500 hover:text-white"
                        type="button"
                        onClick={this.onSubmit
                          
                        }
                      > Join</button>): <div></div>}
        {/* <form onSubmit={this.onSubmit}>
          <label>Channel Name</label>
          <input
            placeholder="Channel Name"
            name="channel"
            value={this.state.channel}
            onChange={this.onChange}
          />
          <input type="submit" value="Join Channel" />
        </form> */}
      </div>
    );
  }
}
