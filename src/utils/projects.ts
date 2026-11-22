import websites from '../data/websites.json';
import mobile from '../data/mobile.json';

import type { Website } from '../types/website';
import type { Mobile } from '../types/mobile';

// Website projects
export const getAllWebsites = (): Website[] => websites;

// Mobile projects
export const getAllMobile = (): Mobile[] => {
  const projects = mobile as Mobile[];

  return projects.map((project) => {
    if (
      project.status !== undefined &&
      project.status !== 'development' &&
      project.status !== 'completed'
    ) {
      throw new Error(
        `Invalid mobile status for ${project.slug}`
      );
    }

    return project;
  });
};

// All projects
export const getAllProjects = (): (Website | Mobile)[] => [
  ...getAllWebsites(),
  ...getAllMobile()
];
