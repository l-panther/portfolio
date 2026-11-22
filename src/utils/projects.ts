import websites from '../data/websites.json';
import mobile from '../data/mobile.json';

import type { Website } from '../types/website';
import type { Mobile } from '../types/mobile';

export const getAllWebsites = (): Website[] => websites;

const validStatuses = ['development', 'completed'] as const;

/*export const getAllMobile = (): Mobile[] =>
  mobile.map((project) => {
    if (
      project.status !== undefined &&
      !validStatuses.some((status) => status === project.status)
    ) {
      throw new Error(`Invalid mobile status for ${project.slug}`);
    }

    return {
      ...project,
      status: project.status as Mobile['status']
    };
  });*/

export const getAllProjects = (): (Website | Mobile)[] => [
  ...getAllWebsites(),
  // ...getAllMobile(),
];