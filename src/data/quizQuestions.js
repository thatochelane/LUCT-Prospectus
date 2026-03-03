export const quizQuestions = [
  {
    id: 1,
    question: "What type of activities do you enjoy most?",
    options: [
      { id: 'a', text: 'Drawing, designing, and creating visual content', facultyId: '1' }, // Design
      { id: 'b', text: 'Writing, presenting, and communicating ideas', facultyId: '2' }, // Communication
      { id: 'c', text: 'Building, constructing, and designing structures', facultyId: '3' }, // Architecture
      { id: 'd', text: 'Planning, organizing, and managing projects', facultyId: '4' }, // Business
      { id: 'e', text: 'Traveling, event planning, and hospitality', facultyId: '5' }, // Tourism
      { id: 'f', text: 'Coding, problem-solving, and working with computers', facultyId: '6' } // ICT
    ]
  },
  {
    id: 2,
    question: "Which subject did/do you enjoy most in school?",
    options: [
      { id: 'a', text: 'Art, Design, or Creative Studies', facultyId: '1' },
      { id: 'b', text: 'English, Literature, or Media Studies', facultyId: '2' },
      { id: 'c', text: 'Mathematics, Physics, or Technical Drawing', facultyId: '3' },
      { id: 'd', text: 'Business, Economics, or Accounting', facultyId: '4' },
      { id: 'e', text: 'Geography, Tourism, or Home Economics', facultyId: '5' },
      { id: 'f', text: 'Computer Science or Information Technology', facultyId: '6' }
    ]
  },
  {
    id: 3,
    question: "What kind of work environment do you prefer?",
    options: [
      { id: 'a', text: 'Creative studio, design agency, or workshop', facultyId: '1' },
      { id: 'b', text: 'Newsroom, broadcasting studio, or media house', facultyId: '2' },
      { id: 'c', text: 'Architecture firm, construction site, or design office', facultyId: '3' },
      { id: 'd', text: 'Corporate office, boardroom, or business environment', facultyId: '4' },
      { id: 'e', text: 'Hotels, resorts, airports, or event venues', facultyId: '5' },
      { id: 'f', text: 'Tech hub, software company, or IT department', facultyId: '6' }
    ]
  },
  {
    id: 4,
    question: "What's your ideal career goal?",
    options: [
      { id: 'a', text: 'Become a designer, artist, or creative director', facultyId: '1' },
      { id: 'b', text: 'Work in media, journalism, or public relations', facultyId: '2' },
      { id: 'c', text: 'Design buildings or manage construction projects', facultyId: '3' },
      { id: 'd', text: 'Run a business or manage organizations', facultyId: '4' },
      { id: 'e', text: 'Work in tourism, hospitality, or events', facultyId: '5' },
      { id: 'f', text: 'Build software or manage IT systems', facultyId: '6' }
    ]
  }
];

export const facultyRecommendations = {
  '1': {
    name: 'Faculty of Design Innovation',
    icon: ' ',
    description: 'You have a creative mindset! The Faculty of Design Innovation offers programmes in Graphic Design, Fashion Design, and Creative Advertising.',
    courses: ['Diploma in Creative Advertising', 'Diploma in Graphic Design', 'Diploma in Fashion and Apparel Design']
  },
  '2': {
    name: 'Faculty of Communication, Media and Broadcasting',
    icon: ' ',
    description: 'You have a passion for storytelling and communication! Explore programmes in Broadcasting, Journalism, and Public Relations.',
    courses: ['Degree in Professional Communication', 'Degree in Broadcasting & Journalism', 'Diploma in TV and Film Production']
  },
  '3': {
    name: 'Faculty of Architecture and the Built Environment',
    icon: ' ',
    description: 'You have an eye for structure and design! The Faculty of Architecture offers programmes in Architectural Technology.',
    courses: ['Diploma in Architectural Technology']
  },
  '4': {
    name: 'Faculty of Business and Globalization',
    icon: ' ',
    description: 'You have strong leadership and organizational skills! Explore programmes in Business Management, Entrepreneurship, and Marketing.',
    courses: ['Degree in International Business', 'Degree in Entrepreneurship', 'Diploma in Business Management']
  },
  '5': {
    name: 'Faculty of Creativity in Tourism and Hospitality',
    icon: ' ',
    description: 'You love travel and hospitality! The Faculty of Tourism offers programmes in Tourism Management, Hotel Management, and Events Management.',
    courses: ['Degree in Tourism Management', 'Diploma in Tourism Management', 'Diploma in Hotel Management']
  },
  '6': {
    name: 'Faculty of Information and Communication Technology',
    icon: ' ',
    description: 'You have a passion for technology! The Faculty of ICT offers programmes in Software Engineering, Business IT, and Information Technology.',
    courses: ['Degree in Software Engineering', 'Degree in Business IT', 'Diploma in Information Technology']
  }
};