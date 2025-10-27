import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SponsorCard from "@/components/SponsorCard";
import { useSponsors } from "@/hooks/useSponsors";

const Sponsors = () => {
  const { data: sponsors, isLoading } = useSponsors();

  return (
    <div className="min-h-screen flex flex-col bg-background animate-fade-in">
      <Navigation />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Sponsors
              </h1>
              <p className="text-xl text-muted-foreground">
                We're grateful for the support of our sponsors who help make our events possible.
              </p>
            </div>
          </div>
        </section>

        {/* Sponsors Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="text-center text-muted-foreground">Loading sponsors...</div>
            ) : sponsors && sponsors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {sponsors.map((sponsor) => (
                  <SponsorCard
                    key={sponsor.id}
                    name={sponsor.name}
                    description={sponsor.description}
                    image={sponsor.image}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                No sponsors to display yet.
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sponsors;
