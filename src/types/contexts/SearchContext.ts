import {Person} from 'types/index';

export interface SearchContext {
  query?: string;
  filteredUsers?: Person[];
}
