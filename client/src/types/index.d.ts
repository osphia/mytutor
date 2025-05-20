export interface User {
  id: number;
  username: string;
  email: string;
}

export interface Subject {
  id: number;
  name: string;
}

export interface Topic {
  id: number;
  name: string;
  recommended_days: number;
}

export interface StudyPlanEntry {
  id: number;
  topic_id: number;
  scheduled_date: string;
  completed: boolean;
}