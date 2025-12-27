import React from "react";
import {
  Briefcase,
  CheckCircle,
  MapPin,
  Calendar,
  DollarSign,
  ArrowUpRight,
  Award,
  TrendingUp,
  Target,
} from "lucide-react";

const Projects = () => {
  // Exact data from "Present and Past Performance" (Page 16)
  const projects = [
    {
      id: 1,
      title: "Community Based Nutrition Package",
      partner: "UNICEF-JACK",
      location: "Kunduz Province",
      funding: "614,712 $",
      date: "Oct 2022 - Sep 2023",
      status: "Completed",
      category: "Health & Nutrition",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Community Based Nutrition Package",
      partner: "UNICEF-JACK",
      location: "Farah Province",
      funding: "1,340,244 $",
      date: "Oct 2022 - Oct 2023",
      status: "Completed",
      category: "Health & Nutrition",
      image: "/ococ-image/health1.jpg",
    },
    {
      id: 3,
      title: "Enhancing Teaching Skills: Specialized Training",
      partner: "Core Project",
      location: "Takhar Province",
      funding: "5,394 $",
      date: "Jan 2024 - April 2024",
      status: "Completed",
      category: "Education",
      image: "/ococ-image/confarance.jpg",
    },
    {
      id: 4,
      title: "Sustainable Livelihoods: Beekeeping Development",
      partner: "Private Donation",
      location: "Logar Province",
      funding: "4,136 $",
      date: "May 2024 - Oct 2024",
      status: "Completed",
      category: "Food Security",
      image: "/ococ-image/agriculture.jpg",
    },
    {
      id: 5,
      title: "Bright Tomorrow: Free Education for Orphans",
      partner: "Core Fund",
      location: "Takhar Province",
      funding: "14,621 $",
      date: "May 2025 - Oct 2025",
      status: "Active",
      category: "Education",
      image: "/ococ-image/social-image.jpg",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=2000"
            alt="OCOC Projects - Making a difference in Afghanistan"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-teal-900/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                <Award className="w-5 h-5 text-white" />
                <span className="text-sm font-bold text-white uppercase tracking-wide">
                  Since 2022
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                Our <span className="text-teal-400">Projects</span>
              </h1>

              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mb-8"></div>

              {/* Description */}
              <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl">
                Since 2022, OCOC has successfully implemented high-impact
                projects reaching vulnerable communities through strategic
                partnerships and community-led initiatives across Afghanistan.
              </p>

              {/* Stats Grid */}
              {/* <div className="grid grid-cols-4 md:grid-cols-4 gap-4 max-w-3xl">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-teal-400" />
                  </div>
                  <p className="text-4xl font-bold text-white mb-1">5</p>
                  <p className="text-xs text-white/80 uppercase tracking-wide">
                    Projects
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-teal-400" />
                  </div>
                  <p className="text-4xl font-bold text-white mb-1">4</p>
                  <p className="text-xs text-white/80 uppercase tracking-wide">
                    Provinces
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-teal-400" />
                  </div>
                  <p className="text-4xl font-bold text-white mb-1">130M+</p>
                  <p className="text-xs text-white/80 uppercase tracking-wide">
                    AFN Invested
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-4xl font-bold text-white mb-1">4</p>
                  <p className="text-xs text-white/80 uppercase tracking-wide">
                    Completed
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-16"
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

      {/* ==================== PROJECTS SECTION ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
              Our Impact
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
              Present & Past Performance
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2022, OCOC has implemented funded projects across
              Afghanistan
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Side */}
                <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Status Badge */}
                  <div
                    className={`absolute top-4 left-4 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm ${
                      project.status === "Active"
                        ? "bg-green-500/90"
                        : "bg-blue-600/90"
                    }`}
                  >
                    {project.status}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-xs font-bold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:w-3/5 p-8 flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-5 leading-tight group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {project.location}
                          </p>
                          <p className="text-xs text-gray-500">
                            Project Location
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {project.date}
                          </p>
                          <p className="text-xs text-gray-500">
                            Project Duration
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <DollarSign className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {project.funding}
                          </p>
                          <p className="text-xs text-gray-500">Total Funding</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      Partner:{" "}
                      <span className="font-bold text-gray-700">
                        {project.partner}
                      </span>
                    </div>
                    <button className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all duration-300 group/btn">
                      View Details
                      <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ACCOUNTABILITY SECTION ==================== */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              {/* Left Content */}
              <div className="lg:w-1/2">
                <CheckCircle className="w-16 h-16 text-white mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Proven Accountability
                </h2>
                <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
                  "Our commitment to maintaining low overhead costs reflects our
                  dedication to maximizing the impact of every contribution. We
                  ensure that the majority of our resources directly benefit the
                  communities we serve."
                </p>
              </div>

              {/* Right Stats */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl font-bold mb-2">2022</div>
                  <div className="text-xs uppercase tracking-widest text-white/80">
                    Established
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl font-bold mb-2">100%</div>
                  <div className="text-xs uppercase tracking-widest text-white/80">
                    Transparency
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl font-bold mb-2">5+</div>
                  <div className="text-xs uppercase tracking-widest text-white/80">
                    Projects Delivered
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl font-bold mb-2">4</div>
                  <div className="text-xs uppercase tracking-widest text-white/80">
                    Provinces Reached
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
