import {Person} from 'types/index';

export interface UsersContext {
  users?: Person[];
  latestPageFetched?: number;
  selectedUser?: Person;
  showSelectedUserModal?: boolean;
}
