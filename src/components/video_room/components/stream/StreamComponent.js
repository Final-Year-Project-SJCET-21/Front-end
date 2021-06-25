import React, { Component } from 'react';
import './StreamComponent.css';
import OvVideoComponent from './OvVideo';

export default class StreamComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { nickname: this.props.user.getNickname(), showForm: false, mutedSound: false, isFormValid: true };
    }
render() {
        return (
            <div className="OT_widget-container">
               
                {this.props.user !== undefined && this.props.user.getStreamManager() !== undefined ? (
                    <div className="streamComponent ">
                        <OvVideoComponent user={this.props.user} mutedSound={this.state.mutedSound} />
                    </div>
                ) : null}
            </div>
        );
    }
}
