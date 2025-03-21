
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
  className?: string;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  iconColor = "text-wordsmith-blue",
  bgColor = "bg-wordsmith-blue/10",
  className
}: FeatureCardProps) => {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-xl p-6 transition-all hover:shadow-subtle bg-card animate-fade-up",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-mesh opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className={cn(
        "rounded-full w-12 h-12 flex items-center justify-center mb-4",
        bgColor
      )}>
        <Icon className={cn("h-6 w-6", iconColor)} />
      </div>
      
      <h3 className="text-xl font-medium mb-2 relative">{title}</h3>
      
      <p className="text-muted-foreground relative">{description}</p>
    </div>
  );
};

export default FeatureCard;
