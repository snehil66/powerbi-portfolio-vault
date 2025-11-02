import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

const ExperienceItem = ({ company, role, period, location, highlights }: ExperienceItemProps) => {
  return (
    <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm p-6 hover:border-cyan-500/50 transition-all duration-300">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center">
            <Briefcase className="text-cyan-400" size={24} />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-1">{role}</h3>
          <p className="text-lg font-semibold text-cyan-400 mb-1">{company}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-gray-800/80 text-gray-300 border-gray-700">{period}</Badge>
            <Badge className="bg-gray-800/50 text-gray-400 border-gray-700/50">{location}</Badge>
          </div>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex gap-2 text-gray-300">
                <span className="text-cyan-400 mt-1">▸</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

const Experience = () => {
  const experiences: ExperienceItemProps[] = [
    {
      company: "WM India",
      role: "Developer II - Business Intelligence",
      period: "Aug 2024 – Present",
      location: "Gurugram, India",
      highlights: [
        "Developed and maintained 12+ interactive Power BI dashboards communicating trends, patterns, and insights",
        "Performed ETL operations on large datasets (5M+ rows) from diverse sources including Snowflake SQL, SQL Server, Excel, and SharePoint",
        "Built and optimised 15+ data models in Power BI using Performance Tuning",
        "Published 15+ dashboards to Power BI Service with Row-Level Security (RLS) and workspace management",
        "Resolved 30+ data quality and performance issues, ensuring stable and scalable BI reporting environment"
      ]
    },
    {
      company: "IIT Kanpur Development Foundation",
      role: "Data Analyst",
      period: "July 2023 – Feb 2024",
      location: "Kanpur, India",
      highlights: [
        "Empowered donation teams by creating user-friendly dashboards and reports using Power BI, SharePoint and Excel",
        "Contributed to a 25% increase in data accessibility",
        "Transformed raw data into insights using Power Query (M) techniques",
        "Supported establishment of new donation strategies leading to 12% growth in revenue"
      ]
    },
    {
      company: "Nagarro",
      role: "Associate Engineer (Data Analyst)",
      period: "April 2022 – April 2023",
      location: "Gurugram, India",
      highlights: [
        "Utilized MSSQL, Excel and Power BI for data processing and analysis",
        "Successfully deployed quality projects for clients focusing on efficiency and accuracy",
        "Managed data input and output from Microsoft SQL Server efficiently using SQL Server Management Studio"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-950" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          Professional Experience
        </h2>
        <p className="text-cyan-400 text-center mb-12 text-lg">
          Building data solutions that drive business decisions
        </p>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ExperienceItem {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
