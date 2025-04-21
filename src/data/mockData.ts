
import { Student, Company, User, Branch } from '@/lib/types';

export const mockUsers: User[] = [
  {
    id: 'admin1',
    name: 'Mr. Amit Sarkar',
    email: 'tpo@kit.ac.in',
    role: 'admin',
  },
  {
    id: 'faculty1',
    name: 'Dr. Rajesh Patil',
    email: 'rajesh.patil@kit.ac.in',
    role: 'faculty',
    department: 'CSE',
  },
  {
    id: 'faculty2',
    name: 'Prof. Sneha Deshmukh',
    email: 'sneha.deshmukh@kit.ac.in',
    role: 'faculty',
    department: 'ENTC',
  },
  {
    id: 'student1',
    name: 'Rahul Sharma',
    email: 'rahul.s@kit.ac.in',
    role: 'student',
    department: 'CSE',
  },
  {
    id: 'student2',
    name: 'Priya Patil',
    email: 'priya.p@kit.ac.in',
    role: 'student',
    department: 'CSE-AIML',
  }
];

export const mockStudents: Student[] = [
  {
    id: 'student1',
    prn: '2020BTECS00123',
    rollNo: 'CS123',
    name: 'Rahul Sharma',
    email: 'rahul.s@kit.ac.in',
    phone: '9876543210',
    branch: 'CSE',
    year: 'Final Year',
    cgpa: 8.76,
    hasBacklogs: false,
    semesterResults: [
      {
        semester: 1,
        sgpa: 8.6,
        year: '2020-21',
        subjects: [
          { code: 'CS101', name: 'Introduction to Programming', credits: 4, grade: 'A' },
          { code: 'MA101', name: 'Engineering Mathematics I', credits: 4, grade: 'B+' },
        ]
      },
      {
        semester: 2,
        sgpa: 8.9,
        year: '2020-21',
        subjects: [
          { code: 'CS102', name: 'Data Structures', credits: 4, grade: 'A' },
          { code: 'MA102', name: 'Engineering Mathematics II', credits: 4, grade: 'A-' },
        ]
      }
    ]
  },
  {
    id: 'student2',
    prn: '2020BTECS00456',
    rollNo: 'CS456',
    name: 'Priya Patil',
    email: 'priya.p@kit.ac.in',
    phone: '9876543211',
    branch: 'CSE-AIML',
    year: 'Final Year',
    cgpa: 9.12,
    hasBacklogs: false,
    semesterResults: [
      {
        semester: 1,
        sgpa: 9.2,
        year: '2020-21',
        subjects: [
          { code: 'CS101', name: 'Introduction to Programming', credits: 4, grade: 'A' },
          { code: 'MA101', name: 'Engineering Mathematics I', credits: 4, grade: 'A' },
        ]
      },
      {
        semester: 2,
        sgpa: 9.0,
        year: '2020-21',
        subjects: [
          { code: 'CS102', name: 'Data Structures', credits: 4, grade: 'A' },
          { code: 'MA102', name: 'Engineering Mathematics II', credits: 4, grade: 'A' },
        ]
      }
    ]
  },
  {
    id: 'student3',
    prn: '2020BTECT00789',
    rollNo: 'ET789',
    name: 'Amit Kumar',
    email: 'amit.k@kit.ac.in',
    phone: '9876543212',
    branch: 'ENTC',
    year: 'Final Year',
    cgpa: 7.85,
    hasBacklogs: true,
    backlogs: 1,
    semesterResults: [
      {
        semester: 1,
        sgpa: 7.2,
        year: '2020-21',
        subjects: [
          { code: 'EC101', name: 'Basic Electronics', credits: 4, grade: 'B' },
          { code: 'MA101', name: 'Engineering Mathematics I', credits: 4, grade: 'B+' },
        ]
      },
      {
        semester: 2,
        sgpa: 7.5,
        year: '2020-21',
        subjects: [
          { code: 'EC102', name: 'Digital Electronics', credits: 4, grade: 'F' },
          { code: 'MA102', name: 'Engineering Mathematics II', credits: 4, grade: 'B' },
        ]
      }
    ]
  },
  {
    id: 'student4',
    prn: '2021BTECS00321',
    rollNo: 'CS321',
    name: 'Neha Sharma',
    email: 'neha.s@kit.ac.in',
    phone: '9876543213',
    branch: 'CSE-DS',
    year: 'Third Year',
    cgpa: 8.32,
    hasBacklogs: false,
    semesterResults: [
      {
        semester: 1,
        sgpa: 8.1,
        year: '2021-22',
        subjects: [
          { code: 'CS101', name: 'Introduction to Programming', credits: 4, grade: 'A-' },
          { code: 'MA101', name: 'Engineering Mathematics I', credits: 4, grade: 'B+' },
        ]
      },
      {
        semester: 2,
        sgpa: 8.5,
        year: '2021-22',
        subjects: [
          { code: 'CS102', name: 'Data Structures', credits: 4, grade: 'A' },
          { code: 'MA102', name: 'Engineering Mathematics II', credits: 4, grade: 'B+' },
        ]
      }
    ]
  }
];

