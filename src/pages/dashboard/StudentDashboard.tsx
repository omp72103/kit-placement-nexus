
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { getEligibleCompaniesForStudent, mockCompanies, mockStudents, mockUsers } from "@/data/mockData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Calendar, Check, Clock, FileText } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatCard } from "@/components/dashboard/StatCard";
import { DashboardStat } from "@/lib/types";

const StudentDashboard = () => {
  // Find the student user
  const studentUser = mockUsers.find(user => user.role === 'student');
  
  if (!studentUser) {
    return <div>Student user not found</div>;
  }
  
  // Get the student details
  const student = mockStudents.find(s => s.email === studentUser.email);
  
  if (!student) {
    return <div>Student data not found</div>;
  }
  
  // Get companies the student is eligible for
  const eligibleCompanies = getEligibleCompaniesForStudent(student);

  const stats: DashboardStat[] = [
    {
      title: "Current CGPA",
      value: student.cgpa.toFixed(2),
      description: student.cgpa >= 7.5 ? "Excellent standing" : student.cgpa >= 6.5 ? "Good standing" : "Average standing",
    },
    {
      title: "Eligible Companies",
      value: eligibleCompanies.length,
      description: "Based on your profile",
      icon: <Building2 className="h-4 w-4" />,
    },
    {
      title: "Upcoming Drives",
      value: 3,
      description: "In the next 30 days",
      icon: <Calendar className="h-4 w-4" />,
    },
    {
      title: "Applications",
      value: "2/5",
      description: "Submitted/Available",
      icon: <FileText className="h-4 w-4" />,
    }
  ];

  return (
    <DashboardLayout user={studentUser}>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{student.name}</h1>
            <p className="text-muted-foreground">
              {student.branch} | {student.year} | PRN: {student.prn}
            </p>
          </div>
          <Badge 
            variant="outline" 
            className={student.hasBacklogs 
              ? "bg-amber-50 text-amber-700 hover:bg-amber-50" 
              : "bg-green-50 text-green-700 hover:bg-green-50"
            }
          >
            {student.hasBacklogs 
              ? `${student.backlogs} Active Backlog${student.backlogs !== 1 ? 's' : ''}` 
              : "No Active Backlogs"
            }
          </Badge>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} />
          ))}
        </div>

        <Tabs defaultValue="companies">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="companies">Eligible Companies</TabsTrigger>
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="results">Academic Results</TabsTrigger>
          </TabsList>
          
          <TabsContent value="companies" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Companies You're Eligible For</CardTitle>
                <CardDescription>Based on your academic records and profile</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {eligibleCompanies.length > 0 ? (
                  eligibleCompanies.map((company, i) => (
                    <div key={i} className="border rounded-lg p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-lg">{company.name}</h3>
                          <p className="text-sm text-muted-foreground">{company.location}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          {company.visitDate && (
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {company.visitDate}
                            </Badge>
                          )}
                          <Button size="sm" variant="default">View Details</Button>
                        </div>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {company.openPositions.map((position, j) => (
                          <div key={j} className="border rounded-md p-3">
                            <h4 className="font-medium">{position.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{position.description}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">{position.salary}</span>
                              <Badge variant="secondary">{position.openings} openings</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No eligible companies found. Work on improving your profile.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="applications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Applications</CardTitle>
                <CardDescription>Track your placement applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-lg">TCS</h3>
                        <p className="text-sm text-muted-foreground">Software Engineer</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 flex items-center gap-1">
                        <Check className="h-3 w-3" />
                        Shortlisted
                      </Badge>
                    </div>
                    <div className="mt-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Application Progress</span>
                          <span>3/5 stages completed</span>
                        </div>
                        <Progress value={60} className="h-2" />
                      </div>
                      <div className="grid grid-cols-5 gap-2 mt-3">
                        <div className="text-center">
                          <div className="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center mx-auto">
                            <Check className="h-3 w-3" />
                          </div>
                          <p className="text-xs mt-1">Applied</p>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center mx-auto">
                            <Check className="h-3 w-3" />
                          </div>
                          <p className="text-xs mt-1">Shortlisted</p>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center mx-auto">
                            <Check className="h-3 w-3" />
                          </div>
                          <p className="text-xs mt-1">Test</p>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-muted text-muted-foreground rounded-full flex items-center justify-center mx-auto">
                            <Clock className="h-3 w-3" />
                          </div>
                          <p className="text-xs mt-1">Interview</p>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-muted text-muted-foreground rounded-full flex items-center justify-center mx-auto">
                            <Clock className="h-3 w-3" />
                          </div>
                          <p className="text-xs mt-1">Offer</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-lg">Infosys</h3>
                        <p className="text-sm text-muted-foreground">Systems Engineer</p>
                      </div>
                      <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Under Review
                      </Badge>
                    </div>
                    <div className="mt-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Application Progress</span>
                          <span>1/5 stages completed</span>
                        </div>
                        <Progress value={20} className="h-2" />
                      </div>
                      <div className="grid grid-cols-5 gap-2 mt-3">
                        <div className="text-center">
                          <div className="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center mx-auto">
                            <Check className="h-3 w-3" />
                          </div>
                          <p className="text-xs mt-1">Applied</p>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mx-auto">
                            <Clock className="h-3 w-3" />
                          </div>
                          <p className="text-xs mt-1">Review</p>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-muted text-muted-foreground rounded-full flex items-center justify-center mx-auto">
                            <Clock className="h-3 w-3" />
                          </div>
                          <p className="text-xs mt-1">Test</p>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-muted text-muted-foreground rounded-full flex items-center justify-center mx-auto">
                            <Clock className="h-3 w-3" />
                          </div>
                          <p className="text-xs mt-1">Interview</p>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-muted text-muted-foreground rounded-full flex items-center justify-center mx-auto">
                            <Clock className="h-3 w-3" />
                          </div>
                          <p className="text-xs mt-1">Offer</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="results" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Academic Results</CardTitle>
                <CardDescription>Semester-wise performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {student.semesterResults.map((result, i) => (
                    <div key={i} className="border rounded-lg p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="font-semibold">Semester {result.semester}</h3>
                          <p className="text-sm text-muted-foreground">{result.year}</p>
                        </div>
                        <Badge variant="outline" className="font-semibold">
                          SGPA: {result.sgpa.toFixed(2)}
                        </Badge>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2 font-medium">Course Code</th>
                              <th className="text-left py-2 font-medium">Course Name</th>
                              <th className="text-center py-2 font-medium">Credits</th>
                              <th className="text-center py-2 font-medium">Grade</th>
                            </tr>
                          </thead>
                          <tbody>
                            {result.subjects.map((subject, j) => (
                              <tr key={j} className="border-b last:border-0">
                                <td className="py-2">{subject.code}</td>
                                <td className="py-2">{subject.name}</td>
                                <td className="py-2 text-center">{subject.credits}</td>
                                <td className="py-2 text-center">
                                  <Badge variant="outline" className={
                                    subject.grade === 'A' || subject.grade === 'A+' || subject.grade === 'A-'
                                      ? "bg-green-50 text-green-700 hover:bg-green-50"
                                      : subject.grade === 'B' || subject.grade === 'B+' || subject.grade === 'B-'
                                        ? "bg-blue-50 text-blue-700 hover:bg-blue-50"
                                        : subject.grade === 'F'
                                          ? "bg-red-50 text-red-700 hover:bg-red-50"
                                          : ""
                                  }>
                                    {subject.grade}
                                  </Badge>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
