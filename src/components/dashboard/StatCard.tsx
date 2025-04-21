
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp } from "lucide-react";
import { DashboardStat } from "@/lib/types";

interface StatCardProps {
  stat: DashboardStat;
  className?: string;
}

export function StatCard({ stat, className }: StatCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {stat.title}
        </CardTitle>
        {stat.icon && <div className="h-4 w-4 text-muted-foreground">{stat.icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{stat.value}</div>
        {stat.change && (
          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
            {stat.change.trend === 'up' && <ArrowUp className="h-3 w-3 text-green-500" />}
            {stat.change.trend === 'down' && <ArrowDown className="h-3 w-3 text-red-500" />}
            <span className={cn(
              stat.change.trend === 'up' && "text-green-500",
              stat.change.trend === 'down' && "text-red-500"
            )}>
              {stat.change.value}%
            </span> 
            {stat.description && <span className="ml-1">{stat.description}</span>}
          </p>
        )}
        {!stat.change && stat.description && (
          <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
        )}
      </CardContent>
    </Card>
  );
}
