
import { Logo } from "@/components/ui/custom/Logo";
import { LoginForm } from "@/components/auth/LoginForm";
import { Building2, Calendar, FileText, GraduationCap, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      {/* Header */}
      <header className="h-16 border-b bg-white flex items-center px-4 md:px-6">
        <Logo />
      </header>
      
      {/* Main content */}
      <main className="flex-1 flex flex-col md:flex-row">
        {/* Hero section */}
        <div className="flex-1 bg-gradient-to-br from-kit-primary to-kit-accent text-white p-8 md:p-12 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              KIT's Training & Placement Portal
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Connecting students with opportunities and empowering their career journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start gap-3">
                <div className="bg-white/20 rounded-md p-2">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Student Profiles</h3>
                  <p className="text-sm opacity-80">Comprehensive academic and placement records</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start gap-3">
                <div className="bg-white/20 rounded-md p-2">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Company Management</h3>
                  <p className="text-sm opacity-80">Track recruiting companies and opportunities</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start gap-3">
                <div className="bg-white/20 rounded-md p-2">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Placement Drives</h3>
                  <p className="text-sm opacity-80">Schedule and manage campus recruitment drives</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start gap-3">
                <div className="bg-white/20 rounded-md p-2">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Result Management</h3>
                  <p className="text-sm opacity-80">Upload and track semester-wise academic results</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start gap-3 md:col-span-2">
                <div className="bg-white/20 rounded-md p-2">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Multi-tier Access</h3>
                  <p className="text-sm opacity-80">Dedicated dashboards for TPO, TNP Coordinators, and Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Login section */}
        <div className="p-8 md:p-12 flex items-center justify-center bg-white md:w-1/3 md:min-w-[400px]">
          <LoginForm />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t bg-white p-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} KIT's College of Engineering, Kolhapur. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
