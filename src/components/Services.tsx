import { Camera, Baby, Users, Heart, MapPin, Image } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: 'Studio Photography',
      description: 'Professional studio sessions with premium lighting and backdrops for perfect shots',
      image: 'https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Baby,
      title: 'Baby & Kids Photography',
      description: 'Gentle, patient sessions capturing the innocence and joy of childhood',
      image: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Users,
      title: 'Family Portraits',
      description: 'Beautiful family moments frozen in time with warmth and authenticity',
      image: 'https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Heart,
      title: 'Wedding & Bridal',
      description: 'Capturing the magic of your special day with elegance and artistry',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: MapPin,
      title: 'Outdoor Photoshoots',
      description: 'Natural light sessions in beautiful outdoor locations around Chennai',
      image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Image,
      title: 'Photo Editing & Framing',
      description: 'Professional retouching and premium framing services for your treasured photos',
      image: 'https://images.pexels.com/photos/1289842/pexels-photo-1289842.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional photography services tailored to capture your most precious moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-gray-900" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="tel:09840571773"
            className="inline-block bg-amber-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Book Your Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
