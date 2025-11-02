import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-black" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-white">
            About Me
          </h2>
          <p className="text-cyan-400 text-center mb-12 text-lg">
            Transforming data into insights, one dashboard at a time
          </p>
          
          <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm p-8">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Summary
            </h3>
            <p className="text-lg leading-relaxed text-gray-300 mb-4">
              Experienced BI Developer with 2+ years of experience developing data-driven solutions using{" "}
              <span className="text-cyan-400 font-semibold">SQL Server, Snowflake SQL, MySQL, Python</span>, and{" "}
              <span className="text-blue-400 font-semibold">Power BI</span>. 
              Expertise in data modeling, DAX calculations, and ETL processes, ensuring accurate and efficient data transformation.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Proven ability in developing{" "}
              <span className="text-purple-400 font-semibold">12+ interactive dashboards</span> and 
              resolving{" "}
              <span className="text-cyan-400 font-semibold">30+ data quality issues</span>, 
              delivering actionable business insights that drive strategic decision-making.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
