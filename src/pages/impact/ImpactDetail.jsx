import React from "react";
import {
  ShieldCheck,
  Eye,
  Scale,
  Users,
  FileCheck,
  Globe,
  Award,
  TrendingUp,
  CheckCircle,
  PieChart,
  Building2,
  HandshakeIcon,
  Target,
  Briefcase,
} from "lucide-react";

const ImpactAccountabilityPage = () => {
  // Data from Profile Pages 15-17
  const accountabilityPoints = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Low Overhead Costs",
      description:
        "We consistently allocate the bulk of our budget to support and uplift communities.",
      stat: "85%+",
      statLabel: "Program Spending",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Monitoring & Evaluation",
      description:
        "Strict internal controls and MEAL managers track every project lifecycle.",
      stat: "100%",
      statLabel: "Projects Monitored",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Integrity",
      description:
        "Transparency and accountability are at the core of our operations.",
      stat: "Zero",
      statLabel: "Tolerance Policy",
      color: "from-red-600 to-red-700",
      bgColor: "bg-red-50",
    },
  ];

  // Memberships & Clusters - EXACT from Profile Page 17
  const memberships = [
    {
      name: "Food Security & Agriculture Cluster",
      abbr: "FSAC",
      category: "Cluster",
    },
    { name: "Ministry of Economy", abbr: "MOEC", category: "Government" },
    { name: "Ministry of Public Health", abbr: "MOPH", category: "Government" },
    { name: "Norwegian Church Aid", abbr: "NCA", category: "Due Diligence" },
    { name: "World Food Program", abbr: "WFP", category: "Due Diligence" },
    {
      name: "Deutsche Gesellschaft für Internationale Zusammenarbeit",
      abbr: "GIZ",
      category: "Due Diligence",
    },
    { name: "Concern Worldwide", abbr: "CWW", category: "Due Diligence" },
    {
      name: "National Education Cluster UNICEF",
      abbr: "NEC UNICEF",
      category: "Cluster",
    },
    {
      name: "Agency Coordination Body for Afghan Relief & Development",
      abbr: "ACBAR",
      category: "Due Diligence",
    },
    {
      name: "Youths & Adults Basic Education Platform UNESCO",
      abbr: "UNESCO",
      category: "Due Diligence",
    },
    { name: "Shelter Cluster", abbr: "Shelter", category: "Cluster" },
    { name: "WASH Cluster", abbr: "WASH", category: "Cluster" },
    {
      name: "Protection & ES/NFI Cluster – UNHCR",
      abbr: "UNHCR",
      category: "Cluster",
    },
    {
      name: "Afghanistan Nutrition Cluster",
      abbr: "Nutrition",
      category: "Cluster",
    },
    { name: "Afghanistan Health Cluster", abbr: "Health", category: "Cluster" },
    {
      name: "Literacy Initiatives for Empowerment",
      abbr: "LIFE",
      category: "Due Diligence",
    },
    { name: "Mercy Corps", abbr: "MC", category: "Due Diligence" },
  ];

  // Projects - EXACT from Profile Page 16
  const projects = [
    {
      title: "Community-Based Nutrition Package",
      location: "Kunduz Province",
      funding: "614,712 $",
      duration: "Oct 2022 - Sep 2023",
      partner: "UNICEF-JACK",
      status: "Completed",
    },
    {
      title: "Community-Based Nutrition Package",
      location: "Farah Province",
      funding: "1,340,244 $",
      duration: "Oct 2022 - Oct 2023",
      partner: "UNICEF-JACK",
      status: "Completed",
    },
    {
      title: "Enhancing Teaching Skills: Training for Educators",
      location: "Takhar Province",
      funding: "5,394 $",
      duration: "Jan 2024 - Apr 2024",
      partner: "Education Program",
      status: "Completed",
    },
    {
      title: "Sustainable Livelihoods through Beekeeping Development",
      location: "Logar Province",
      funding: "4,136 $",
      duration: "May 2024 - Oct 2024",
      partner: "Private Donation",
      status: "Completed",
    },
    {
      title: "Bright Tomorrow – Free Education for Orphaned Children",
      location: "Takhar Province",
      funding: " 14,621 $",
      duration: "May 2025 - Oct 2025",
      partner: "Core Fund",
      status: "Active",
    },
  ];

  return (
    <div className="bg-white">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden ">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=2000"
            alt="OCOC accountability and transparency"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-teal-900/90"></div>
        </div>

        <div className="relative z-10 h-full flex items-center ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                <Award className="w-5 h-5 text-white" />
                <span className="text-sm font-bold text-white uppercase tracking-wide">
                  Transparency & Excellence
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                Impact & Accountability
              </h1>

              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mb-8"></div>

              <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                We hold ourselves accountable to our donors and partner
                communities, ensuring transparency and integrity in all our
                actions.
              </p>

              {/* <div className="grid grid-cols-3 gap-4 max-w-2xl">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <p className="text-3xl font-bold text-white mb-1">5</p>
                  <p className="text-xs text-white/80">Projects Completed</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <p className="text-3xl font-bold text-white mb-1">4+</p>
                  <p className="text-xs text-white/80">Provinces Served</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <p className="text-3xl font-bold text-white mb-1">17+</p>
                  <p className="text-xs text-white/80">Partnerships</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ACCOUNTABILITY OVERVIEW ==================== */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
              Our Commitment
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
              Accountability
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              OCOC adheres to the highest international standards of
              humanitarian accountability. We prioritize programmatic functions
              to ensure resources directly benefit our communities.
            </p>
          </div>

          {/* Three Accountability Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {accountabilityPoints.map((point, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${point.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div
                  className={`${point.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300`}
                >
                  {point.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {point.title}
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {point.description}
                </p>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-end gap-2">
                    <p
                      className={`text-4xl font-extrabold bg-gradient-to-r ${point.color} bg-clip-text text-transparent`}
                    >
                      {point.stat}
                    </p>
                    <p className="text-sm text-gray-600 pb-1">
                      {point.statLabel}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Commitment Statement - EXACT from Profile Page 15 */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            <div className="relative z-10 text-center">
              <Target className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-3xl font-bold mb-4">
                Our Dedication to Communities
              </h3>
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Our commitment to maintaining low overhead costs reflects our
                dedication to maximizing the impact of every contribution. By
                prioritizing programmatic functions, we ensure that the majority
                of our resources directly benefit the communities we serve. From
                2022 to 2024, we consistently allocated the bulk of our budget
                to support and uplift these communities, demonstrating our
                unwavering commitment to their well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS & PERFORMANCE ==================== */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
              Our Track Record
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
              Past & Present Performance
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2022, OCOC has implemented funded projects across
              Afghanistan
            </p>
          </div>

          {/* Projects Timeline */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="md:flex">
                  {/* Left - Status Badge */}
                  <div
                    className={`md:w-48 flex items-center justify-center p-6 ${
                      project.status === "Active"
                        ? "bg-gradient-to-br from-green-500 to-green-600"
                        : "bg-gradient-to-br from-blue-600 to-blue-700"
                    }`}
                  >
                    <div className="text-center text-white">
                      <CheckCircle className="w-12 h-12 mx-auto mb-3" />
                      <p className="text-sm font-bold uppercase tracking-wide">
                        {project.status}
                      </p>
                    </div>
                  </div>

                  {/* Right - Project Details */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {project.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {project.partner}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">
                          {project.funding}
                        </p>
                        <p className="text-xs text-gray-500">Total Funding</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PARTNERSHIPS & MEMBERSHIPS ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
              Global Collaboration
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
              Partnerships & Memberships
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              OCOC is actively engaged with national clusters and international
              agencies to coordinate aid
            </p>
          </div>

          {/* Partnership Overview Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <Globe className="w-12 h-12 mb-4 relative z-10" />
              <h3 className="text-2xl font-bold mb-3 relative z-10">
                Food Security (FSAC)
              </h3>
              <p className="text-white/90 relative z-10">
                Active member of the Food Security & Agriculture Cluster
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <Users className="w-12 h-12 mb-4 relative z-10" />
              <h3 className="text-2xl font-bold mb-3 relative z-10">
                Health & Nutrition
              </h3>
              <p className="text-white/90 relative z-10">
                Collaborating with Afghanistan Health and Nutrition Clusters
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <FileCheck className="w-12 h-12 mb-4 relative z-10" />
              <h3 className="text-2xl font-bold mb-3 relative z-10">
                Global Due Diligence
              </h3>
              <p className="text-white/90 relative z-10">
                In process with UN agencies (WFP, UNICEF, UNESCO) and
                international NGOs
              </p>
            </div>
          </div>

          {/* All Memberships Grid - EXACT from Profile Page 17 */}
          <div className="bg-gray-50 rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Complete List of Memberships, Clusters & Due Diligences
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {memberships.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        member.category === "Cluster"
                          ? "bg-blue-100 text-blue-600"
                          : member.category === "Government"
                          ? "bg-teal-100 text-teal-600"
                          : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      <HandshakeIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 text-sm leading-tight mb-1">
                        {member.abbr}
                      </p>
                      <p className="text-xs text-gray-600 leading-tight">
                        {member.name}
                      </p>
                      <span
                        className={`inline-block mt-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                          member.category === "Cluster"
                            ? "bg-blue-100 text-blue-700"
                            : member.category === "Government"
                            ? "bg-teal-100 text-teal-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {member.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BOTTOM CTA ==================== */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PieChart className="w-16 h-16 text-white mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transparent. Accountable. Impactful.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Every contribution makes a difference. Join us in creating lasting
            change for Afghanistan's children.
          </p>
          {/* <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View Our Annual Reports
          </button> */}
        </div>
      </section>
    </div>
  );
};

export default ImpactAccountabilityPage;
