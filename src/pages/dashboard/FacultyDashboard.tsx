
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { mockUsers, mockStudents, mockCompanies } from "@/data/mockData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/dashboard/StatCard";
import { DashboardStat } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BarChart3, Building2, CalendarCheck, UserCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const FacultyDashboard = () => {
  // Find the faculty user
  const facultyUser = mockUsers.find(user => user.role === 'faculty');
  
  if (!facultyUser) {
    return <div>Faculty user not found</div>;
  }
  
  // Filter students by department (assuming faculty can only see their department's students)
  const departmentStudents = mockStudents.filter(
    student => student.branch === facultyUser.department
  );

  const stats: DashboardStat[] = [
    {
      title: "Department Students",
      value: departmentStudents.length,
      description: "In final & pre-final year",
      icon: <Users />,
    },
    {
      title: "Eligible Students",
      value: departmentStudents.filter(s => s.cgpa >= 6.0).length,
      description: "For current placement season",
      icon: <UserCheck />,
    },
    {
      title: "Recruiting Companies",
      value: mockCompanies.filter(c => 
        c.eligibilityCriteria.eligibleBranches.includes(facultyUser.department as any)
      ).length,
      description: "For your department",
      icon: <Building2 />,
    },
    {
      title: "Placement Rate",
      value: "72%",
      description: "Department students placed",
      icon: <BarChart3 />,
    }
  ];

  // Eligible students with good profile
  const topStudents = departmentStudents
    .filter(s => s.cgpa >= 8.0)
    .sort((a, b) => b.cgpa - a.cgpa)
    .slice(0, 4);

  // Upcoming drives for the department
  const upcomingDrives = [
    { company: "TCS", date: "May 22, 2023", eligibleStudents: 45 },
    { company: "Infosys", date: "May 28, 2023", eligibleStudents: 42 },
    { company: "Tech Mahindra", date: "June 5, 2023", eligibleStudents: 38 }
  ];

  return (
    <DashboardLayout user={facultyUser}>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Department Coordinator Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to the TNP Coordinator dashboard for {facultyUser.department}. 
          Manage your department's students and track placement progress here.
        </p>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} />
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Top Students</CardTitle>
              <CardDescription>Students with highest CGPA in your department</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topStudents.map((student, i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${student.name}`} />
                        <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{student.name}</h4>
                        <p className="text-sm text-muted-foreground">{student.prn}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                        CGPA: {student.cgpa}
                      </Badge>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                  </div>
                ))}
                <Button className="w-full">View All Students</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Drives</CardTitle>
              <CardDescription>Placement drives for your department</CardDescription>
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
                      <Button size="sm" variant="outline">
                        <CalendarCheck className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                    </div>
                  </div>
                ))}
                <Button className="w-full">View All Drives</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Academic Performance Overview</CardTitle>
            <CardDescription>CGPA distribution in your department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">9.0 and above</span>
                  <span className="text-sm text-muted-foreground">
                    {departmentStudents.filter(s => s.cgpa >= 9.0).length} students
                  </span>
                </div>
                <Progress value={(departmentStudents.filter(s => s.cgpa >= 9.0).length / departmentStudents.length) * 100} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">8.0 - 8.99</span>
                  <span className="text-sm text-muted-foreground">
                    {departmentStudents.filter(s => s.cgpa >= 8.0 && s.cgpa < 9.0).length} students
                  </span>
                </div>
                <Progress value={(departmentStudents.filter(s => s.cgpa >= 8.0 && s.cgpa < 9.0).length / departmentStudents.length) * 100} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">7.0 - 7.99</span>
                  <span className="text-sm text-muted-foreground">
                    {departmentStudents.filter(s => s.cgpa >= 7.0 && s.cgpa < 8.0).length} students
                  </span>
                </div>
                <Progress value={(departmentStudents.filter(s => s.cgpa >= 7.0 && s.cgpa < 8.0).length / departmentStudents.length) * 100} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">6.0 - 6.99</span>
                  <span className="text-sm text-muted-foreground">
                    {departmentStudents.filter(s => s.cgpa >= 6.0 && s.cgpa < 7.0).length} students
                  </span>
                </div>
                <Progress value={(departmentStudents.filter(s => s.cgpa >= 6.0 && s.cgpa < 7.0).length / departmentStudents.length) * 100} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Below 6.0</span>
                  <span className="text-sm text-muted-foreground">
                    {departmentStudents.filter(s => s.cgpa < 6.0).length} students
                  </span>
                </div>
                <Progress value={(departmentStudents.filter(s => s.cgpa < 6.0).length / departmentStudents.length) * 100} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default FacultyDashboard;
