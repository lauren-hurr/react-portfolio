import React from "react";
import ProjectBanner from '../components/ProjectBanner';
import './Bigusbank.css';
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectHeadline from "../components/ProjectHeadline";
import ProjectBannerDetail from "../components/ProjectBannerDetail";
import ProjectContent from "../components/ProjectContent";

function BigUsBank() {
    const projectList = [
        { projectName: 'Top 10 U.S. Bank',
            projectDesc: 'I supported the design and development of a new and modernized customer servicing platform,\n' +
                'CSP. Designed workflows new workflows.',
            caseStudyHref: "PlanitCaseStudy",
            BannerImgRef: "images/bigusbank_banner.png",
            role: "Product Designer",
            tools: "Figma \n Lucidspark",
            timeline: "Apr, 2022 - Nov, 2022 \n 8 months",
            overview: "As the lead designer across three development teams, I played a key role in supporting the " +
                "design and development of a new and modernized customer servicing platform, CSP. Our goal was to " +
                "create a guided and uniform customer servicing experience that would help customer service agents " +
                "better serve customers while maintaining business and stakeholder goals. ",
            achievements: [
                "Collaborated closely with business stakeholders, software engineers, and PM/POs to ensure the success " +
                "of the project.  ",
                "Led stakeholder interviews and grooming sessions to gather requirements for the new intent/workflow. ",
                "Created user-flows, wireframes, and high-fidelity prototypes to address both customer servicing " +
                "agents' needs and business goals. ",
                "Led focus group sessions and usability testing to evaluate the new workflows. ",
                "Led share-out sessions and design reviews, and coordinated and received approvals for design " +
                "implementation. ",
                "Continued to support the development of the new workflows after hand-offs to developers until the " +
                "new designs were live."
            ],
            impact: "The launch of CSP had a significant impact on the customer service experience, resulting in " +
                "increased customer satisfaction and retention rates. The new workflows resulted in a 40% reduction " +
                "in manual work from complex processes, and the consolidated platform decreased fraud resolution calls " +
                "by over 50 seconds on average. The platform was quickly scaled across the entire line of business, " +
                "making a significant impact on efficiency and overall customer experience."

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

export default BigUsBank;
