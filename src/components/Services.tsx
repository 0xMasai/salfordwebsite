import { Compass, Cog, BarChart3, Building2, ShieldCheck, FileCheck } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Structural Engineering',
    description: 'Comprehensive structural analysis and design solutions for commercial and residential projects.',
  },
  {
    icon: Cog,
    title: 'Mechanical Systems',
    description: 'Advanced mechanical engineering services including HVAC, plumbing, and industrial systems design.',
  },
  {
    icon: BarChart3,
    title: 'Project Management',
    description: 'End-to-end project oversight ensuring timely delivery within budget and quality standards.',
  },
  {
    icon: Building2,
    title: 'Civil Engineering',
    description: 'Infrastructure planning, site development, and transportation engineering expertise.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety Consulting',
    description: 'Risk assessment, safety audits, and compliance consulting for industrial facilities.',
  },
  {
    icon: FileCheck,
    title: 'Technical Documentation',
    description: 'Detailed engineering reports, specifications, and as-built documentation services.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#003366] text-3xl sm:text-4xl mb-4">Our Services</h2>
          <p className="text-[#003366]/70 max-w-2xl mx-auto">
            Comprehensive engineering solutions tailored to meet your project requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow bg-white"
              >
                <div className="w-12 h-12 bg-[#003366]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-[#003366]" size={24} />
                </div>
                <h3 className="text-[#003366] mb-2">{service.title}</h3>
                <p className="text-[#003366]/70">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
