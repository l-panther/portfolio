
export interface MobileProject {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  slug: string;

  description: string;
  statement: string;

  problem: string[];
  solution: string[];

  design: string[];

  designPoints: {
    title: string;
    text: string;
  }[];

  development: string[];
  technologies: string[];
  outcome: string[];

  screens?: {
    title: string;
    image: string;
    description?: string;
  }[];

  status?: 'development' | 'completed';

  link?: string | null;
  github?: string | null;
  delay?: string;
}
