import {PersonLocation} from 'types/entity/personLocation';
import {PersonName} from 'types/entity/personName';
import {PersonLogin} from 'types/entity/personLogin';
import {PersonPicture} from 'types/entity/personPicture';

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
