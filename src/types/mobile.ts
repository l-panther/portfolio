export interface MobileFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface MobileScreen {
  title: string;
  image: string;
  description?: string;
}

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

  features: MobileFeature[];
  screens: MobileScreen[];

  link?: string;
  github?: string;
  status?: 'development' | 'completed';
}
