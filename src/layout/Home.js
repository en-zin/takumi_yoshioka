import React from 'react';
import '../css/home.css';
import '../css/animation.css'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <main>
            <div className="bg_home_img">
                <div className="slogan_container">
                    <div className="slogan_container_top">
                        <span>B</span>
                        <span>e</span>
                        <span>s</span>
                        <span>t</span>
                        <span>が</span>
                        <span>無</span>
                        <span>理</span>
                        <span>な</span>
                        <span>ら</span>
                    </div>
                    <div className="slogan_container_bottom">
                        <span>B</span>
                        <span>e</span>
                        <span>t</span>
                        <span>t</span>
                        <span>e</span>
                        <span>r</span>
                        <span>を</span>
                        <span>探</span>
                        <span>せ</span>
                    </div>
                </div>
            </div>

            {/* who are you */}
            <div className="bg_profile_img">
                <div className="bg_color_blue">
                </div>
                    <section className="content">
                        <div className="content_title_container">
                            <h2 className="content_title top_border">Who are you</h2>
                        </div>
                        <div className="overview">
                            <div className="overview_text">
                                <p>初めまして<br/>滋賀県でプログラミングスクールの講師やドッジボールのコーチをしている
                                    <br/>吉岡 拓実です。</p>
                            </div>
                            <div className="overview_more">
                                <Link to='/Profile' className="nav_menu">Learn more...</Link>
                            </div>
                        </div>
                    </section>
            </div>

            {/* about */}
            <div className="bg_about_img">
                <div className="bg_color">
                    <section className="content">
                        <div className="content_title_container said_border">
                            <h2 className="content_title">About</h2>            
                        </div>
                        <div className="overview">
                            <div className="overview_text">
                                <p>なぜ、プログラミングスクールの講師やドッジボールのコーチを始めたか。</p>
                            </div>
                            <div className="overview_more">
                                <Link to='/About' className="nav_menu">Learn more...</Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Skill */}
            <div className="bg_skill_img">
                <div className="bg_color">
                    <section className="content skill_content_pc">
                        <div className="skill_container">
                            <h2 className="content_title under_border">Skill</h2>
                        </div>
                        <div className="content_overview skill_icon_container skill_icon_container_pc">
                            <div className="skill_icons_home">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                            </div> 
                            <div className="skill_icons_home">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                            </div> 
                            <div className="skill_icons_home">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            </div> 
                        </div>
                            <div className="overview overview_more">
                                <Link to='/Skill' className="nav_menu">Learn more...</Link>
                            </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Home;