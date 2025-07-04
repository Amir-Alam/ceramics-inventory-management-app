import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type StatsCardProps = {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor?: string;
  className?: string;
};

export function StatsCard({
  title,
  value,
  icon: Icon,
  iconColor,
  className,
}: StatsCardProps) {
  return (
    <Card className={cn("w-full", className)}>
      <CardContent className="p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h3 className="text-xl font-semibold text-slate-800">{value}</h3>
        </div>
        <div className={`p-2 rounded-full bg-slate-100 ${iconColor}`}>
          <Icon className="h-5 w-5" />
        </div>
      </CardContent>
    </Card>
  );
}
