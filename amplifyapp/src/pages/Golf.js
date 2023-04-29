import React from "react";
import ProjectBanner from '../components/ProjectBanner';
import './Bigusbank.css';
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectHeadline from "../components/ProjectHeadline";
import ProjectBannerDetail from "../components/ProjectBannerDetail";
import ProjectContent from "../components/ProjectContent";

function Golf() {
    const projectList = [
        { projectName: 'U.S. Golf Organization',
            projectDesc: 'I designed and developed golf tournament leaderboards for new scoring types.',
            caseStudyHref: "PlanitCaseStudy",
            BannerImgRef: "images/golf_banner.png",
            role: "Product Designer",
            tools: "Figma \n Optimal Workshop",
            timeline: "April, 2022 - November, 2022 \n 8 months",
            overview: "In collaboration with an API data partner, I designed new and complex golf tournament " +
                "leaderboards for the U.S. Golf Organization’s website.  The challenge was to create innovative " +
                "designs that would effectively display multiple levels of new scoring information while adhering " +
                "to the site’s existing design patterns.",
            achievements: [
                "Designed multiple complex leaderboards that clearly displayed various scoring types while balancing " +
                "front-end and back-end constraints.",
                "Created mid-fidelity wireframes with intuitive structure and hierarchy.",
                "Led designs from exploration to implementation and successfully integrated new scoring data into " +
                "current design patterns. ",
                "Collaborated with front-end and back-end developers to validate the feasibility of the new " +
                "leaderboard designs and ensure that they met the business requirements."
            ],
            impact: "The new leaderboard designs had a significant impact on the golf tournament experience, providing " +
                "users with clear and concise information about various scoring types. The designs were successfully " +
                "implemented on the U.S. Golf Organization’s website and were positively received by users. The " +
                "project demonstrated my ability to solve complex design challenges and deliver innovative solutions " +
                "that meet business needs."
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

export default Golf;
