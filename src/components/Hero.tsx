import { Camera, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-amber-500/10 p-4 rounded-full border-2 border-amber-500/30">
            <Camera className="w-12 h-12 text-amber-500" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          X4Studio
        </h1>
        <p className="text-2xl md:text-3xl text-amber-500 font-semibold mb-3">
          எக்ஸ்4ஸ்டுடியோ
        </p>

        <p className="text-xl md:text-3xl text-gray-300 mb-6 font-light">
          Capturing Moments. Creating Memories.
        </p>

        <div className="flex items-center justify-center text-amber-400 mb-8">
          <span className="text-2xl mr-2">⭐</span>
          <span className="text-xl font-semibold">4.9</span>
          <span className="text-gray-400 ml-2">(59 reviews)</span>
        </div>

        <p className="text-lg text-gray-400 mb-10">
          Your Trusted Photography Studio in Pammal, Chennai
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="bg-amber-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-amber-500/50"
          >
            Book a Shoot
          </button>
          <a
            href="tel:09840571773"
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-200 border-2 border-white/30 flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>

        <div className="mt-12 text-gray-400 text-sm">
          <p>H.L.L. Colony, Thiruvalluvar Nagar, Pammal, Chennai – 600075</p>
          <p className="mt-1">Opens 9 AM • Mon–Sun</p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
