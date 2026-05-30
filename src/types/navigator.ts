export interface NavTopic {
  id: string;
  title: string;
  description: string;
  category: 'brewing' | 'water' | 'roasting' | 'business' | 'sensory' | 'espresso';
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  learningTimeMinutes: number;
  prerequisites: string[]; // Topic IDs
  relatedTopics: string[]; // Topic IDs
  careerRelevance: string;
  resources: NavResource[];
  popularityScore: number;
  outcomes: string[];
}

export interface NavResource {
  title: string;
  type: 'Course' | 'Article' | 'Formula' | 'SOP' | 'Guide';
  link: string;
}

export interface NavQuestion {
  id: string;
  text: string;
  options: NavOption[];
}

export interface NavOption {
  id: string;
  text: string;
  tagsWeight: Record<string, number>;
  difficultyPreference?: 'Beginner' | 'Intermediate' | 'Advanced';
  nextQuestionId?: string; // If undefined, this option leads to the end of the wizard
}
