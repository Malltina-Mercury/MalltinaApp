import React, {useState} from 'react';
import styles from './UserCardStyles';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Person} from 'types/entity/person';
import {ModalUser} from 'components/modal/ModalUser';
import {stringBasedRandomHexColor} from 'helpers/color';

interface Props {
  person: Person;
}

export const UserCard: React.FC<Props> = ({person}) => {
  const {name, location, picture} = person;
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const openModal = () => {
    setModalVisible(prev => !prev);
  };

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={openModal}>
      <View
        style={[
          styles.viewImag,
          {
            backgroundColor: stringBasedRandomHexColor(
              `${name.first} ${name.last}`,
            ),
          },
        ]}>
        <Image style={styles.image} source={{uri: picture.thumbnail}} />
      </View>
      <View style={styles.details}>
        <Text style={styles.fullName}>
          {name.title} {name.first} {name.last}
        </Text>
        <Text style={styles.city}>{location.city}</Text>
      </View>
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
