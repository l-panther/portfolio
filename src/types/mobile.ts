export interface MobileProject {
  slug: string;
  title: string;
  image: string;
  description: string;

  overview: string[];
  design: string[];
  development: string[];
  outcome: string[];

  technologies: string[];

  features: {
    title: string;
    description: string;
  }[];

  screens: {
    title: string;
    image: string;
    description?: string;
  }[];

  status?: 'development' | 'completed';
  link?: string;
  github?: string;
}
