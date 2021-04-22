import React from 'react';
import Icon from '../../components/Icon';
import welcomeImage from '../../assets/images/welcome-image.jpg';

const ITEMS = [
    {
        icon: 'passport',
        title: 'Secure Reliable',
        text: 'Your Account is Secure'
    },
    {
        icon: 'invoice',
        title: 'First Withdraw',
        text: 'Get to Money Recive On'
    },
    {
        icon: 'award',
        title: 'Guaranted',
        text: 'You can Return to investment'
    },
];

const About = () => {
    const renderItems = () => {
        return ITEMS.map(item => {
            return (
                <div className="About-item">
                    <div className="About-firstcol">
                        <Icon classes="About-icon blue-icon" iconName={item.icon} />
                    </div>
                    <div className="About-data">
                        <span className="About-label">{item.title}</span>
                        <span className="About-text">{item.text}</span>
                    </div>
                </div>
            );
        });
    };

    return (
        <section className="About">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-xl-6 col-12 margin-auto">
                            <div>
                                <div>
                                    <span className="About-welcome">Welcome To An Nafi</span>
                                    <h2 className="About-title">About Nafi</h2>
                                </div>
                                <p className="About-paragraph">
                                Web design and Web development focused on clean & user-friendly experiences, I am experiences about building excellent Websites that improves the lives of those around me.
                                </p>
                                <p className="About-paragraph">
                                Web design and Web development focused on clean & user-friendly experiences, Websites that improves.
                                </p>
                                <div>
                                    {renderItems()}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-6 col-12 margin-auto">
                            <div className="About-seccol">
                                <img
                                    className="About-image"
                                    src={welcomeImage}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default About;
