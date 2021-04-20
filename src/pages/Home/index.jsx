import React from 'react';
import CustomButton from '../../components/Button';
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
                    <div className="Home-stat-container">
                        <Icon
                            classes="Home-stat-icon font-size-50"
                            iconName={statistic.icon}
                        />
                        <div className="Home-stat-data">
                            <span className="Home-stat-amount">
                                {statistic.amount}
                            </span>
                            <span className="Home-stat-label">
                                {statistic.label}
                            </span>
                        </div>
                    </div>
                </div>
            );
        })
    }

    return (
        <div className="Home">
            <section className="Home-introduction">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <h2 className="font-color-white font-size-45 font-weight-700">Crp Technology Blockchain Perfomer</h2>
                            <p className="font-color-white font-size-18">
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
            <section className="Home-statistics">
                <div className="container">
                    <div className="row">
                        {renderStatistics()}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
