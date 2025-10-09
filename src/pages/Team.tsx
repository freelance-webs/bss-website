import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";

const Team = () => {
  const executives = [
    {
      name: "Alex Thompson",
      role: "President",
      bio: "Leading BSS with a vision to create meaningful connections between students and industry professionals. Passionate about entrepreneurship and innovation.",
    },
    {
      name: "Sophia Martinez",
      role: "Vice President",
      bio: "Coordinating operations and ensuring seamless event execution. Background in project management and strategic planning.",
    },
    {
      name: "David Kim",
      role: "Director of Events",
      bio: "Managing all aspects of speaker events from planning to execution. Committed to delivering exceptional experiences for students and speakers alike.",
    },
    {
      name: "Emma Wilson",
      role: "Director of Marketing",
      bio: "Developing our brand presence and engaging our community through creative campaigns and strategic communications.",
    },
    {
      name: "James Patel",
      role: "Director of Sponsorship",
      bio: "Building relationships with corporate partners and securing funding to support our mission and expand our impact.",
    },
    {
      name: "Olivia Chen",
      role: "Director of Finance",
      bio: "Managing budget, financial planning, and ensuring responsible stewardship of organizational resources.",
    },
  ];

  const members = [
    { name: "Sarah Johnson", role: "Events Coordinator" },
    { name: "Michael Brown", role: "Marketing Coordinator" },
    { name: "Rachel Green", role: "Social Media Manager" },
    { name: "Tom Anderson", role: "Sponsorship Coordinator" },
    { name: "Lisa Wang", role: "Logistics Coordinator" },
    { name: "Kevin Nguyen", role: "Design Lead" },
    { name: "Amanda Foster", role: "Communications" },
    { name: "Ryan Mitchell", role: "Technology Lead" },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated students who make Business Speaker Series possible
          </p>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Executive Team</h2>
            <p className="text-lg text-muted-foreground">
              Our leadership team works tirelessly to bring world-class speakers to campus
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((member, index) => (
              <TeamMemberCard key={index} {...member} isExecutive />
            ))}
          </div>
        </div>
      </section>

      {/* General Members */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">General Members</h2>
            <p className="text-lg text-muted-foreground">
              The backbone of our organization, supporting every aspect of our operations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Join Our Team</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're always looking for passionate students who want to make a difference. If you're interested in event planning, marketing, sponsorship, or just want to be part of an amazing community, we'd love to hear from you.
          </p>
          <a href="/contact" className="inline-block">
            <button className="bg-gradient-hero text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">
              Get Involved
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
