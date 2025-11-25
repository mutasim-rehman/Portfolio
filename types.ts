export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  year: string;
  image: string;
  tags: string[];
  link: string;
}

export enum Section {
  RECEPTION = 'RECEPTION',
  SCREENING = 'SCREENING',
  MENU = 'MENU',
  RESERVATIONS = 'RESERVATIONS'
}