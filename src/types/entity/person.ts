import {PersonLocation, PersonName, PersonLogin, PersonPicture} from 'types/index';

export interface Person {
  gender?: 'male' | 'female';
  name?: PersonName;
  location?: PersonLocation;
  email?: string;
  login?: PersonLogin;
  dob?: {
    date?: string;
    age?: number;
  };
  registered?: {
    date?: string;
    age?: number;
  };
  phone?: string;
  cell?: string;
  id?: {
    name?: string;
    value?: string;
  };
  picture?: PersonPicture;
  nat?: string;
}
