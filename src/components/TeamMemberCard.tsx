import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  linkedin?: string;
  isExecutive?: boolean;
}

const TeamMemberCard = ({ name, role, bio, image, linkedin, isExecutive = false }: TeamMemberCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-medium transition-all duration-300 group">
      <div className={`${isExecutive ? 'aspect-[3/4]' : 'aspect-square'} bg-gradient-subtle relative overflow-hidden`}>
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary">
            <div className="text-6xl font-bold text-primary/20">
              {name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-bold text-foreground">{name}</h3>
            <p className="text-sm text-accent font-medium">{role}</p>
          </div>
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>
        {isExecutive && bio && (
          <p className="text-sm text-muted-foreground mt-3 line-clamp-3">{bio}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
