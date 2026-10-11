export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  deliverable: string;
  codeSnippet?: string;
  estimatedTime: string;
  tags: string[];
}

export interface SkillItem {
  id: string;
  title: string;
  iconName: string;
  summary: string;
  coreConcepts: string[];
  practicalApplication: string;
  codeExample: {
    language: string;
    code: string;
  };
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  benefit: string;
  techStack: string;
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}
