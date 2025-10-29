import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <Card className="p-8 shadow-lg">
            <p className="text-lg leading-relaxed text-foreground">
              Experienced BI Developer skilled in <span className="font-semibold text-primary">SQL Server, Snowflake SQL, MySQL, Python, SSIS, Power BI, Tableau</span>, ETL, and Power Apps. 
              I specialize in data modeling, DAX calculations, and ETL processes, ensuring accurate and efficient data transformation.
            </p>
            <p className="text-lg leading-relaxed text-foreground mt-4">
              With a proven track record of developing <span className="font-semibold text-accent">12+ interactive dashboards</span> and 
              resolving <span className="font-semibold text-accent">30+ data quality issues</span>, I excel at transforming complex datasets 
              into actionable business insights that drive strategic decision-making.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
