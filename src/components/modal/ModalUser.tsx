import React from 'react';
import {Image, Modal, Text, View} from 'react-native';
import {Person} from 'types/entity/person';
import styles from './ModalStyles';

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
  const {email, dob, name, location, picture, nat, phone} = person;

  // let countryCode = nat;
  const emoji = nat
    .toUpperCase()
    .replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397));

  return (
    <Modal
      animationType={'fade'}
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        console.log('Modal has been closed.');
        setModalVisible(prev => !prev);
      }}>
      <View style={styles.cardModal}>
        <View style={styles.viewImage}>
          <Image style={styles.image} source={{uri: picture.medium}} />
        </View>

        <Text style={styles.fullName}>
          {name.title} {name.first} {name.last}{' '}
        </Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.email}>{phone}</Text>
        <View style={styles.ViewLocations}>
          <Text
            style={[styles.city, {borderColor: '#d946ef', color: '#d946ef'}]}>
            {' '}
            {emoji} {location.country}
          </Text>
          <Text
            style={[styles.city, {borderColor: '#0ea5e9', color: '#0ea5e9'}]}>
            {location.city}
          </Text>
          <Text
            style={[styles.city, {borderColor: '#10b981', color: '#10b981'}]}>
            {dob.age}
          </Text>
        </View>
      </View>
    </Modal>
  );
};
