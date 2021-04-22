import React from 'react';
import About from '../About';
import CustomButton from '../../components/Button';
import Feature from '../Feature';
import Icon from '../../components/Icon';

const STATISTICS = [
    {
        icon: 'registered',
        amount: 122500,
        label: 'User Sign Up'
    },
    {
        icon: 'world',
        amount: 94500,
        label: 'Country Support'
    },
    {
        icon: 'monero',
        amount: 7855500,
        label: 'Average Invest'
    },
    {
        icon: 'profit',
        amount: 1285500,
        label: 'Get Profit'
    }
]

const Home = () => {
    const renderStatistics = () => {
        return STATISTICS.map(statistic => {
            return (
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="HomeStatistics-container">
                        <div className="HomeStatistics-firstcol">
                            <Icon
                                classes="HomeStatistics-icon font-size-50"
                                iconName={statistic.icon}
                            />
                        </div>
                        <div className="HomeStatistics-data">
                            <span className="HomeStatistics-amount">
                                {statistic.amount}
                            </span>
                            <span className="HomeStatistics-label">
                                {statistic.label}
                            </span>
                        </div>
                    </div>
                </div>
            );
        })
    }

    return (
        <div id="Home">
            <section className="HomeIntroduction">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <h2 className="HomeIntroduction-title font-color-white">Crp Technology Blockchain Perfomer</h2>
                            <p className="HomeIntroduction-description font-color-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </p>
                            <div className="margin-top-20">
                                <CustomButton
                                    classes="margin-right-20"
                                    icon="reload"
                                    text="Sign Up"
                                />
                                <CustomButton
                                    icon="reload"
                                    text="Token Sale"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="HomeStatistics">
                <div className="container">
                    <div className="row">
                        {renderStatistics()}
                    </div>
                </div>
            </section>
            <About />
            <Feature />
        </div>
    );
};

export default Home;
