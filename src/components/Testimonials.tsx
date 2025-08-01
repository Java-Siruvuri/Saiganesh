import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const testimonials = [
  {
    id: 1,
    name: 'Emily Dawson',
    role: 'QA Lead at Encore',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'Sai Ganesh played a critical role in building our factory QA platform. His API design and real-time dashboard work were phenomenal.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ravi Shankar',
    role: 'Engineering Manager at EVCO Plastics',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face',
    content: 'Ganesh transformed our legacy MES into a modern web-based system. He’s incredibly fast, accurate, and reliable.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica Liu',
    role: 'Product Owner at Independent Bank',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    content: 'From secure APIs to fraud alerts with Kafka, Ganesh delivered banking features with precision and deep understanding of fintech standards.',
    rating: 5,
  },
];


  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            What Clients <span className="bg-gradient-cosmic bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what some of my clients 
            have to say about working with me.
          </p>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_60%] min-w-0 px-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:shadow-glow transition-all duration-500 group"
                >
                  {/* Quote Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow-primary"
                  >
                    <Quote className="w-6 h-6 text-primary-foreground" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 + 0.5 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-lg text-foreground leading-relaxed mb-6 group-hover:text-primary transition-colors">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20"
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;