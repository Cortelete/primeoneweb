import { motion } from 'motion/react';

const brands = [
  { name: 'Chevrolet', logofile: 'chevrolet.png' },
  { name: 'GMC', logofile: 'gmc.png' },
  { name: 'Ford', logofile: 'ford.png' },
  { name: 'Lincoln', logofile: 'lincoln.png' },
  { name: 'Subaru', logofile: 'subaru.png' },
  { name: 'Volkswagen', logofile: 'volkswagen.png' },
  { name: 'Chrysler', logofile: 'chrysler.png' },
  { name: 'Jeep', logofile: 'jeep.png' },
  { name: 'Dodge', logofile: 'dodge.png' },
  { name: 'Ram', logofile: 'ram.png' },
  { name: 'Nissan', logofile: 'nissan.png' },
  { name: 'Mazda', logofile: 'mazda.png' },
  { name: 'Infiniti', logofile: 'infiniti.png' },
  { name: 'BMW', logofile: 'bmw.png' },
  { name: 'Mercedes-Benz', logofile: 'mercedesbenz.png' },
  { name: 'Jaguar', logofile: 'jaguar.png' },
  { name: 'Land Rover', logofile: 'landrover.png' },
];

export default function Brands() {
  return (
    <section className="py-12 bg-white overflow-hidden border-y border-gray-100">
      <div className="container mx-auto px-6 mb-8 text-center text-sm font-medium text-gray-400 tracking-widest uppercase">
        Trusted by top dealerships representing
      </div>
      
      {/* 
        We use a relative container for the carousel. The fade out effect on edges is done by a pseudo element or absolute divs.
      */}
      <div className="relative flex overflow-hidden group">
        <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex w-max animate-carousel group-hover:[animation-play-state:paused]">
          {[...brands, ...brands].map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center w-40 sm:w-48 md:w-52 px-6 hover:scale-105 transition-all duration-300"
            >
              <img 
                src={`/${brand.logofile}`} 
                alt={`${brand.name} logo`} 
                className="max-h-16 sm:max-h-20 md:max-h-24 w-auto object-contain"
                onError={(e) => {
                  // Fallback if image doesn't exist yet
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLDivElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div className="hidden text-lg font-bold text-gray-300 whitespace-nowrap">
                {brand.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
