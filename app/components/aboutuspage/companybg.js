export default function CompanyBackground() {
    return (
      <section id="company-background" className="relative bg-gray-800 text-white py-20 px-6 lg:px-24">
        <div className="container mx-auto">
          
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-8 animate-fadeIn">
            Our Journey: From Vision to Innovation
          </h2>
  
          {/* Background Image (optional) */}
          {/* <div className="absolute inset-0 opacity-20">
            <img
              src="/path/to/background-image.jpg"
              alt="Company Background"
              className="w-full h-full object-cover"
            />
          </div> */}
  
          {/* Content */}
          <div className="relative z-10 space-y-6 text-center">
            <p className="text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto animate-slideUp">
              Founded in 2010, <span className="text-blue-400 font-semibold">Teym Technologies</span> started with a simple vision: 
              to provide cutting-edge digital solutions that empower businesses to scale and succeed in the ever-evolving digital landscape.
              Over the years, we’ve grown into a team of passionate innovators, helping clients across the globe to transform ideas into reality.
            </p>
            
            <p className="text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto animate-slideUp delay-200">
              Our focus has always been on leveraging emerging technologies, providing tailored software development, and creating robust, scalable solutions. 
              With a commitment to excellence, we continuously adapt to the latest industry trends, ensuring that we deliver future-proof solutions.
            </p>
            
            <p className="text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto animate-slideUp delay-400">
              We are more than just a software development company. We are your partners in innovation, dedicated to fostering long-term growth and success 
              for businesses of all sizes.
            </p>
            
            {/* Call to Action */}
            <a
              href="/contact"
              className="inline-block px-8 py-4 mt-8 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-400 transition-all duration-300 ease-in-out animate-bounce"
            >
              Get in Touch
            </a>
          </div>
        </div>
  
        {/* CSS Animations */}
        <style jsx>{`
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out forwards;
          }
          .animate-slideUp {
            animation: slideUp 1s ease-in-out forwards;
            opacity: 0;
            transform: translateY(20px);
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
          .delay-400 {
            animation-delay: 0.4s;
          }
          .animate-bounce {
            animation: bounce 2s infinite;
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes slideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </section>
    );
  }
  