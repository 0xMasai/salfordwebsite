import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 md:pt-20">
      <div className="relative bg-gradient-to-br from-[#003366] to-[#004488] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGJsdWVwcmludCUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjU0NDcxODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Engineering Excellence for Your Vision
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-white/90">
              Delivering innovative engineering solutions with precision, expertise, and dedication to quality. Your trusted partner in bringing complex projects to life.
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-white text-[#003366] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
