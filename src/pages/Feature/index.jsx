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
                <div className="shadow-sm bg-white FeatureCard">
                    <div className="mb-3">
                        <Icon
                            classes="FeatureCard-icon"
                            iconName={card.icon}
                        />
                    </div>
                    <div className="d-flex flex-column">
                        <span className="FeatureCard-label mb-2">
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
                    <div className="col-lg-6 col-md-6">
                        <div className="Feature-first">
                            <span className="Feature-welcome">
                                Our Amazing Feature
                            </span>
                            <h2 className="Feature-title">
                                Why Should You Invest
                            </h2>
                            <p className="Feature-text">
                                Lorem ipsum dolor sit amet elit , consectetur adipiscing , sed eiusmod tempor sit amet elit dolor sit amet elit ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="Feature-second">
                            {renderItems()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
