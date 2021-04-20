import React from 'react';
import CustomButton from '../../components/Button';

const Home = props => {
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
        </div>
    );
};

export default Home;