export const mockCompanies: Company[] = [
  {
    id: 'company1',
    name: 'TCS',
    description: 'Tata Consultancy Services is an Indian multinational information technology services and consulting company.',
    website: 'https://www.tcs.com',
    location: 'Pan India',
    eligibilityCriteria: {
      minCGPA: 6.0,
      allowBacklogs: true,
      maxBacklogs: 2,
      eligibleBranches: ['CSE', 'CSE-AIML', 'CSE-DS', 'ENTC', 'ETC'],
      eligibleYears: ['Final Year'],
      otherRequirements: 'Good communication skills'
    },
    openPositions: [
      {
        title: 'Software Engineer',
        description: 'Entry-level software development role',
        salary: '3.6 LPA',
        openings: 100
      }
    ],
    visitDate: '2023-08-15'
  },
  {
    id: 'company2',
    name: 'Infosys',
    description: 'Infosys is a global leader in next-generation digital services and consulting.',
    website: 'https://www.infosys.com',
    location: 'Pune, Bangalore',
    eligibilityCriteria: {
      minCGPA: 6.5,
      allowBacklogs: true,
      maxBacklogs: 1,
      eligibleBranches: ['CSE', 'CSE-AIML', 'CSE-DS', 'ENTC', 'ETC', 'ELECTRICAL'],
      eligibleYears: ['Final Year'],
      otherRequirements: 'Good problem-solving skills'
    },
    openPositions: [
      {
        title: 'Systems Engineer',
        description: 'Entry-level IT role',
        salary: '3.8 LPA',
        openings: 50
      }
    ],
    visitDate: '2023-08-22'
  },
  {
    id: 'company3',
    name: 'Google',
    description: 'Google is a multinational technology company specializing in Internet-related services and products.',
    website: 'https://www.google.com',
    location: 'Bangalore, Hyderabad',
    eligibilityCriteria: {
      minCGPA: 8.5,
      allowBacklogs: false,
      eligibleBranches: ['CSE', 'CSE-AIML', 'CSE-DS'],
      eligibleYears: ['Final Year'],
      otherRequirements: 'Strong programming skills, Data Structures & Algorithms'
    },
    openPositions: [
      {
        title: 'Software Engineer',
        description: 'Development role in Google Cloud team',
        salary: '25 LPA',
        openings: 10
      }
    ],
    visitDate: '2023-09-05'
  },
  {
    id: 'company4',
    name: 'Persistent Systems',
    description: 'Persistent Systems is an Indian technology services company.',
    website: 'https://www.persistent.com',
    location: 'Pune, Nagpur',
    eligibilityCriteria: {
      minCGPA: 7.0,
      allowBacklogs: false,
      eligibleBranches: ['CSE', 'CSE-AIML', 'CSE-DS', 'ENTC', 'ETC'],
      eligibleYears: ['Final Year', 'Third Year'],
      otherRequirements: 'Good coding skills'
    },
    openPositions: [
      {
        title: 'Software Engineer',
        description: 'Development role',
        salary: '7.5 LPA',
        openings: 25
      },
      {
        title: 'Software Engineering Intern',
        description: '6-month internship with PPO',
        salary: '25K per month',
        openings: 15
      }
    ],
    visitDate: '2023-09-15'
  }
];

export const getEligibleCompaniesForStudent = (student: Student): Company[] => {
  return mockCompanies.filter(company => {
    const criteria = company.eligibilityCriteria;
    
    // Check CGPA
    if (student.cgpa < criteria.minCGPA) return false;
    
    // Check backlogs
    if (!criteria.allowBacklogs && student.hasBacklogs) return false;
    if (criteria.allowBacklogs && criteria.maxBacklogs !== undefined && 
        student.hasBacklogs && student.backlogs && student.backlogs > criteria.maxBacklogs) return false;
    
    // Check branch
    if (!criteria.eligibleBranches.includes(student.branch)) return false;
    
    // Check year
    if (!criteria.eligibleYears.includes(student.year)) return false;
    
    return true;
  });
};

export const getEligibleStudentsForCompany = (company: Company): Student[] => {
  return mockStudents.filter(student => {
    const criteria = company.eligibilityCriteria;
    
    // Check CGPA
    if (student.cgpa < criteria.minCGPA) return false;
    
    // Check backlogs
    if (!criteria.allowBacklogs && student.hasBacklogs) return false;
    if (criteria.allowBacklogs && criteria.maxBacklogs !== undefined && 
        student.hasBacklogs && student.backlogs && student.backlogs > criteria.maxBacklogs) return false;
    
    // Check branch
    if (!criteria.eligibleBranches.includes(student.branch)) return false;
    
    // Check year
    if (!criteria.eligibleYears.includes(student.year)) return false;
    
    return true;
  });
};

export const branchList: Branch[] = [
  'CSE',
  'CSE-AIML',
  'CSE-DS',
  'ENTC',
  'ELECTRICAL',
  'BIOTECH',
  'MECHANICAL',
  'CIVIL',
  'CIVIL-ENV',
  'ETC'
];
