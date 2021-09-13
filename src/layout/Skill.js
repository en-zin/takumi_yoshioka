import React from 'react';
import '../css/home.css';
import '../css/skill.css';
import AWS from '../img/aws.svg';
import EC2 from '../img/aws-ec2.svg';
import RDS from '../img/aws-rds.svg';
import S3 from '../img/aws-s3.svg';

const Skill = () => { 
    
    return (
        <main>
            <div className="bg_skill_img">
                <div className="bg_color">
                    <section className="content">
                        <div className="skill_container">
                            <h2 className="content_title under_border">Skill</h2>
                        </div>
                        <div className="content_overview">
                            <div className="skill_icons">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                            </div> 
                            <div className="skill_icons">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                            </div> 
                            <div className="skill_icons">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            </div> 
                            <div className="skill_icons">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                            </div>
                            <div className="skill_icons">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />         
                            </div>
                            <div className="skill_icons">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" />
                            </div>
                            <div className="skill_icons">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
                            </div>
                            <div className="skill_icons">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            </div>
                            <div className="skill_icons">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                            </div>
                            <div className="skill_icons">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" />
                            </div>
                            <div className="skill_icons">
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                            </div>
                            <div className="skill_icons">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                            </div>
                            <div className="skill_icons">
                                <img src={AWS}></img>
                            </div>
                            <div className="skill_icons">
                                <img src={EC2}></img>
                            </div>
                            <div className="skill_icons">
                                <img src={RDS}></img>
                            </div>
                            <div className="skill_icons">
                                <img src={S3}></img>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
    
}

export default Skill;