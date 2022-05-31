import React from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {Person} from 'types/entity/person';
import styles from './ModalStyles';
import CloseIcon from 'react-native-vector-icons/FontAwesome';
import PhoneEmailIcon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  modalVisible?: boolean;
  onDismiss?: () => void;
  person: Person;
}

export const ModalUser: React.FC<Props> = ({
  modalVisible = false,
  person,
  onDismiss,
}) => {
  const {email, dob, name, location, picture, nat, phone} = person;

  const emoji =
    nat &&
    nat
      .toUpperCase()
      .replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397));

  return (
    <Modal
      animationType={'fade'}
      transparent
      visible={modalVisible}
      onRequestClose={onDismiss}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.viewModal}
        onPress={onDismiss}>
        <View style={styles.cardModal}>
          <View style={styles.iconClose}>
            <CloseIcon name="close" size={35} color="red" onPress={onDismiss} />
          </View>

          <View style={styles.viewImage}>
            <Image style={styles.image} source={{uri: picture?.medium}} />
          </View>

          <Text style={styles.fullName}>
            {name?.title} {name?.first} {name?.last}
          </Text>
          <View style={styles.viewEmail}>
            <PhoneEmailIcon name="email" size={20} color="#fbbf24" />
            <Text style={styles.email}>{email}</Text>
          </View>
          <View style={styles.viewEmail}>
            <PhoneEmailIcon name="smartphone" size={20} color="#fbbf24" />
            <Text style={styles.email}>{phone}</Text>
          </View>

          <View style={styles.ViewLocations}>
            <Text
              style={[styles.city, {borderColor: '#d946ef', color: '#d946ef'}]}>
              {' '}
              {emoji} {location?.country}
            </Text>
            <Text
              style={[styles.city, {borderColor: '#0ea5e9', color: '#0ea5e9'}]}>
              {location?.city}
            </Text>
            <Text
              style={[styles.city, {borderColor: '#10b981', color: '#10b981'}]}>
              {dob?.age}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
