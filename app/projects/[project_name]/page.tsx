'use client';

import ProjectsDetails from "@/ui/pages/projects/details/ProjectDetails";
import { useParams } from "next/navigation";

export default function ProjectPage() {
    const params = useParams();
    
    return (
        <ProjectsDetails projectName={params.project_name as string} />
    )
}