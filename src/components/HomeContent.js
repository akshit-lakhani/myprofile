import React, { Component } from 'react';
import '../assets/css/HomeContent.scss';
import { Card, Progress } from 'antd';

const gridStyle = {
    width: '100%',
    textAlign: 'center',
    boxShadow: "gray -2px 1px 4px 0px",
    fontWeight: '600',
    marginTop: '-60px',
};
const education = {
    backgroundColor: 'black',
    color: '#78c7d2'
}
export default class HomeContent extends Component {
    render() {
        return (
            <div className="col-sm-10">
                <div className="container-fluide">
                    <div className="row">
                        <div className="col-sm-12 px-0">
                            <div className="thumb-img">
                                <img src={require("../assets/image/bg.jpg")} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <div className="card">
                                <img src={require('../assets/image/akshit.jpg')} alt="Avatar" style={{ width: '100%' }} />
                                <div className="name-container">
                                    <h4><b>Akshit Lakhani</b></h4>
                                    <p>Web Debeloper & Graphics Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="exp">
                                <Card title="Experience" style={gridStyle}>
                                    <p>
                                        Experience in Web Development by using React.JS and Next.JS. I have knowledge about external liabraries
                                        like Ant-design and Bootstrap. I have Experience in Java Script, HTML, Css, Scss, PHP. and in Backend MySQL.
                                    </p>
                                    <p>
                                        I'm Expertize in Graphics Designing. I can Design Graphics like Banner, Logo, Business Card, Festival Posts,
                                        Social Media Posts and Letterpad. I have Experience with Adobe Photoshop, Corel Draw, Adobe Illustrator and Adobe XD
                                    </p>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-sm-12">
                            <div className="d-flex justify-content-between">
                                <button className="button"><span>DOWNLOAD CV</span></button>
                                <button className="button"><span>CONTACT ME</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="row edu">
                        <div className="col-sm-4">
                            <Card title="S.S.C. (X)" style={education}>
                                <div><strong>Gujarat Secondary and Higher Secondary Board</strong></div>
                                <div><strong>2012</strong></div>
                                <p>I completed my S.S.C education in Gujarat Secondary and Higher Secondary Education Board. I successful completed all the credits without any fallout and got 61% overall.</p>
                            </Card>
                        </div>
                        <div className="col-sm-4">
                            <Card title="H.S.C. (XII) Education" style={education}>
                                <div><strong>Gujarat Secondary and Higher Secondary Board</strong></div>
                                <div><strong>2015</strong></div>
                                <p>I completed my S.S.C education in Gujarat Secondary and Higher Secondary Education Board. I successful completed all the credits without any fallout and got 60% overall.</p>
                            </Card>
                        </div>
                        <div className="col-sm-4">
                            <Card title="Bachelors in Computer Application" style={education}>
                                <div><strong>Veer Narmad South Gujarat University</strong></div>
                                <div><strong>2018</strong></div>
                                <p>I completed my Bachelors in Computer Application education in Veer Narmad South Gujarat University. I successful completed all the credits without any fallout and got 67.7% overall.</p>
                            </Card>
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-sm-12">
                            <div className="skills">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th width="33%">Proffetional</th>
                                            <th width="33%">Personal</th>
                                            <th width="33%">Software</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>React</strong><Progress percent={50} /></td>
                                            <td><strong>Communication</strong><Progress percent={80} /></td>
                                            <td><strong>Adobe Photoshop</strong><Progress percent={90} /></td>
                                        </tr>
                                        <tr>
                                            <td><strong>PHP</strong><Progress percent={60} /></td>
                                            <td><strong>Teamwork</strong><Progress percent={80} /></td>
                                            <td><strong>Corel Draw</strong><Progress percent={90} /></td>
                                        </tr>
                                        <tr>
                                            <td><strong>HTML</strong><Progress percent={90} /></td>
                                            <td><strong>Creativity</strong><Progress percent={85} /></td>
                                            <td><strong>Adobe Illustrator</strong><Progress percent={80} /></td>
                                        </tr>
                                        <tr>
                                            <td><strong>CSS/SCSS</strong><Progress percent={85} /></td>
                                            <td><strong>Dedication</strong><Progress percent={70} /></td>
                                            <td><strong>Adobe XD</strong><Progress percent={70} /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
