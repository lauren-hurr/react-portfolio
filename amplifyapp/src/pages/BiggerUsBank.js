import React from "react";
import ProjectBanner from '../components/ProjectBanner';
import './Bigusbank.css';
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectHeadline from "../components/ProjectHeadline";
import ProjectBannerDetail from "../components/ProjectBannerDetail";
import ProjectContent from "../components/ProjectContent";

function BiggerUsBank() {
    const projectList = [
        { projectName: 'Top 3 U.S. Bank',
            projectDesc: 'I supported the design and development of a new and modernized dashboard for the marketing ' +
                'team to make data-driven decisions.',
            caseStudyHref: "PlanitCaseStudy",
            BannerImgRef: "images/biggerusbank_banner.png",
            role: "Product Designer",
            tools: "Figma \n Optimal Workshop",
            timeline: "April, 2022 - November, 2022 \n 8 months",
            overview: "I spearheaded the development and execution of a custom dashboard tailored to the needs of the " +
                "client's marketing team. The dashboard played a critical role in monitoring the performance of " +
                "customer-facing applications used in physical bank branches, empowering the client to make " +
                "data-driven decisions and insights.",
            achievements: [
                "Conducted stakeholder interviews to gather technical, data, and experience requirements for the " +
                "internal dashboard. ",
                "Led an interview analysis workshop to align the team on stakeholder goals, expectations, and scope. ",
                "Conducted a card sort study and analyzed data to inform the metric/information architecture of the " +
                "dashboard. ",
                "Designed accessible mid-fidelity wireframes that encompassed all data requirements and addressed " +
                "stakeholder needs. ",
                "Collaborating with system and data architects to develop designs that supported the future-state " +
                "architecture.",
            ],
            impact: "As a result of my efforts, the client's internal marketing team was empowered to efficiently " +
                "track and socialize platform performance through the use of engaging analytical dashboards. This " +
                "led to increased engagement with existing and prospective clients regarding financial products. " +
                "The strategic roadmap that I implemented also played a significant role in enabling the client to " +
                "make data-driven decisions regarding marketing strategy."
        },
    ];
    return (
        <Container fluid className="p-0">
            <NavBar />
            <ProjectHeadline params={projectList[0]} />
            <div className="Home">
                <ProjectBanner params={projectList[0]} />
                <ProjectBannerDetail params={projectList[0]}/>
            </div>
            <ProjectContent params={projectList[0]}/>
            <Footer />
        </Container>

    );
}

export default BiggerUsBank;
