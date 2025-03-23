export interface Screening {
  value: string;
  description?: string;
  day?: string;
  hour?: string;
  room?: string;
}

export interface FilmTechnicalData {
  id: number;
  title: string;
  children: string[];
}

export interface FilmData {
  id: number;
  cover: string;
  origin: string;
  title: string;
  synopsis: string;
  year: number;
  duration: number;
  format: string;
  section: string;
  technicalData: FilmTechnicalData[];
  images: string[];
  screenings: Screening[];
}

export interface MenuProps {
  direction: string;
  textAlign: string;
  color: string;
  width: string;
  responsive: boolean;
}

export interface Jury {
  image: string;
  name: string;
  country: string;
}

export interface Location {
  name: string;
  long: number;
  lat: number;
  direction: string;
}

export interface HorizontalLoopConfig {
  repeat?: number;
  paused?: boolean;
  speed?: number;
  snap?: number | boolean;
  paddingRight?: number;
  reversed?: boolean;
}

export interface New {
  title: string;
  image: string;
  description: string;
  link: string;
}

export interface Section {
  id: number,
  idSection: string,
  title: string;
  films:
  {
    name: string;
    image: string;
    id: number;
  }[]

}
