
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { mockUsers, mockStudents, mockCompanies } from "@/data/mockData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/dashboard/StatCard";
import { DashboardStat } from "@/lib/types";
import { BarChart3, Building2, CalendarCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const AdminDashboard = () => {
  // Find the admin user
  const adminUser = mockUsers.find(user => user.role === 'admin');
  
  if (!adminUser) {
    return <div>Admin user not found</div>;
  }

  const stats: DashboardStat[] = [
    {
      title: "Total Students",
      value: mockStudents.length,
      description: "Registered for placements",
      icon: <Users />,
      change: {
        value: 12,
        trend: "up"
      }
    },
    {
      title: "Companies",
      value: mockCompanies.length,
      description: "Visiting for recruitment",
      icon: <Building2 />,
      change: {
        value: 8,
        trend: "up"
      }
    },
    {
      title: "Placement Drives",
      value: 12,
      description: "Scheduled this semester",
      icon: <CalendarCheck />,
    },
    {
      title: "Placement Ratio",
      value: "68%",
      description: "Of eligible students placed",
      icon: <BarChart3 />,
      change: {
        value: 5,
        trend: "up"
      }
    }
  ];

  const branchStats = [
    { branch: "CSE", totalStudents: 120, eligibleStudents: 118, placedStudents: 98 },
    { branch: "CSE-AIML", totalStudents: 60, eligibleStudents: 58, placedStudents: 45 },
    { branch: "CSE-DS", totalStudents: 60, eligibleStudents: 57, placedStudents: 42 },
    { branch: "ENTC", totalStudents: 90, eligibleStudents: 85, placedStudents: 52 },
    { branch: "ELECTRICAL", totalStudents: 80, eligibleStudents: 75, placedStudents: 48 },
  ];

  const upcomingDrives = [
    { company: "Microsoft", date: "May 25, 2023", eligibleStudents: 80 },
    { company: "Amazon", date: "May 28, 2023", eligibleStudents: 95 },
    { company: "Infosys", date: "June 2, 2023", eligibleStudents: 280 }
  ];

  return (
    <DashboardLayout user={adminUser}>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">TPO Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to the Training and Placement Officer dashboard. Here's an overview of the current placement season.
        </p>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} />
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Branch-wise Placement Statistics</CardTitle>
              <CardDescription>Current academic year placement progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {branchStats.map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{stat.branch}</span>
                      <span className="text-sm text-muted-foreground">
                        {stat.placedStudents}/{stat.eligibleStudents} ({Math.round((stat.placedStudents / stat.eligibleStudents) * 100)}%)
                      </span>
                    </div>
                    <Progress value={(stat.placedStudents / stat.eligibleStudents) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Placement Drives</CardTitle>
              <CardDescription>Schedule for the next 14 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingDrives.map((drive, i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div>
                      <h4 className="font-medium">{drive.company}</h4>
                      <p className="text-sm text-muted-foreground">{drive.date}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <span className="text-sm font-medium">{drive.eligibleStudents}</span>
                        <p className="text-xs text-muted-foreground">Eligible</p>
                      </div>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                  </div>
                ))}
                <Button className="w-full">View All Drives</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
