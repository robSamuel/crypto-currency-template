import React from 'react';
import Icon from '../../components/Icon';

const CARDS = [
    {
        icon: 'anchor',
        label: 'Token Ecosystem'
    },
    {
        icon: 'mobile',
        label: 'Mobile App'
    },
    {
        icon: 'credit-card',
        label: 'Credit Card Use'
    },
    {
        icon: 'lock',
        label: 'Secure Storage'
    },
    {
        icon: 'shield',
        label: 'Insurance Protection'
    },
    {
        icon: 'mail-bulk',
        label: '24 / 7 Support Center'
    },  
];

const Feature = () => {
    const renderItems = () => {
        return CARDS.map(card => {
            return (
                <div className="FeatureCard">
                    <div className="FeatureCard-firstrow">
                        <Icon
                            classes="FeatureCard-icon"
                            iconName={card.icon}
                        />
                    </div>
                    <div className="FeatureCard-secondrow">
                        <span className="FeatureCard-label">
                            {card.label}
                        </span>
                        <p className="FeatureCard-text">
                            Lorem ipsum dolor sit amet elit adipiscing sed consectetur amet eiusmod tempor incididunt dolor sit amet.
                        </p>
                    </div>
                </div>
            );
        });
    }

    return (
        <section className="Feature">
            <div className="container">
                <div className="row">
                    <div>
                        <div>
                            <span className="Feature-welcome">
                                Our Amazing Feature
                            </span>
                            <h2 className="Feature-title">
                                Why Should You Invest
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet elit , consectetur adipiscing , sed eiusmod tempor sit amet elit dolor sit amet elit ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="Feature-seccontainer">
                            {renderItems()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
