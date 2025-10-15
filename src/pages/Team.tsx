import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";
import { useExecutives, useMembers } from "@/hooks/useTeamMembers";

const Team = () => {
  const { data: executives = [], isLoading: executivesLoading } = useExecutives();
  const { data: members = [], isLoading: membersLoading } = useMembers();

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
          {executivesLoading ? (
            <div className="text-center text-muted-foreground py-12">Loading team...</div>
          ) : executives.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {executives.map((member) => (
                <TeamMemberCard key={member.id} {...member} isExecutive />
              ))}
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-12">No executive team members yet.</div>
          )}
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
          {membersLoading ? (
            <div className="text-center text-muted-foreground py-12">Loading members...</div>
          ) : members.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {members.map((member) => (
                <TeamMemberCard key={member.id} {...member} />
              ))}
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-12">No general members yet.</div>
          )}
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
