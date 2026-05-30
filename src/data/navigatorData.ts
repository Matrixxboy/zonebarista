import { NavTopic, NavQuestion } from '../types/navigator';

export const navTopics: NavTopic[] = [
  {
    id: 't-espresso-basics',
    title: 'Dialing in Espresso',
    description: 'Learn the fundamental variables of espresso extraction: dose, yield, and time. Understand how they interact to balance flavor.',
    category: 'espresso',
    tags: ['espresso', 'extraction', 'dialing-in', 'beginner', 'machine'],
    difficulty: 'Beginner',
    learningTimeMinutes: 30,
    prerequisites: [],
    relatedTopics: ['t-extraction-theory', 't-advanced-espresso'],
    careerRelevance: 'Essential for any barista working in a specialty coffee shop.',
    resources: [
      { title: 'Espresso Brew Ratio Formula', type: 'Formula', link: '/formulas/brew-ratio' },
      { title: 'Basic Espresso Dialing SOP', type: 'SOP', link: '/lab-sops' },
    ],
    popularityScore: 95,
    outcomes: ['Understand dose, yield, time', 'Balance sourness and bitterness', 'Consistently pull good shots'],
  },
  {
    id: 't-extraction-theory',
    title: 'Extraction Theory & Measurement',
    description: 'Dive deep into TDS, Extraction Yield (EY), and how to use a refractometer to measure coffee extraction scientifically.',
    category: 'brewing',
    tags: ['extraction', 'theory', 'tds', 'yield', 'refractometer', 'science'],
    difficulty: 'Intermediate',
    learningTimeMinutes: 60,
    prerequisites: ['t-espresso-basics'],
    relatedTopics: ['t-water-chemistry'],
    careerRelevance: 'Crucial for Head Baristas, Quality Control staff, and Roasters.',
    resources: [
      { title: 'Extraction Yield (EY) Formula', type: 'Formula', link: '/formulas/extraction-yield' },
      { title: 'TDS Conversion Formula', type: 'Formula', link: '/formulas/tds-conversion' },
    ],
    popularityScore: 85,
    outcomes: ['Use a refractometer', 'Calculate Extraction Yield', 'Optimize recipes using data'],
  },
  {
    id: 't-water-chemistry',
    title: 'Water Chemistry for Coffee',
    description: 'Understand the role of calcium, magnesium, and alkalinity in coffee extraction and how to build custom water recipes.',
    category: 'water',
    tags: ['water', 'chemistry', 'science', 'minerals', 'advanced'],
    difficulty: 'Advanced',
    learningTimeMinutes: 120,
    prerequisites: ['t-extraction-theory'],
    relatedTopics: [],
    careerRelevance: 'Advanced knowledge for competitive brewers, lab technicians, and roastery owners.',
    resources: [
      { title: 'General Hardness (GH) Formula', type: 'Formula', link: '/formulas/general-hardness' },
      { title: 'Alkalinity (KH) Formula', type: 'Formula', link: '/formulas/alkalinity' },
    ],
    popularityScore: 70,
    outcomes: ['Understand GH and KH', 'Build custom brewing water', 'Troubleshoot scaling issues'],
  },
  {
    id: 't-roasting-basics',
    title: 'Introduction to Roasting',
    description: 'Learn the phases of roasting, heat transfer principles, and how to read a roast curve.',
    category: 'roasting',
    tags: ['roasting', 'heat', 'curves', 'beginner'],
    difficulty: 'Beginner',
    learningTimeMinutes: 45,
    prerequisites: [],
    relatedTopics: ['t-roast-development'],
    careerRelevance: 'Starting point for aspiring coffee roasters.',
    resources: [
      { title: 'Roast Weight Loss Formula', type: 'Formula', link: '/formulas/weight-loss' },
    ],
    popularityScore: 80,
    outcomes: ['Identify roast phases', 'Understand charge temp & turning point', 'Track rate of rise (RoR)'],
  },
  {
    id: 't-sensory-evaluation',
    title: 'Sensory Evaluation & Cupping',
    description: 'Master the SCA cupping protocol and learn to identify specific flavor notes and defects in coffee.',
    category: 'sensory',
    tags: ['cupping', 'tasting', 'sensory', 'sca'],
    difficulty: 'Beginner',
    learningTimeMinutes: 45,
    prerequisites: [],
    relatedTopics: ['t-extraction-theory'],
    careerRelevance: 'Essential for QC, green buying, and roasters.',
    resources: [
      { title: 'Cupping Protocol SOP', type: 'SOP', link: '/lab-sops' },
    ],
    popularityScore: 90,
    outcomes: ['Set up a standard cupping', 'Score coffee using SCA form', 'Identify common defects'],
  }
];

export const navQuestions: NavQuestion[] = [
  {
    id: 'q-goal',
    text: 'What is your primary goal today?',
    options: [
      {
        id: 'opt-goal-espresso',
        text: 'Improve my espresso and barista skills',
        tagsWeight: { 'espresso': 5, 'extraction': 3 },
        nextQuestionId: 'q-experience-espresso'
      },
      {
        id: 'opt-goal-science',
        text: 'Understand the science (water, extraction)',
        tagsWeight: { 'science': 5, 'theory': 3, 'water': 3 },
        nextQuestionId: 'q-experience-general'
      },
      {
        id: 'opt-goal-roasting',
        text: 'Learn about roasting',
        tagsWeight: { 'roasting': 5 },
        nextQuestionId: 'q-experience-general'
      },
      {
        id: 'opt-goal-sensory',
        text: 'Develop my palate and sensory skills',
        tagsWeight: { 'sensory': 5, 'tasting': 4 },
        nextQuestionId: 'q-experience-general'
      }
    ]
  },
  {
    id: 'q-experience-espresso',
    text: 'What is your current experience level with espresso?',
    options: [
      {
        id: 'opt-exp-esp-beginner',
        text: 'I am just starting out',
        tagsWeight: { 'beginner': 3 },
        difficultyPreference: 'Beginner',
      },
      {
        id: 'opt-exp-esp-inter',
        text: 'I can dial in, but want to get consistent',
        tagsWeight: { 'extraction': 2, 'theory': 2 },
        difficultyPreference: 'Intermediate',
      },
      {
        id: 'opt-exp-esp-adv',
        text: 'I want to optimize recipes with data and tools',
        tagsWeight: { 'science': 3, 'advanced': 3, 'water': 2 },
        difficultyPreference: 'Advanced',
      }
    ]
  },
  {
    id: 'q-experience-general',
    text: 'How deep do you want to go?',
    options: [
      {
        id: 'opt-exp-gen-basic',
        text: 'Just the practical basics',
        tagsWeight: { 'beginner': 3 },
        difficultyPreference: 'Beginner',
      },
      {
        id: 'opt-exp-gen-deep',
        text: 'Deep dive into the theory and math',
        tagsWeight: { 'theory': 4, 'advanced': 2 },
        difficultyPreference: 'Advanced',
      }
    ]
  }
];
