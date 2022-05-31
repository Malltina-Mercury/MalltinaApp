import {Person} from 'types/entity/person';

export interface UsersContext {
  users?: Person[];
  latestPageFetched?: number;
  selectedUser?: Person;
  showSelectedUserModal?: boolean;
}
