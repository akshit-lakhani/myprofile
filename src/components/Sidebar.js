import React, { Component } from 'react';
import "../assets/css/Sidebar.scss"

export default class Sidebar extends Component {
    render() {
        return (
            <div className="col-sm-2 sidebar">
                <div>
                    <div>

                    </div>
                    <div>
                        <div className="link">
                            <div className="text">Home</div>
                        </div>
                        <div className="link">
                            <div className="text">About Me</div>
                        </div>
                        <div className="link">
                            <div className="text">Qualification</div>
                        </div>
                        <div className="link">
                            <div className="text">Contact Me</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
