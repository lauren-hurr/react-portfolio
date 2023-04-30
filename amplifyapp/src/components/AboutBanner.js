import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutBanner.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AboutBanner() {
    return (
        <Container>
            <Row className={"aboutBannerRow"}>
                <Col md={6} className={"aboutTitleCol"}>
                    <Row>
                        <Col className={"aboutNameDiv"}>
                            <p className="aboutJobName">
                                Lauren Hurr
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"aboutJobDiv"}>
                            <p className="aboutJobTitle">
                                Product Designer
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"detailDiv"}>
                            <Row>
                                <Col>
                                    <p className="aboutDetails">
                                        Lauren is a strategic and data-driven problem solver with 4 years of experience across
                                        financial services, healthcare, and non-profit industries. She is committed to delivering
                                        optimal user-centered designs that drive business results and believes that being a great
                                        designer involves understanding both the user's needs and the business objectives.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="aboutDetails">
                                        Lauren has extensive experience working in all stages of the design process from research
                                        to product implementation, where she closely collaborates with product managers,
                                        data analysts, and developers until the successful launch of a product. Lauren’s strengths
                                        include data analysis, user flows, information architecture, wireframing, and prototyping.

                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Col>
                <Col md={6} className={"aboutDescCol"}>
                    <div className={"imageDiv"}>
                        <img className="aboutProfilePic" src={"images/headshot.png"} alt={"AboutMePhoto"}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutBanner;
