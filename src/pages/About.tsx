import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Target, TrendingUp, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Community",
      description: "Building a strong network of students and professionals"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Delivering high-quality events with renowned speakers"
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Fostering personal and professional development"
    },
    {
      icon: Award,
      title: "Impact",
      description: "Creating meaningful connections that last"
    }
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">About BSS</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering the next generation of business leaders through knowledge, connection, and inspiration
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded by passionate business students at the University of Alberta, Business Speaker Series was created to address a fundamental need: connecting academic knowledge with real-world business experience. What started as a small initiative has grown into one of the most anticipated student-run organizations on campus.
            </p>
            <p>
              Each year, we bring together dozens of industry leaders, entrepreneurs, executives, and innovators who share their insights, experiences, and advice with our student community. These events provide more than just learning opportunities—they create meaningful connections that often lead to mentorships, internships, and career opportunities.
            </p>
            <p>
              Our commitment to excellence has attracted speakers from diverse industries including technology, finance, consulting, healthcare, and social enterprise. We pride ourselves on curating events that are not only informative but also inspiring and actionable for students at all stages of their academic and professional journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-accent/10 p-4 rounded-full">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground mb-2">Industry Speakers</div>
              <p className="text-sm text-muted-foreground">
                Leaders from Fortune 500 companies, startups, and everything in between
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
              <div className="text-3xl font-bold text-accent mb-2">1000+</div>
              <div className="text-sm text-muted-foreground mb-2">Students Reached</div>
              <p className="text-sm text-muted-foreground">
                Building connections and expanding horizons across campus
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
              <div className="text-3xl font-bold text-accent mb-2">12+</div>
              <div className="text-sm text-muted-foreground mb-2">Events Per Year</div>
              <p className="text-sm text-muted-foreground">
                Consistent, high-quality programming throughout the academic year
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
              <div className="text-3xl font-bold text-accent mb-2">25+</div>
              <div className="text-sm text-muted-foreground mb-2">Industry Sectors</div>
              <p className="text-sm text-muted-foreground">
                Diverse perspectives from all corners of the business world
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
