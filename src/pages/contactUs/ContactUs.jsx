import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Shield,
  Send,
  ArrowRight,
  Clock,
  MessageSquare,
} from "lucide-react";

const ContactUS = () => {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      {/* 1. Background Art - Subtle and professional */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* 2. Header: Dramatic & Clean */}
        <div className="mb-20">
          <h2 className="text-6xl lg:text-8xl font-black text-gray-900 tracking-tighter mb-8">
            Get in <span className="text-primary-blue">touch.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl font-light leading-relaxed">
            Based in the heart of Kabul, our team is dedicated to transparency
            and open communication. Reach out to discuss partnerships or
            programs.
          </p>
        </div>

        {/* 3. The 3-Column Info Hub */}
        <div className="grid md:grid-cols-3 gap-1 px-1 bg-gray-100 rounded-[3rem] overflow-hidden border border-gray-100 mb-20 shadow-2xl shadow-gray-200/50">
          {/* Column 1: Visit */}
          <div className="bg-white p-12 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 bg-primary-blue/10 rounded-2xl flex items-center justify-center text-primary-blue mb-8 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-4">
                Location
              </h3>
              <p className="text-lg font-bold text-gray-900">
                Street-1, Karte-4,
                <br />
                Kabul, Afghanistan
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-50 flex items-center gap-3">
              <Shield className="text-accent-teal w-5 h-5" />
              <span className="text-xs font-bold text-gray-400 italic underline decoration-accent-teal/30">
                License #5678
              </span>
            </div>
          </div>

          {/* Column 2: Connect */}
          <div className="bg-white p-12 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 bg-accent-teal/10 rounded-2xl flex items-center justify-center text-accent-teal mb-8 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-4">
                Channels
              </h3>
              <p className="text-lg font-bold text-gray-900 mb-1">
                +93 (0) 700 704 952
              </p>
              <p className="text-lg font-bold text-gray-900">
                ococ.ngo@gmail.com
              </p>
              <p className="text-lg font-bold text-gray-900">
                info@ococ.org.af
              </p>
            </div>
            <div className="mt-8 flex gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">
                Available Now
              </span>
            </div>
          </div>

          {/* Column 3: Hours */}
          <div className="bg-white p-12 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 bg-primary-red/10 rounded-2xl flex items-center justify-center text-primary-red mb-8 group-hover:scale-110 transition-transform">
                <Clock size={24} />
              </div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-4">
                Support Hours
              </h3>
              <p className="text-lg font-bold text-gray-900">
                Saturday — Thursday
              </p>
              <p className="text-lg font-medium text-gray-500 italic font-serif">
                8:00 AM to 4:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* 4. The "Direct Contact" Form: Large, Centered & Clean */}
        {/* <div className="max-w-4xl mx-auto bg-gray-50 rounded-[4rem] p-10 lg:p-20 border border-gray-100">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-16 h-16 bg-white rounded-3xl shadow-lg flex items-center justify-center mb-6">
              <MessageSquare className="text-primary-blue" size={28} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              Write to our Kabul HQ
            </h3>
          </div>

          <form className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative group">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary-blue/60 mb-2 block ml-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b-2 border-gray-200 py-3 outline-none focus:border-primary-blue transition-colors text-lg"
                  placeholder="John Doe"
                />
              </div>
              <div className="relative group">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary-blue/60 mb-2 block ml-1">
                  Work Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b-2 border-gray-200 py-3 outline-none focus:border-primary-blue transition-colors text-lg"
                  placeholder="email@address.com"
                />
              </div>
            </div>

            <div className="relative group">
              <label className="text-[10px] font-black uppercase tracking-widest text-primary-blue/60 mb-2 block ml-1">
                Project or Partnership Inquiry
              </label>
              <textarea
                rows="3"
                className="w-full bg-transparent border-b-2 border-gray-200 py-3 outline-none focus:border-primary-blue transition-colors text-lg resize-none"
                placeholder="Briefly describe how we can collaborate..."
              />
            </div>

            <div className="flex justify-center pt-8">
              <button className="bg-neutral-900 text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-primary-blue shadow-2xl shadow-gray-300 transition-all flex items-center gap-4 group">
                Dispatch Message
                <div className="bg-white/10 p-2 rounded-full group-hover:translate-x-2 transition-transform">
                  <ArrowRight size={20} />
                </div>
              </button>
            </div>
          </form>
        </div> */}
      </div>
    </section>
  );
};

export default ContactUS;
