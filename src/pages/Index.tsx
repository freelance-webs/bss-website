import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import logo from "@/assets/bss-logo.png";

const Index = () => {
  const upcomingEvents = [
    {
      title: "Leadership in the Digital Age",
      speaker: "Sarah Johnson",
      date: "March 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Business Building, Room 1-01",
      description: "Explore how modern leaders navigate digital transformation and build resilient teams in an ever-changing business landscape.",
    },
    {
      title: "Entrepreneurship and Innovation",
      speaker: "Michael Chen",
      date: "March 29, 2025",
      time: "5:30 PM - 7:30 PM",
      location: "ETLC, Lecture Hall E1-003",
      description: "Learn from a successful entrepreneur about building startups, securing funding, and fostering innovation in competitive markets.",
    },
    {
      title: "Sustainable Business Practices",
      speaker: "Dr. Emily Rodriguez",
      date: "April 12, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Business Building, Room 1-01",
      description: "Discover how businesses can integrate sustainability into their core operations and create long-term value for stakeholders.",
    },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                University of Alberta Student Organization
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Connect with Industry Leaders
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Business Speaker Series brings together students and accomplished professionals to inspire, educate, and empower the next generation of business leaders through engaging speaker events and networking opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/events">
                  <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity text-lg px-8">
                    View Events <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src={logo} 
                alt="BSS Logo" 
                className="w-64 h-64 md:w-80 md:h-80 animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-accent/10 p-4 rounded-full">
                  <Users className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">50+</div>
              <div className="text-muted-foreground">Industry Speakers</div>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-accent/10 p-4 rounded-full">
                  <Calendar className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">12+</div>
              <div className="text-muted-foreground">Events Per Year</div>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-accent/10 p-4 rounded-full">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">1000+</div>
              <div className="text-muted-foreground">Students Engaged</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join us for inspiring talks and invaluable networking opportunities with industry leaders
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/events">
              <Button size="lg" variant="outline" className="text-lg">
                View All Events <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed opacity-90">
            Business Speaker Series is dedicated to bridging the gap between academic learning and real-world business experience. We create a platform where University of Alberta students can gain insights from accomplished professionals, develop valuable connections, and explore diverse career paths. Through thought-provoking presentations and meaningful interactions, we empower students to think critically about their futures and make informed decisions about their professional journeys.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
