import React, { useState } from 'react';

const RoutineBuilder = () => {
  const [activeTab, setActiveTab] = useState('AM');

  const routines = {
    AM: [
      { step: '01', title: 'Cleanse', icon: 'flare', desc: 'Remove impurities without stripping your skin\'s natural barrier.' },
      { step: '02', title: 'Nourish', icon: 'spa', desc: 'Active ingredients penetrate deep for immediate cellular revival.' },
      { step: '03', title: 'Protect', icon: 'shield_moon', desc: 'Seal in moisture and block environmental aggressors all day long.' }
    ],
    PM: [
      { step: '01', title: 'Double Cleanse', icon: 'cleaning', desc: 'Remove makeup and impurities with oil and water-based cleansers.' },
      { step: '02', title: 'Treat', icon: 'science', desc: 'Apply targeted serums for overnight repair and renewal.' },
      { step: '03', title: 'Moisturize', icon: 'bedtime', desc: 'Lock in hydration with a rich night cream.' }
    ],
    Weekly: [
      { step: '01', title: 'Exfoliate', icon: 'scrub', desc: 'Gently remove dead skin cells for smoother texture.' },
      { step: '02', title: 'Mask', icon: 'mask', desc: 'Deep clean or hydrate with a targeted face mask.' },
      { step: '03', title: 'Massage', icon: 'spa', desc: 'Boost circulation with facial massage techniques.' }
    ]
  };

  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl mb-6">Your Daily Ritual</h2>
          <div className="flex justify-center gap-12 border-b border-outline-variant/30">
            {['AM', 'PM', 'Weekly'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-medium transition-all ${
                  activeTab === tab 
                    ? 'text-primary font-bold border-b-2 border-primary' 
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {tab === 'Weekly' ? 'Weekly Care' : `${tab} Routine`}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {routines[activeTab].map((item) => (
            <div key={item.step} className="flex flex-col items-center text-center space-y-6">
              <div className={`w-16 h-16 rounded-full ${
                activeTab === 'AM' ? 'bg-primary-fixed' : 
                activeTab === 'PM' ? 'bg-tertiary-fixed' : 'bg-secondary-fixed'
              } flex items-center justify-center`}>
                <span className={`material-symbols-outlined ${
                  activeTab === 'AM' ? 'text-primary' : 
                  activeTab === 'PM' ? 'text-tertiary' : 'text-on-surface'
                } text-3xl`}>{item.icon}</span>
              </div>
              <div>
                <span className="label-md font-bold opacity-50 mb-1 block">Step {item.step}</span>
                <h4 className="title-lg font-bold mb-3">{item.title}</h4>
                <p className="body-md text-on-surface-variant">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoutineBuilder;