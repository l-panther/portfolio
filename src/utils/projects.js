import websites from '../data/websites.json';
import mobile from '../data/mobile.json';
import software from '../data/software.json';

export const getAllProjects = () => [
  ...websites,
];