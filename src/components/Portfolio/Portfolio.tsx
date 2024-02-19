import { Grid, Toolbar } from '@mui/material';
import FilterButton from '../../common/FilterButton/FilterButton';
import { useState } from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import { ProjectTag, ProjectType } from '../../types/Project.type';

interface TabItem {
    label: string;
    value: ProjectTag;
}

interface PortFolioProps {
    tabs: TabItem[];
    projects: ProjectType[];
}

const Portfolio: React.FC<PortFolioProps> = ({
    tabs,
    projects
}) => {
    const [selectedTab, setSelectedTab] = useState<string>('all');
    const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);

    const filterProjectByTag = (tag: ProjectTag) => {
        if (tag === 'all') {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter(
                project => project.tags.includes(tag)
            );
            setFilteredProjects(filtered);
        }
        setSelectedTab(tag);
    };

    return (
        <div className='portfolio-details-container'>
            <Toolbar sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                {tabs.map((tab: TabItem, index: number) => (
                    <FilterButton
                        key={index}
                        label={tab.label}
                        active={selectedTab === tab.value ? true : false}
                        onClick={() => (filterProjectByTag(tab.value))}
                    />
                ))}
            </Toolbar>
            <Grid container justifyContent={"center"}>
                {filteredProjects.map((project, i) => (
                    <Grid item xs={12} sm={12} md={4} p={1} key={i}>
                        <ProjectCard
                            title={project?.title}
                            details={project?.details}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Portfolio;