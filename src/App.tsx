
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import FacultyDashboard from "./pages/dashboard/FacultyDashboard";
import StudentDashboard from "./pages/dashboard/StudentDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Admin routes */}
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/admin/*" element={<AdminDashboard />} />
          
          {/* Faculty routes */}
          <Route path="/dashboard/faculty" element={<FacultyDashboard />} />
          <Route path="/dashboard/faculty/*" element={<FacultyDashboard />} />
          
          {/* Student routes */}
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/student/*" element={<StudentDashboard />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
