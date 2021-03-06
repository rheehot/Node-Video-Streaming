export interface Stat {
  path: string;
  name: string;
  size: string;
}

export interface Subtitle {
  url: string;
  language: string;
}

export interface SMICue {
  startTime: number;
  endTime: number;
  languages: {[lan: string]: string};
}

export interface User {
  name: string;
  password: string;
  expiresIn: string;
}
