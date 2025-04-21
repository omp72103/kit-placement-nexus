
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserRole } from "@/lib/types";
import { mockUsers } from "@/data/mockData";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("student");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    // Simulate authentication
    setTimeout(() => {
      // Find a user with the provided email and role
      const user = mockUsers.find(u => u.email === email && u.role === role);
      
      if (!user) {
        setError("Invalid credentials. Please try again.");
        setLoading(false);
        return;
      }
      
      // For simplicity, we're not checking the password in this demo
      // In a real app, you would validate the password here
      
      // Redirect to appropriate dashboard based on role
      if (role === "admin") {
        navigate("/dashboard/admin");
      } else if (role === "faculty") {
        navigate("/dashboard/faculty");
      } else {
        navigate("/dashboard/student");
      }
      
      setLoading(false);
    }, 1000);
  };
  
  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle>Login to TNP Portal</CardTitle>
        <CardDescription>
          Enter your credentials to access the Training & Placement Portal
        </CardDescription>
      </CardHeader>
      <Tabs defaultValue="student" value={role} onValueChange={(v) => setRole(v as UserRole)}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="student">Student</TabsTrigger>
          <TabsTrigger value="faculty">Faculty</TabsTrigger>
          <TabsTrigger value="admin">Admin (TPO)</TabsTrigger>
        </TabsList>
        <CardContent className="pt-6">
          <form onSubmit={handleLogin}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={
                    role === "student" 
                      ? "student@kit.ac.in" 
                      : role === "faculty" 
                        ? "faculty@kit.ac.in" 
                        : "tpo@kit.ac.in"
                  }
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              {error && (
                <div className="text-sm text-destructive mt-2">{error}</div>
              )}
              
              <Button type="submit" className="w-full mt-2" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>Demo Credentials:</p>
            {role === "student" && <p>Email: rahul.s@kit.ac.in | Password: password</p>}
            {role === "faculty" && <p>Email: rajesh.patil@kit.ac.in | Password: password</p>}
            {role === "admin" && <p>Email: tpo@kit.ac.in | Password: password</p>}
          </div>
        </CardContent>
      </Tabs>
      <CardFooter className="flex flex-col items-center justify-center border-t p-4">
        <p className="text-xs text-muted-foreground text-center">
          KIT's College of Engineering, Kolhapur - Training & Placement Cell
        </p>
      </CardFooter>
    </Card>
  );
}
