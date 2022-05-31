import React, {useState} from 'react';
import styles from './UserCardStyles';
import {TouchableOpacity} from 'react-native';
import {Person} from 'types/entity/person';
import {ModalUser} from 'components/user/modal/ModalUser';
import {stringBasedRandomHexColor} from 'helpers/color';
import {CardThumbnail} from 'components/user/card/CardThumbnail';
import {CardContent} from 'components/user/card/CardContent';

interface Props {
  person: Person;
}

export const UserCard: React.FC<Props> = ({person}) => {
  const {name, location, picture} = person;
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const bgColor = stringBasedRandomHexColor(`${name.first} ${name.last}`);

  const openModal = () => {
    setModalVisible(prev => !prev);
  };

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={openModal}>
      <CardThumbnail bgColor={bgColor} imageUri={picture.thumbnail} />

      <CardContent
        title={`${name.title} ${name.first} ${name.last}`}
        subTitle={location.city}
      />

      {modalVisible && (
        <ModalUser
          person={person}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      )}
    </TouchableOpacity>
  );
};
