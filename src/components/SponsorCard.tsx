import { Card, CardContent } from "@/components/ui/card";

interface SponsorCardProps {
  name: string;
  description?: string | null;
  image?: string | null;
}

const SponsorCard = ({ name, description, image }: SponsorCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        {image && (
          <div className="mb-4 flex justify-center">
            <img
              src={image}
              alt={name}
              className="h-32 w-auto object-contain"
            />
          </div>
        )}
        <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
        {description && (
          <p className="text-muted-foreground text-center text-sm">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default SponsorCard;
