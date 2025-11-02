import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertificationCardProps {
  title: string;
  provider: string;
  certificateUrl: string;
}

// const CertificationItem = ({ title, organization, type }: CertificationProps) => {
//   return (
//     <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm p-6 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
//       <div className="flex gap-4">
//         <div className="flex-shrink-0">
//           <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center">
//             <Award className="text-cyan-400" size={24} />
//           </div>
//         </div>
//         <div className="flex-grow">
//           <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
//           <p className="text-gray-400 mb-2">{organization}</p>
//           <Badge className="bg-gray-800/80 text-gray-300 border-gray-700">{type}</Badge>
//         </div>
//       </div>
//     </Card>
//   );
// };

export const CertificationCard = ({ title, provider, certificateUrl }: CertificationCardProps) => {
  return (
    <div className="group relative bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,217,255,0.15)]">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-badge-bg border border-primary/30 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,217,255,0.3)]">
          <Award className="w-7 h-7 text-primary" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {provider}
          </p>
          
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
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
        </div>
      </div>
    </div>
  );
};


const Certifications = () => {
  const certifications: CertificationCardProps[] = [
  {
    title: "Power BI Essential Training",
    provider: "LinkedIn Learning",
    certificateUrl: "https://www.linkedin.com/learning/certificates/84d33edf094c9a116424f1f4bbb34326d3890a48bc88d4e1976829c1ed4df3b2"
  },
  {
    title: "PwC Switzerland - Power BI Job Simulation",
    provider: "Forage",
    certificateUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_CtPqcyX4xFHW4oLmv_1722547024058_completion_certificate.pdf"
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    provider: "Forage",
    certificateUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_CtPqcyX4xFHW4oLmv_1747519932374_completion_certificate.pdf"
  },
  {
    title: "Accenture North America - Data Analytics and Visualization Job Simulation",
    provider: "Forage",
    certificateUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_CtPqcyX4xFHW4oLmv_1720357644030_completion_certificate.pdf"
  }
  ];

  return (
    // <section className="py-20 bg-black" id="certifications">
    //   <div className="container mx-auto px-6">
    //     <h2 className="text-4xl font-bold mb-4 text-center text-white">
    //       Certifications & Training
    //     </h2>
    //     <p className="text-cyan-400 text-center mb-12 text-lg">
    //       Continuous learning and professional development
    //     </p>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    //       {certifications.map((cert, index) => (
    //         <div
    //           key={index}
    //           className="animate-in fade-in slide-in-from-bottom-4"
    //           style={{ animationDelay: `${index * 100}ms` }}
    //         >
    //           <CertificationItem {...cert} />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

      <div className="min-h-screen bg-background py-20">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Professional Certifications
          </h1>
          <p className="text-muted-foreground text-lg">
            Showcasing my expertise in data analytics and business intelligence
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              provider={cert.provider}
              certificateUrl={cert.certificateUrl}
            />
          ))}
        </div>
      </div>
    </div> 
  );
};

export default Certifications;
