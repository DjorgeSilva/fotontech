import React from 'react'
import { Container, BannerHome } from "./HomeElements"
import logo1 from '../../img/logo1.png'
import logo2 from '../../img/logo2.png'
import logo3 from '../../img/logo3.png'
import logo4 from '../../img/logo4.png'
import logo5 from '../../img/logo5.png'
import logo6 from '../../img/logo6.png'
import {Row, Col} from "react-bootstrap"


export const Home = () => {
    return (
        <Container>
            <BannerHome>
                <div className="txtBanner">
                    <h1>We can build your next app</h1>
                    <h6>Foton is a bleeding edge tech company that has the best resources to help you with design and software development or even creating your app from scratch</h6>
                </div>

                <div className="txtBannerMarcas">
                    <div className="wrap-grid">
                        <Row>
                            <Col xs={6}>
                                <div className="box-icone">
                                    <img src={logo1} alt="logo" />
                                    <p>ZiYou</p>
                                </div>
                            </Col>

                            <Col xs={6}>
                                <div className="box-icone">
                                    <img src={logo3} alt="logo" />
                                    <p>Angora</p>
                                </div>
                            </Col>

                            <Col xs={6}>
                                <div className="box-icone">
                                    <img src={logo2} alt="logo" />
                                    <p>Sense.chat</p>
                                </div>
                            </Col>

            

                            <Col xs={6}>
                                <div className="box-icone">
                                    <img src={logo4} alt="logo" />
                                    <p>Confy</p>
                                </div>
                            </Col>

                            <Col xs={6}>
                                <div className="box-icone">
                                    <img src={logo5} alt="logo" />
                                    <p>Scatter</p>
                                </div>
                            </Col>

                            <Col xs={6}>
                                <div className="box-icone">
                                    <img src={logo6} alt="logo" />
                                    <p>Squirrel</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </BannerHome>
        </Container>
    )
}
