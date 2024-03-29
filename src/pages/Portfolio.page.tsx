import Portfolio from "../components/Portfolio/Portfolio";
import { ProjectType } from "../types/Project.type";
import PageBuilder from "../common/PageBuilder/PageBuilder";
import { forwardRef, useEffect, useState } from "react";
import { fetchProjectsData } from "../services/portfolioService";
import { profileConstants } from "../utils/constants";
import { getDistinctProjectTabs, normalizeProjectData } from "../utils/project.helper";

interface PortfolioPageProps {
    id: string;
    isActive: boolean;
}

const PortfolioPage = forwardRef<HTMLDivElement, PortfolioPageProps>(
    ({ id, isActive }, ref) => {
        const [projectData, setProjectData] = useState<ProjectType[]>([]);
        const [tabs, setTabs] = useState<string[]>(['all']);

        useEffect(() => {
            const getProjectData = async (profileId: string) => {
                try {
                    const response = await fetchProjectsData(profileId);
                    const normalizedData = normalizeProjectData(response.data);
                    setProjectData(normalizedData);
                    const distinctTabs = getDistinctProjectTabs(normalizedData);
                    setTabs(distinctTabs);
                } catch (error) {
                    console.error('Error fetching profile data:', error);
                }
            }
            getProjectData(profileConstants.PROFILE_ID);
        }, []);

        const portfolioComponent = projectData?.length && (
            <Portfolio
                tabs={tabs}
                projects={projectData}
            />
        );

        return (
            <div id={id} ref={ref}>
                <PageBuilder
                    id="portfolio-page-content"
                    title="Portfolio"
                    subtitle1="My Amazing Works"
                    children={portfolioComponent}
                    isActive={isActive}
                />
            </div>
        );
    });

export default PortfolioPage;
