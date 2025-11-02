import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertificationProps {
  title: string;
  organization: string;
  certificateUrl: string;
}

const CertificationItem = ({ title, organization, certificateUrl }: CertificationProps) => {
  return (
    <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm p-6 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
      <div className="flex gap-4">
        
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center">
            <Award className="text-cyan-400" size={24} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{organization}</p>

          {/* Button with link */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
          >
            <a 
              href={certificateUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Certification
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Button>

          {/* Badge below button */}
          <div className="mt-3">
            <Badge className="bg-gray-800/80 text-gray-300 border-gray-700">
              {organization}
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Certifications = () => {
  const certifications: CertificationProps[] = [
  {
    title: "Power BI Essential Training",
    organization: "LinkedIn Learning",
    certificateUrl: "https://www.linkedin.com/learning/certificates/84d33edf094c9a116424f1f4bbb34326d3890a48bc88d4e1976829c1ed4df3b2"
  },
  {
    title: "PwC Switzerland - Power BI Job Simulation",
    organization: "Forage",
    certificateUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_CtPqcyX4xFHW4oLmv_1722547024058_completion_certificate.pdf"
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    organization: "Forage",
    certificateUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_CtPqcyX4xFHW4oLmv_1747519932374_completion_certificate.pdf"
  },
  {
    title: "Accenture North America - Data Analytics and Visualization Job Simulation",
    organization: "Forage",
    certificateUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_CtPqcyX4xFHW4oLmv_1720357644030_completion_certificate.pdf"
  }
  ];

  return (
    <section className="py-20 bg-black" id="certifications">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          Certifications & Training
        </h2>
        <p className="text-cyan-400 text-center mb-12 text-lg">
          Continuous learning and professional development
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CertificationItem {...cert} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
