import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeGridContainer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HomeProjectCard from "./HomeProjectCard";

const HomeGridContainer = () => {
        const projectList = [
            { projectName: 'Top 10 U.S. Bank',
                projectDesc: 'Product Designer - 2022',
                caseStudyHref: "bigusbank",
                caseStudyImgRef: "images/bigbank_thumb.png"},
            { projectName: 'Top 3 U.S. Bank',
                projectDesc: 'Product Designer - 2022',
                caseStudyHref: "biggerusbank",
                caseStudyImgRef: "images/biggerusbank_thumb.png"},
            { projectName: 'U.S. Golf Organization',
                projectDesc: 'Product Designer - 2023',
                caseStudyHref: "golf",
                caseStudyImgRef: "images/golf_thumb.png"},
            { projectName: 'Non-Profit Social Enterprise',
                projectDesc: 'Product Designer - 2022',
                caseStudyHref: "jobboard",
                caseStudyImgRef: "images/nonprofit_thumb.png"}
        ];

    return (
        <Container fluid className={"no-padding"}>
            <Container fluid>
                <Row className={"homeGridHeaderRow"}>
                    <Col className={"homeGridHeader"}>
                        <h1 className={"homeGridHeaderText"}>
                            Selected Work
                        </h1>
                    </Col>
                </Row>
                <Row className="homeGridProjectRow">
                    <Col md={6} className="homeGridProjectCol">
                        <div className="vr-line"></div>
                        <div className="hr-line"></div>
                        <HomeProjectCard params = {projectList[0]}/>
                    </Col>
                    <Col md={6} className="homeGridProjectCol">
                        <div className="hr-line"></div>
                        <HomeProjectCard params = {projectList[1]}/>
                    </Col>
                </Row>
                <Row className={"homeGridProjectRow"}>
                    <Col md={6} className={"homeGridProjectCol"}>
                        <div className="vr-line"></div>
                        <div className="hr-line"></div>
                        <HomeProjectCard params = {projectList[2]}/>
                    </Col>
                    <Col md={6} className={"homeGridProjectCol"}>
                        <div className="hr-line"></div>
                        <HomeProjectCard params = {projectList[3]}/>
                    </Col>
                </Row>
            </Container>

        </Container>
    );
}

export default HomeGridContainer;