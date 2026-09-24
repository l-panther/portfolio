export type DesignPoint = {
  title: string;
  text: string;
};

export type DesignSvg =
  | 'gallery'
  | 'health'
  | 'academy'
  | 'hairdresser'
  | 'marketing'
  | 'windowcleaner';

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  image: string;
  description: string;
  statement: string;
  problem: string[];
  solution: string[];
  design: string[];
  designPoints: DesignPoint[];

  // SVG illustration for the Design section
  designSvg: DesignSvg;

  development: string[];
  technologies: string[];
  outcome: string[];
  link: string;
  github?: string | null;
  delay: string;
};