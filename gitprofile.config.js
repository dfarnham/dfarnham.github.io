// gitprofile.config.js

const config = {
  github: {
    username: 'dfarnham', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['num','nalgebra','rustc-dev-guide','dfarnham.github.io','ReverseLinkedList','scripts'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'davefarnham',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    website: 'dfarnham.github.io',
    phone: '',
    email: 'dave.farnham@icloud.com',
  },
  resume: {
    // fileUrl: 'resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Rust',
    'Java',
    'Groovy',
    'Perl',
    'Ragel',
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'Smile',
    'Lex/Yacc',
    'C/C++',
    'R',
    'Git',
    'Docker',
    'Ansible',
    'MySQL',
    'PostgreSQL',
    'Linux',
  ],
  experiences: [
    {
      company: 'Laboratory for Atmospheric and Space Physics',
      position: 'Operations Software Developer',
      from: 'May 2022',
      to: 'Present',
      companyLink: 'https://lasp.colorado.edu',
    },
    {
      company: 'Pearson R&D, Cognitive Computing AI Solutions',
      position: 'Data Scientist / R&D',
      from: 'August 2018',
      to: 'December 2021',
    },
    {
      company: 'Parallel Consulting, LLC',
      position: 'Data Scientist / R&D Architect',
      from: '2014',
      to: 'Present',
    },
    {
      company: 'Oracle Corporation',
      position: 'Data Scientist / R&D',
      from: '2012',
      to: '2018',
    },
  ],
  education: [
    {
      institution: 'Colorado State University',
      degree: 'Computer Science & Mathematics',
      from: '',
      to: '',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'dfarnham', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
