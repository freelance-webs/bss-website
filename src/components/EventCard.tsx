import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface EventCardProps {
  title: string;
  speaker: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  isPast?: boolean;
  price?: number | null;
  eventbrite_url?: string | null;
}

const EventCard = ({ title, speaker, date, time, location, description, image, isPast = false, price, eventbrite_url }: EventCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className={`overflow-hidden hover:shadow-medium transition-all duration-300 cursor-pointer ${isPast ? 'opacity-75' : ''}`}>
          <div className="aspect-video bg-gradient-hero relative overflow-hidden">
            {image ? (
              <img src={image} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-primary-foreground">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">{speaker}</div>
                  <div className="text-sm opacity-90">{title}</div>
                </div>
              </div>
            )}
            {isPast && (
              <div className="absolute top-4 right-4 bg-background/90 text-foreground px-3 py-1 rounded-full text-xs font-medium">
                Past Event
              </div>
            )}
          </div>
          <CardHeader>
            <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-accent font-semibold">{speaker}</p>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{time}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
              {typeof price !== 'undefined' && price !== null && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="font-semibold">
                    {price === 0 ? 'Free' : `$ ${price.toFixed(2)}`}
                  </span>
                </div>
              )}
            </div>

            {!isPast && (
              <div className="space-y-2">
                {eventbrite_url && eventbrite_url.trim() !== '' ? (
                  <Button 
                    className="w-full mt-4 bg-gradient-hero hover:opacity-90 transition-opacity"
                    onClick={() => window.open(eventbrite_url, '_blank')}
                  >
                    Register via Eventbrite
                  </Button>
                ) : (
                  <Button 
                    className="w-full mt-4 bg-gradient-hero hover:opacity-90 transition-opacity"
                    onClick={() => {
                      // Placeholder for general registration if no Eventbrite URL
                    }}
                  >
                    Register Now
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left side - Image */}
          <div className="relative h-full min-h-[400px] bg-gradient-hero">
            {image ? (
              <img src={image} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-primary-foreground">
                <div className="text-center p-8">
                  <div className="text-3xl font-bold mb-4">{speaker}</div>
                  <div className="text-lg opacity-90">{title}</div>
                </div>
              </div>
            )}
          </div>
          
          {/* Right side - Details */}
          <div className="p-8 space-y-6">
            {isPast && (
              <div className="inline-block bg-muted text-foreground px-3 py-1 rounded-full text-sm font-medium">
                Past Event
              </div>
            )}
            
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
              <p className="text-accent font-semibold text-lg">{speaker}</p>
            </div>
            
            <p className="text-foreground">{description}</p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="h-5 w-5" />
                <span className="text-base">{date}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span className="text-base">{time}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span className="text-base">{location}</span>
              </div>
              {typeof price !== 'undefined' && price !== null && (
                <div className="flex items-center gap-3 text-foreground">
                  <span className="text-lg font-semibold">
                    {price === 0 ? 'Free Event' : `$${price.toFixed(2)}`}
                  </span>
                </div>
              )}
            </div>

            {!isPast && (
              <div className="pt-4">
                {eventbrite_url && eventbrite_url.trim() !== '' ? (
                  <Button 
                    className="w-full bg-gradient-hero hover:opacity-90 transition-opacity"
                    size="lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(eventbrite_url, '_blank');
                    }}
                  >
                    Register via Eventbrite
                  </Button>
                ) : (
                  <Button 
                    className="w-full bg-gradient-hero hover:opacity-90 transition-opacity"
                    size="lg"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Register Now
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventCard;