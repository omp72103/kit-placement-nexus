
export type UserRole = 'admin' | 'faculty' | 'student';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
}

export interface Student {
  id: string;
  prn: string;
  rollNo: string;
  name: string;
  email: string;
  phone: string;
  branch: Branch;
  year: Year;
  cgpa: number;
  hasBacklogs: boolean;
  backlogs?: number;
  semesterResults: SemesterResult[];
}

export interface SemesterResult {
  semester: number;
  sgpa: number;
  year: string;
  subjects: SubjectResult[];
}

export interface SubjectResult {
  code: string;
  name: string;
  credits: number;
  grade: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  website: string;
  location: string;
  eligibilityCriteria: EligibilityCriteria;
  openPositions: Position[];
  visitDate?: string;
}

export interface Position {
  title: string;
  description: string;
  salary: string;
  openings: number;
}

export interface EligibilityCriteria {
  minCGPA: number;
  allowBacklogs: boolean;
  maxBacklogs?: number;
  eligibleBranches: Branch[];
  eligibleYears: Year[];
  otherRequirements?: string;
}

export type Branch = 
  | 'CSE' 
  | 'CSE-AIML' 
  | 'CSE-DS' 
  | 'ENTC' 
  | 'ELECTRICAL' 
  | 'BIOTECH' 
  | 'MECHANICAL' 
  | 'CIVIL' 
  | 'CIVIL-ENV' 
  | 'ETC';

export type Year = 'Third Year' | 'Final Year';

export interface DashboardStat {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  change?: {
    value: number;
    trend: 'up' | 'down' | 'neutral';
  };
}
