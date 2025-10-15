import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUpcomingEvents, usePastEvents } from "@/hooks/useEvents";

const Events = () => {
  const { data: upcomingEvents = [], isLoading: upcomingLoading } = useUpcomingEvents();
  const { data: pastEvents = [], isLoading: pastLoading } = usePastEvents();

  return (
    <div className="min-h-screen bg-background animate-fade-in">
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
              {upcomingLoading ? (
                <div className="text-center text-muted-foreground py-12">Loading events...</div>
              ) : upcomingEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              ) : (
                <div className="text-center text-muted-foreground py-12">No upcoming events at this time.</div>
              )}
            </TabsContent>
            
            <TabsContent value="past">
              {pastLoading ? (
                <div className="text-center text-muted-foreground py-12">Loading events...</div>
              ) : pastEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pastEvents.map((event) => (
                    <EventCard key={event.id} {...event} isPast />
                  ))}
                </div>
              ) : (
                <div className="text-center text-muted-foreground py-12">No past events to display.</div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
