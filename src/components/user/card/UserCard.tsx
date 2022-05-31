import React from 'react';
import styles from './UserCardStyles';
import {TouchableOpacity} from 'react-native';
import {Person} from 'types/entity/person';
import {stringBasedRandomHexColor} from 'helpers/color';
import {CardThumbnail} from 'components/user/card/CardThumbnail';
import {CardContent} from 'components/user/card/CardContent';
import {useUsersContext} from 'context/UsersContextProvider';

interface Props {
  person: Person;
}

export const UserCard: React.FC<Props> = ({person}) => {
  const {name, location, picture} = person;
  const [, setUserContexts] = useUsersContext();
  const bgColor = stringBasedRandomHexColor(`${name?.first} ${name?.last}`);

  const openModal = () => {
    setUserContexts(prevState => {
      const nextState = {...prevState};
      nextState.selectedUser = person;
      nextState.showSelectedUserModal = true;
      return nextState;
    });
  };

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={openModal}>
      <CardThumbnail bgColor={bgColor} imageUri={picture?.thumbnail || ''} />

      <CardContent
        title={`${name?.title} ${name?.first} ${name?.last}`}
        subTitle={`${location?.city}, ${location?.country}`}
      />
    </TouchableOpacity>
  );
};
