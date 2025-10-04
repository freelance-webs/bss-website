import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Events = () => {
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
    {
      title: "The Future of Finance",
      speaker: "Robert Taylor",
      date: "April 26, 2025",
      time: "5:30 PM - 7:30 PM",
      location: "ETLC, Lecture Hall E1-003",
      description: "Gain insights into emerging trends in fintech, blockchain, and the evolving landscape of global financial markets.",
    },
  ];

  const pastEvents = [
    {
      title: "Marketing in the Social Media Era",
      speaker: "Jessica Adams",
      date: "February 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Business Building, Room 1-01",
      description: "An engaging discussion on building brand presence and engaging audiences in the age of social media.",
    },
    {
      title: "Supply Chain Management Excellence",
      speaker: "David Liu",
      date: "January 25, 2025",
      time: "5:30 PM - 7:30 PM",
      location: "ETLC, Lecture Hall E1-003",
      description: "Insights into optimizing supply chains and managing logistics in a globalized economy.",
    },
    {
      title: "Career Development Strategies",
      speaker: "Amanda Foster",
      date: "January 10, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Business Building, Room 1-01",
      description: "Practical advice on resume building, networking, and navigating your early career journey.",
    },
    {
      title: "Data Analytics in Business",
      speaker: "Dr. Kevin Park",
      date: "December 5, 2024",
      time: "5:30 PM - 7:30 PM",
      location: "ETLC, Lecture Hall E1-003",
      description: "Leveraging data analytics to drive business decisions and create competitive advantage.",
    },
    {
      title: "Consulting Industry Insights",
      speaker: "Michelle Cooper",
      date: "November 20, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Business Building, Room 1-01",
      description: "An inside look at the consulting world, from case interviews to client management.",
    },
    {
      title: "Tech Startups and Venture Capital",
      speaker: "Alex Zhang",
      date: "November 5, 2024",
      time: "5:30 PM - 7:30 PM",
      location: "ETLC, Lecture Hall E1-003",
      description: "Understanding the startup ecosystem and how venture capital fuels innovation.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Events</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for inspiring conversations with industry leaders and expand your professional network
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="upcoming" className="text-lg">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past" className="text-lg">Past Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={index} {...event} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="past">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event, index) => (
                  <EventCard key={index} {...event} isPast />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
