export interface Variable {
  symbol: string;
  name: string;
  unit: string;
  notes?: string;
}

export interface Example {
  description: string;
  inputs: Record<string, number>;
  output: number;
  explanation?: string;
}

export interface Formula {
  id: string;
  name: string;
  category: 'brewing' | 'water' | 'roasting' | 'business' | 'sensory';
  equation: string;
  variables: Variable[];
  standardRanges?: Record<string, string>;
  examples: Example[];
  sources: string[];
  description?: string;
  inDepth?: string;
}

export interface Calculation {
  id: string;
  formulaId: string;
  inputs: Record<string, number>;
  result: number;
  timestamp: number;
}

export interface KnowledgeModule {
  id: string;
  title: string;
  category: string;
  content: string;
  order: number;
}

export interface ContentPage {
  title: string;
  content: string;
}

export interface LabSOP {
  id: string;
  title: string;
  category: 'brewing' | 'espresso' | 'water' | 'roasting' | 'sensory';
  objective: string;
  equipment: string[];
  variables: string[];
  procedure: string[];
  analysis: string;
}
