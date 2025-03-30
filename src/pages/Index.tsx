
import React, { useState } from 'react';
import Marquee from '@/components/Marquee';
import BlinkingText from '@/components/BlinkingText';
import ServiceCard from '@/components/ServiceCard';
import AnimatedButton from '@/components/AnimatedButton';
import HitCounter from '@/components/HitCounter';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { Code, Database, Server, Settings, Users } from 'lucide-react';
import { toast } from "sonner";

const Index = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleOrderClick = () => {
    setClickCount(prev => prev + 1);
    
    if (clickCount < 3) {
      toast.success("Your AI microservice order is cooking! Please wait...");
    } else if (clickCount === 3) {
      toast.error("Sorry, our AI cat is taking a nap! Try again later!");
    } else {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    }
  };

  return (
    <div className="min-h-screen geocities-bg pb-10">
      {/* Header Construction Bar */}
      <div className="construction h-8 w-full"></div>
      
      {/* Marquee */}
      <Marquee 
        text="🔥🔥🔥 WELCOME TO DIRTY CAT BURGER EXPRESS - THE FUTURE OF AI MICRO-SERVICES!!! 🐱 ORDER NOW!!! 💯 UNDER CONSTRUCTION!!! 🔥🔥🔥" 
        className="text-hot-pink font-pixel py-2 text-xl"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-6">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-pixel text-neon-green mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            DIRTY CAT<br/>
            <span className="text-hot-pink">BURGER EXPRESS</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-comic text-electric-blue mb-2">
            <BlinkingText>*** AI Micro-Services with a Side of Fries ***</BlinkingText>
          </h2>
          <p className="font-comic text-lg mt-4">
            Established 2023 | Silicon Valley Adjacent | Not FDA Approved
          </p>
        </header>

        {/* CEO Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 bg-white p-6 border-4 border-hot-pink rounded-lg">
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src="https://thispersondoesnotexist.com/" 
              alt="CEO Portrait" 
              className="w-48 h-48 object-cover border-4 border-electric-blue rounded-full"
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-pixel text-hot-pink mb-2">Meet Our Founder & CEO</h3>
            <h4 className="text-xl font-comic mb-2">Dr. Felix Whiskerton III, PhD, MBA, LOL</h4>
            <p className="font-comic text-base">
              "At Dirty Cat Burger Express, we've combined my two passions: AI technology and questionable fast food. 
              Our team of highly-trained cats work 24/7 to deliver cutting-edge micro-services that will revolutionize your business 
              or possibly destroy it. Results may vary. Not responsible for sentient AI uprisings."
            </p>
          </div>
        </div>

        {/* Our Services */}
        <section className="mb-12">
          <h3 className="text-3xl font-pixel text-center text-neon-green mb-6">OUR SERVICES</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              title="AI Purrformance Optimization"
              description="Our algorithms work like a hairball - they'll clean out your inefficient code and leave you with something sleek and shiny!"
              icon={<Code size={24} />}
              isHot={true}
            />
            <ServiceCard
              title="Feline Database Management"
              description="Our cats can knock over your databases just like they knock things off shelves - but in a good way!"
              icon={<Database size={24} />}
            />
            <ServiceCard
              title="Whisker Server Deployment"
              description="Deploy your apps faster than a cat chasing a laser pointer! 60% of the time, it works every time."
              icon={<Server size={24} />}
              isHot={true}
            />
            <ServiceCard
              title="Automated Mouse Catching"
              description="We'll find all the bugs in your code! Unless they're moving too fast, then our AI gets distracted."
              icon={<Settings size={24} />}
            />
            <ServiceCard
              title="Neural Network Cat Training"
              description="We trained our neural networks on 10,000 hours of cats sleeping. Results have been... mixed."
              icon={<Users size={24} />}
              isHot={true}
            />
            <ServiceCard
              title="Legacy System Hairball Removal"
              description="Got an old system that's coughing up errors? Our specialized AI hairball removal service will clean it right up!"
              icon={<Code size={24} />}
            />
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialCarousel />

        {/* Call to Action */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-pixel text-hot-pink mb-4">READY TO ORDER?</h3>
          <p className="font-comic text-lg mb-6">
            Our AI micro-services are hotter than a fresh burger! Order now before supplies last!
            <br/>
            <span className="text-xs">(Disclaimer: Supply is infinite, but demand is questionable)</span>
          </p>
          <AnimatedButton onClick={handleOrderClick} className="px-8 py-4">
            ORDER NOW!!! 🍔🤖
          </AnimatedButton>
        </div>

        {/* Hit Counter and Footer */}
        <footer className="text-center mt-12">
          <HitCounter />
          <div className="star-bg text-white p-4 mt-4 rounded-lg">
            <div className="font-comic text-sm">
              © 1996-2023 Dirty Cat Burger Express AI Inc.
              <br/>
              Best viewed with Netscape Navigator 4.0 or Internet Explorer 5.5
              <br/>
              <a href="#" className="text-electric-blue underline">Webring</a> | 
              <a href="#" className="text-electric-blue underline"> Guestbook</a> | 
              <a href="#" className="text-electric-blue underline"> Contact</a>
            </div>
          </div>
        </footer>
      </div>

      {/* Footer Construction Bar */}
      <div className="construction h-8 w-full mt-4"></div>
    </div>
  );
};

export default Index;
