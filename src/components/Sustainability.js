import React from 'react';

const Sustainability = () => {
  return (
    <section className="py-24 bg-tertiary text-on-tertiary">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              className="rounded-2xl shadow-2xl" 
              alt="lush green leaves with water droplets, macro photography representing organic purity and sustainability" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1pbGOg8lto2A5tHTMrRM5HF-tbH2mMIUBOk-H_hcmL_1cXx4SYC01XJotQ5B4uoceednDxw8X3UpL2Kj8Yjyn9F3qmSi0xF4-SJKSu4Ojt7zVywKGw9FKKKKJK1imK0fiI_hTMiyIIi3ry7CssRYaRSQgwAi_RNDF_6_WNvwMHfXwnIUy_kZiylD0_MQvO-tYtQ11xYcWlzXrzAMXrvQjQV7vQUBqkA-p66fgX5SkUTO-_pqWrWwodMgS3TvUDe0NW5gEJWBjc58x"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 glass-effect rounded-xl p-8 hidden lg:block border border-white/20">
              <h4 className="font-serif text-on-surface text-2xl mb-4">100% Earth Friendly</h4>
              <p className="text-on-surface-variant text-sm">Every container is recyclable. Every ingredient is ethically harvested.</p>
            </div>
          </div>
          
          <div className="space-y-12">
            <h2 className="font-serif text-4xl md:text-5xl">
              Consciously Curated <br/><span className="italic font-light">Beauty</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-4xl">eco</span>
                <div>
                  <h5 className="font-bold text-xl mb-2">Vegan &amp; Cruelty Free</h5>
                  <p className="opacity-80">Certified ethical practices. We never test on animals and use only plant-based actives.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-4xl">recycling</span>
                <div>
                  <h5 className="font-bold text-xl mb-2">Refillable Elegance</h5>
                  <p className="opacity-80">Our glass vessels are designed to be kept and refilled, reducing waste by 80% per year.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-4xl">water_drop</span>
                <div>
                  <h5 className="font-bold text-xl mb-2">Zero Toxin Promise</h5>
                  <p className="opacity-80">No parabens, no sulfates, no synthetic fragrances. Only the purity of nature.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;