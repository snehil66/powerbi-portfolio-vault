import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const ProjectItem = ({ title, description, technologies, githubUrl, liveUrl }: ProjectItemProps) => {
  return (
    <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm p-6 hover:border-cyan-500/50 transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <Badge key={index} className=" bg-gray-800/80 text-gray-300 border-gray-700 hover:bg-gray-700 text-sm ">
                
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-gray-800/80"
            asChild
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
          {liveUrl && (
            <Button
              variant="outline"
              size="sm"
              className="bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-gray-800/80"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  const projects: ProjectItemProps[] = [
    {
      title: "Power BI Portfolio Vault",
      description: "A comprehensive portfolio showcasing interactive Power BI dashboards and data visualization projects built with modern web technologies.",
      technologies: ["TypeScript", "React", "Power BI", "Tailwind CSS"],
      githubUrl: "https://github.com/snehil66/powerbi-portfolio-vault",
    },
    { 
      title: "Loan Advanced Dashboard",
      description: "Advanced analytics dashboard for loan data analysis, providing insights into lending patterns, risk assessment, and portfolio performance.",
      technologies: ["Power BI", "DAX", "SQL", "Data Analysis"],
      githubUrl: "https://github.com/snehil66/Loan_AdvancedDashboard",
    },
    {
      title: "Netflix Insights",
      description: "Data analysis project exploring Netflix content trends, viewer patterns, and content performance using Python and visualization libraries.",
      technologies: ["Python", "Jupyter Notebook", "Pandas", "Data Visualization"],
      githubUrl: "https://github.com/snehil66/Netflix_Insights",
    },
    {
      title: "Car Features and MSRP Analysis",
      description: "Comprehensive analysis of car features and their impact on MSRP, helping understand pricing strategies in the automotive industry.",
      technologies: ["Python", "Data Analysis", "Machine Learning", "Statistical Analysis"],
      githubUrl: "https://github.com/snehil66/Car_Features_and_MSRP_Analysis",
    },
    {
      title: "Zomato Sales Dashboard",
      description: "Interactive dashboard analyzing Zomato sales data, restaurant performance, and customer ordering patterns.",
      technologies: ["Power BI", "DAX", "Data Modeling", "ETL"],
      githubUrl: "https://github.com/snehil66/Zomato_Sales_Dashboard",
    },
    {
      title: "Pizza Sales Analysis",
      description: "End-to-end analysis of pizza sales data, identifying top-performing products, peak hours, and revenue trends.",
      technologies: ["Power BI", "SQL", "Data Analysis", "Business Intelligence"],
      githubUrl: "https://github.com/snehil66/Pizza_Sales_Analysis",
    },
    {
      title: "HR Dashboard 2.0",
      description: "Advanced HR analytics dashboard tracking employee performance, attrition rates, and workforce demographics.",
      technologies: ["Power BI", "HR Analytics", "KPI Tracking", "Data Visualization"],
      githubUrl: "https://github.com/snehil66/HR_Dashboard_2.O",
    },
    {
      title: "IPL Live Score Dashboard",
      description: "Real-time IPL cricket score dashboard with match statistics, player performance metrics, and team analytics.",
      technologies: ["Power BI", "Real-time Data", "Sports Analytics", "DAX"],
      githubUrl: "https://github.com/snehil66/IPL_Live_Score_Dashboard",
    },
  ];

  return (
    <section className="py-20 bg-black" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Personal Projects
        </h2>
        <p className="text-cyan-400 text-center mb-12 text-lg">
          Exploring data through innovative analytics and visualization projects
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProjectItem {...project} />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-gray-800/80"
            asChild
          >
            <a href="https://github.com/snehil66?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;