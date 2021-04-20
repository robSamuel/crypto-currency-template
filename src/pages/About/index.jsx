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
                <div>
                    <div>
                        <Icon iconName={item.icon} />
                    </div>
                    <div>
                        <span>{item.title}</span>
                        <span>{item.text}</span>
                    </div>
                </div>
            );
        });
    };

    return (
        <section className="About">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-xl-6 col-12">
                            <div>
                                <span>Welcome To An Nafi</span>
                                <h2>About Nafi</h2>
                            </div>
                            <p>
                            Web design and Web development focused on clean & user-friendly experiences, I am experiences about building excellent Websites that improves the lives of those around me.
                            </p>
                            <p>
                            Web design and Web development focused on clean & user-friendly experiences, Websites that improves.
                            </p>
                            <div>
                                {renderItems()}
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-6 col-12">
                            <img
                                className="About-image"
                                src={welcomeImage}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default About;
