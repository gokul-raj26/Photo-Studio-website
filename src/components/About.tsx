import { Heart, Users, Award, Camera } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Passion for Photography',
      description: 'Every click is infused with creativity and attention to detail',
    },
    {
      icon: Users,
      title: 'Customer-First Approach',
      description: 'Friendly, patient, and respectful service for every client',
    },
    {
      icon: Award,
      title: 'Professional Excellence',
      description: 'Years of experience delivering exceptional results',
    },
    {
      icon: Camera,
      title: 'Creative Vision',
      description: 'Transforming moments into timeless memories',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About X4Studio
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            More than just a photography studio, we're storytellers who capture the essence of your special moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Our Story</h3>
            <p className="text-gray-300 leading-relaxed">
              At X4Studio, we believe that every moment tells a story. Located in the heart of Pammal, Chennai,
              we've dedicated ourselves to capturing the joy, love, and beauty of life's most precious moments.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our team combines technical expertise with artistic vision to create photographs that you'll
              treasure forever. Whether it's a baby's first smile, a family gathering, or your special day,
              we approach each session with patience, professionalism, and genuine care.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We take pride in our friendly nature and commitment to customer satisfaction. Every photo is
              carefully edited to perfection, ensuring that your memories are preserved exactly as you imagined.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Photography Studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-gray-900 p-6 rounded-lg shadow-xl">
              <p className="text-4xl font-bold">4.9⭐</p>
              <p className="text-sm font-semibold">59 Reviews</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-amber-500/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-amber-500" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
