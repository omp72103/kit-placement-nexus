
import { ReactNode, useState } from "react";
import { User } from "@/lib/types";
import { Logo } from "@/components/ui/custom/Logo";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { 
  BarChart3, 
  BookOpen, 
  Building2, 
  Calendar, 
  ChevronDown, 
  FileText, 
  GraduationCap, 
  Home, 
  LogOut, 
  Menu, 
  Settings, 
  User as UserIcon, 
  Users 
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface DashboardLayoutProps {
  children: ReactNode;
  user: User;
}

interface NavItemProps {
  icon: ReactNode;
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, href, active, onClick }: NavItemProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
        active 
          ? "bg-primary text-primary-foreground" 
          : "hover:bg-muted"
      )}
      onClick={onClick}
    >
      {icon}
      {label}
    </Link>
  );
};

export function DashboardLayout({ children, user }: DashboardLayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // In a real app, we would clear auth state here
    navigate("/");
  };

  // Define navigation based on user role
  const getNavItems = (role: string) => {
    const commonItems = [
      { icon: <Home className="h-4 w-4" />, label: "Dashboard", href: `/dashboard/${role}` },
    ];

    if (role === "admin") {
      return [
        ...commonItems,
        { icon: <Users className="h-4 w-4" />, label: "Students", href: "/dashboard/admin/students" },
        { icon: <Building2 className="h-4 w-4" />, label: "Companies", href: "/dashboard/admin/companies" },
        { icon: <Calendar className="h-4 w-4" />, label: "Placement Drives", href: "/dashboard/admin/drives" },
        { icon: <FileText className="h-4 w-4" />, label: "Reports", href: "/dashboard/admin/reports" },
        { icon: <Settings className="h-4 w-4" />, label: "Settings", href: "/dashboard/admin/settings" },
      ];
    } else if (role === "faculty") {
      return [
        ...commonItems,
        { icon: <Users className="h-4 w-4" />, label: "Students", href: "/dashboard/faculty/students" },
        { icon: <GraduationCap className="h-4 w-4" />, label: "Results", href: "/dashboard/faculty/results" },
        { icon: <Building2 className="h-4 w-4" />, label: "Companies", href: "/dashboard/faculty/companies" },
        { icon: <Calendar className="h-4 w-4" />, label: "Placement Drives", href: "/dashboard/faculty/drives" },
        { icon: <Settings className="h-4 w-4" />, label: "Settings", href: "/dashboard/faculty/settings" },
      ];
    } else {
      return [
        ...commonItems,
        { icon: <UserIcon className="h-4 w-4" />, label: "My Profile", href: "/dashboard/student/profile" },
        { icon: <BookOpen className="h-4 w-4" />, label: "Results", href: "/dashboard/student/results" },
        { icon: <Building2 className="h-4 w-4" />, label: "Eligible Companies", href: "/dashboard/student/companies" },
        { icon: <BarChart3 className="h-4 w-4" />, label: "Progress", href: "/dashboard/student/progress" },
      ];
    }
  };

  const navItems = getNavItems(user.role);

  return (
    <div className="min-h-screen bg-muted/40 flex">
      {/* Desktop Sidebar */}
      <aside className="w-64 border-r bg-card hidden md:block p-6">
        <div className="flex flex-col h-full">
          <Logo className="mb-8" />
          
          <nav className="space-y-1.5 flex-1">
            {navItems.map((item, index) => (
              <NavItem 
                key={index} 
                icon={item.icon} 
                label={item.label} 
                href={item.href} 
                active={index === 0} 
              />
            ))}
          </nav>
          
          <div className="border-t pt-4 mt-4">
            <Button 
              variant="outline" 
              className="w-full flex items-center gap-2 justify-start"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </aside>
      
      {/* Mobile Sidebar */}
      <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
        <SheetContent side="left" className="p-0">
          <div className="p-6">
            <Logo className="mb-8" />
            
            <nav className="space-y-1.5">
              {navItems.map((item, index) => (
                <NavItem 
                  key={index} 
                  icon={item.icon} 
                  label={item.label} 
                  href={item.href} 
                  active={index === 0}
                  onClick={() => setMobileNavOpen(false)}
                />
              ))}
            </nav>
            
            <div className="border-t pt-4 mt-4">
              <Button 
                variant="outline" 
                className="w-full flex items-center gap-2 justify-start"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen max-h-screen overflow-hidden">
        {/* Header */}
        <header className="border-b bg-card h-16 px-4 flex items-center justify-between">
          <div className="flex items-center md:hidden">
            <SheetTrigger asChild onClick={() => setMobileNavOpen(true)}>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <Logo className="ml-3" withText={false} />
          </div>
          
          <div className="md:flex items-center gap-4 hidden">
            <h1 className="font-display font-medium">
              Welcome, {user.name}
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block text-sm font-medium">
                    {user.name}
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserIcon className="h-4 w-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        
        {/* Main Content Scroll Area */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
