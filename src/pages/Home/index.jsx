import React from 'react';
import CustomButton from '../../components/Button';

const Home = props => {
    return (
        <div className="Home">
            <section className="Home-introduction">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 Home-intro-content">
                            <h2 className="font-color-white">Crp Technology Blockchain Perfomer</h2>
                            <p className="font-color-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </p>
                            <div className="Home-intro-btns">
                                <CustomButton
                                    text="Sign Up"
                                />
                                <CustomButton
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
