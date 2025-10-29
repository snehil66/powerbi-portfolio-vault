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
    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-sm">
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
      icon: <Database className="text-primary-foreground" size={24} />,
      color: "from-primary to-primary-glow",
      skills: ["Snowflake", "SQL Server", "MySQL", "Python", "Pandas", "NumPy", "SSIS", "SAS"]
    },
    {
      title: "Visualization Tools",
      icon: <BarChart3 className="text-accent-foreground" size={24} />,
      color: "from-accent to-secondary",
      skills: ["Power BI", "Tableau", "DAX", "Power Query (M)", "Data Modeling"]
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="text-primary-foreground" size={24} />,
      color: "from-primary to-accent",
      skills: ["Azure", "MS Fabric"]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="text-accent-foreground" size={24} />,
      color: "from-secondary to-accent",
      skills: ["Advanced Excel", "ETL", "Data Pipeline", "Power Apps", "GitHub", "JIRA", "ServiceNow", "Confluence"]
    }
  ];

  return (
    <section className="py-20 bg-background" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Technical Skills
        </h2>
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
