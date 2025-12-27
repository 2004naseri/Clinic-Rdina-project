import React, { useState } from "react";
import {
  Heart,
  ShieldCheck,
  Globe,
  ArrowRight,
  Users,
  BookOpen,
  Home,
  Utensils,
  HandHeart,
  Award,
  Lock,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { donateData } from "../../data/donateData";

const Donate = () => {
  const [amount, setAmount] = useState("");
  const [selectedTier, setSelectedTier] = useState(null);

  // Icon mapping
  const iconMap = {
    Users: Users,
    HandHeart: HandHeart,
    Globe: Globe,
    TrendingUp: TrendingUp,
    Utensils: Utensils,
    BookOpen: BookOpen,
    Home: Home,
    ShieldCheck: ShieldCheck,
    Award: Award,
  };

  const getIcon = (iconName, className) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[600px] md:min-h-[650px] lg:min-h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000"
            alt="Children receiving support and care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-teal-900/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center min-h-[600px] md:min-h-[650px] lg:min-h-[700px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-md rounded-full mb-6 md:mb-8 border border-white/20">
                <Heart className="w-5 h-5 text-white fill-current" />
                <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide">
                  {donateData.hero.badge.text}
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
                {donateData.hero.title}{" "}
                <span className="text-blue-300">
                  {donateData.hero.titleHighlight}
                </span>
              </h1>

              <div className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mx-auto mb-6 md:mb-8"></div>

              {/* Description */}
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 md:mb-16 leading-relaxed max-w-3xl mx-auto px-4">
                {donateData.hero.description}
              </p>

              {/* Quick Impact Stats - Fully Responsive */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto pb-8 md:pb-12">
                {donateData.hero.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="flex justify-center mb-2 md:mb-3">
                      {getIcon(
                        stat.icon,
                        "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
                      )}
                    </div>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                      {stat.number}
                    </p>
                    <p className="text-[10px] sm:text-xs text-white/80 uppercase tracking-wide leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-12 md:h-16"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="#ffffff"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="#ffffff"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>

      {/* ==================== DONATION FORM SECTION ==================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Donation Form */}
            <div className="space-y-8 md:space-y-10">
              {/* Section Title */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                  Choose Your Impact
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Select an amount or enter a custom donation
                </p>
              </div>

              {/* Donation Tiers */}
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {donateData.donationTiers.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => {
                      setAmount(tier.price);
                      setSelectedTier(tier.id);
                    }}
                    className={`relative group p-4 md:p-6 rounded-2xl md:rounded-3xl border-2 transition-all duration-300 text-center ${
                      selectedTier === tier.id
                        ? "border-blue-600 bg-blue-50 shadow-xl scale-105"
                        : "border-gray-200 hover:border-blue-300 hover:shadow-lg"
                    }`}
                  >
                    {/* Icon Badge */}
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-3 mx-auto text-white bg-gradient-to-br ${tier.color}`}
                    >
                      {getIcon(tier.icon, "w-5 h-5 md:w-6 md:h-6")}
                    </div>

                    {/* Price */}
                    <span className="block text-xl md:text-2xl font-black text-gray-900 mb-1">
                      ${tier.price}
                    </span>

                    {/* Label */}
                    <span className="text-[9px] md:text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                      {tier.label}
                    </span>

                    {/* Selected Indicator */}
                    {selectedTier === tier.id && (
                      <div className="absolute top-2 md:top-3 right-2 md:right-3">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-blue-600 fill-current" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Or Enter Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-lg md:text-xl">
                    $
                  </span>
                  <input
                    type="number"
                    placeholder="Custom Amount"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                      setSelectedTier(null);
                    }}
                    className="w-full bg-gray-50 border-2 border-gray-200 focus:border-blue-600 focus:bg-white p-4 md:p-6 pl-10 md:pl-12 rounded-xl md:rounded-2xl outline-none transition-all text-lg md:text-xl font-bold placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 md:py-6 rounded-full font-bold text-lg md:text-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 md:gap-4 group shadow-xl">
                <Lock className="w-5 h-5" />
                Proceed to Secure Payment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>

              {/* Security Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 pt-4">
                {donateData.securityBadges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-400"
                  >
                    {getIcon(badge.icon, "w-5 h-5 md:w-6 md:h-6")}
                    <span className="text-xs md:text-sm font-semibold">
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Impact Information */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 rounded-2xl md:rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/10 rounded-full blur-3xl -mr-24 md:-mr-32 -mt-24 md:-mt-32"></div>
                <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-white/10 rounded-full blur-3xl -ml-24 md:-ml-32 -mb-24 md:-mb-32"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                    <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                    {donateData.impactInfo.title}
                  </h3>

                  <p className="text-white/90 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                    {donateData.impactInfo.description}
                  </p>

                  {/* Impact List */}
                  <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10">
                    {donateData.donationTiers.map((tier) => (
                      <li
                        key={tier.id}
                        className="flex items-start gap-3 md:gap-4"
                      >
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-sm flex-shrink-0 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-white mb-1 text-sm md:text-base">
                            ${tier.price}
                          </p>
                          <p className="text-xs md:text-sm text-white/80">
                            {tier.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Transparency Note */}
                  <div className="pt-6 md:pt-8 border-t border-white/20">
                    <p className="text-xs md:text-sm text-white/80 leading-relaxed italic">
                      {donateData.impactInfo.transparencyNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY DONATE SECTION ==================== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm">
              {donateData.whyDonate.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4 md:mb-6">
              {donateData.whyDonate.title}
            </h2>
            <div className="w-20 md:w-24 h-1.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {donateData.whyDonate.reasons.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 md:mb-6`}
                >
                  {getIcon(item.icon, "w-7 h-7 md:w-10 md:h-10")}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BOTTOM CTA ==================== */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-12 h-12 md:w-16 md:h-16 text-white mx-auto mb-4 md:mb-6 fill-current opacity-90" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            {donateData.bottomCTA.title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            {donateData.bottomCTA.description}
          </p>
          <button className="px-8 md:px-10 py-3 md:py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 text-sm md:text-base">
            <Heart className="w-4 h-4 md:w-5 md:h-5 fill-current" />
            {donateData.bottomCTA.buttonText}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Donate;
