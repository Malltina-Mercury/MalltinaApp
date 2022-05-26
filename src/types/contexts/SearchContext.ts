import {Person} from 'types/entity/person';

export interface SearchContext {
  query?: string;
  filteredUsers?: Person[];
}
