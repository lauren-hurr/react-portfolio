import React from "react";
import ProjectBanner from '../components/ProjectBanner';
import './Bigusbank.css';
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectHeadline from "../components/ProjectHeadline";
import ProjectBannerDetail from "../components/ProjectBannerDetail";
import ProjectContent from "../components/ProjectContent";

function JobBoard() {
    const projectList = [
        { projectName: 'Employment Website',
            projectDesc: 'I designed and developed golf tournament leaderboards for new scoring types.',
            caseStudyHref: "PlanitCaseStudy",
            BannerImgRef: "images/golf_banner.png",
            role: "Product Designer",
            tools: "Figma \n Optimal Workshop",
            timeline: "April, 2022 - November, 2022 \n 8 months",
            overview: "I was tasked with improving the usability, functionality, and appearance of a job board " +
                "platform for the client. This involved optimizing the user experience for three different user types " +
                "by identifying pain points and opportunities for improvement.",
            achievements: [
                "Led user interviews, testing, and research to gather data and inform design decisions.",
                "Prioritized UX recommendations along with a severity and implementation ease matrix.",
                "Restructured the information architecture and created responsive wireframes that aligned closely" +
                " with both user and business needs.",
                "Developed a streamlined user experience that accounted for three different user types and simplified " +
                "goal completion."
            ],
            impact: "The redesigned job board platform resulted in a more intuitive and user-friendly experience, " +
                "improving the usability, functionality, and appearance of the platform. The optimized user " +
                "experience and streamlined design made it easier for users to accomplish their goals, ultimately " +
                "increasing engagement and retention rates."
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

export default JobBoard;