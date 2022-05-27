import React from 'react';
import { Image, Modal, Text, View } from 'react-native';
import { Person } from 'types/entity/person';
import styles from './ModalStyles';
import MaterialIcon from 'react-native-vector-icons/FontAwesome';


interface Props {
  modalVisible: boolean;
  setModalVisible: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  person: Person;
}

export const ModalUser: React.FC<Props> = ({
  modalVisible,
  person,
  setModalVisible,
}) => {
  const { email, dob, name, location, picture, nat, phone } = person;


  const emoji = nat.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397));
  const CloseModal = () => {
    setModalVisible(prev => !prev);
  };


  return (
    <Modal
      animationType={'fade'}
      transparent
      visible={modalVisible}
      onRequestClose={CloseModal}>
      <View style={styles.cardModal}>
        <View style={styles.iconClose}>
          <MaterialIcon
          name="close"
          size={35}
          color="red"
          onPress={CloseModal}
        />
        </View>
        
        <View style={styles.viewImage}>
          <Image style={styles.image} source={{ uri: picture.medium }} />
        </View>

        <Text style={styles.fullName}>
          {name.title} {name.first} {name.last}{' '}
        </Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.email}>{phone}</Text>
        <View style={styles.ViewLocations}>
          <Text
            style={[styles.city, { borderColor: '#d946ef', color: '#d946ef' }]}>
            {' '}
            {emoji} {location.country}
          </Text>
          <Text
            style={[styles.city, { borderColor: '#0ea5e9', color: '#0ea5e9' }]}>
            {location.city}
          </Text>
          <Text
            style={[styles.city, { borderColor: '#10b981', color: '#10b981' }]}>
            {dob.age}
          </Text>
        </View>
      </View>
    </Modal>
  );
};
