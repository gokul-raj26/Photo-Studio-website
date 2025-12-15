import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'Very friendly and professional! The team at X4Studio made our family photoshoot so comfortable. The photos turned out absolutely beautiful.',
      date: '2 weeks ago',
    },
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Patient and edits photos as desired. They took time to understand what we wanted and delivered beyond expectations. Highly recommended!',
      date: '1 month ago',
    },
    {
      name: 'Lakshmi Devi',
      rating: 5,
      text: 'Amazing quality and customer satisfaction! Our wedding photos are stunning. The attention to detail is incredible.',
      date: '3 weeks ago',
    },
    {
      name: 'Anand Krishnan',
      rating: 5,
      text: 'The best photography studio in Pammal! Very professional service and the studio setup is excellent. Worth every penny.',
      date: '1 week ago',
    },
    {
      name: 'Meena Ravi',
      rating: 5,
      text: 'Wonderful experience with baby photography. They were so patient with our little one and captured the most adorable moments.',
      date: '2 months ago',
    },
    {
      name: 'Vijay Natarajan',
      rating: 5,
      text: 'Outstanding work! The creative vision and technical expertise of X4Studio is truly impressive. Our portraits look like they belong in a magazine.',
      date: '3 weeks ago',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-500 fill-amber-500" />
              ))}
            </div>
            <span className="text-2xl font-bold text-white">4.9</span>
            <span className="text-gray-400">(59 reviews)</span>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Trusted by families across Pammal and Chennai
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg relative hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-amber-500/20" />

              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=X4+Studio+Pammal+Chennai&query_place_id=ChIJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-200 border-2 border-white/30"
          >
            Read More Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
