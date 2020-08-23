import React, { Component } from 'react'
import Sidebar from './Sidebar'
import HomeContent from './HomeContent'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                        <HomeContent />
                    </div>
                </div>
            </div>
        )
    }
}
