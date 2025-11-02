import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, BarChart3, Cloud, Wrench } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const SkillCategory = ({ title, icon, skills, color }: SkillCategoryProps) => {
  return (
    <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm p-6 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} className="bg-gray-800/80 text-gray-300 border-gray-700 hover:bg-gray-700 text-sm">
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

const Skills = () => {
  const skillCategories: SkillCategoryProps[] = [
    {
      title: "Languages & Databases",
      icon: <Database className="text-cyan-400" size={24} />,
      color: "from-cyan-500/20 to-blue-600/20 border border-cyan-500/30",
      skills: ["Snowflake", "SQL Server", "MySQL", "Python", "Pandas", "NumPy", "SSIS", "SAS"]
    },
    {
      title: "Visualization Tools",
      icon: <BarChart3 className="text-purple-400" size={24} />,
      color: "from-purple-500/20 to-pink-600/20 border border-purple-500/30",
      skills: ["Power BI", "Tableau", "DAX", "Power Query (M)", "Data Modeling"]
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="text-blue-400" size={24} />,
      color: "from-blue-500/20 to-cyan-600/20 border border-blue-500/30",
      skills: ["Azure", "MS Fabric"]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="text-cyan-400" size={24} />,
      color: "from-cyan-500/20 to-purple-600/20 border border-cyan-500/30",
      skills: ["Advanced Excel", "ETL", "Data Pipeline", "Power Apps", "GitHub", "JIRA", "ServiceNow", "Confluence"]
    }
  ];

  return (
    <section className="py-20 bg-gray-950" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          Tech Stack
        </h2>
        <p className="text-cyan-400 text-center mb-12 text-lg">
          Technologies I work with to build exceptional solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <SkillCategory {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
