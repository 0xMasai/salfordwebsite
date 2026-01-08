import { Award, Users, Target } from 'lucide-react';
import teamImage from '../assets/team.jpg?url';

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '200+', label: 'Projects Completed' },
  { number: '50+', label: 'Expert Engineers' },
  { number: '98%', label: 'Client Satisfaction' },
];

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality engineering solutions.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with clients to achieve shared project goals.',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Meticulous attention to detail in every aspect of our work.',
  },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div>
            <h2 className="text-[#003366] text-3xl sm:text-4xl mb-6">About Salford Engineering</h2>
            <p className="text-[#003366]/70 mb-4">
              Founded with a vision to provide exceptional engineering consulting services, Salford Engineering Consults has grown to become a trusted partner for businesses and organizations across multiple industries.
            </p>
            <p className="text-[#003366]/70 mb-4">
              Our team of highly qualified engineers brings decades of combined experience, utilizing cutting-edge technology and proven methodologies to deliver innovative solutions that meet the evolving needs of our clients.
            </p>
            <p className="text-[#003366]/70">
              We pride ourselves on our commitment to sustainability, safety, and technical excellence in every project we undertake.
            </p>
          </div>
          <div className="relative">
            <img
              src={teamImage}
              alt="Engineering team on site"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl text-[#003366] mb-2">{stat.number}</div>
              <div className="text-[#003366]/70">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-[#003366] mb-2">{value.title}</h3>
                <p className="text-[#003366]/70">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}