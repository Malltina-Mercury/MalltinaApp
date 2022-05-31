import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {Person} from 'types/entity/person';
import styles from './ModalStyles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getFlagEmoji} from 'helpers/string';
import {CardThumbnail} from 'components/user/card/CardThumbnail';
import {stringBasedRandomHexColor} from 'helpers/color';
import {colors} from 'styles/colors';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

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
  const emoji = nat && getFlagEmoji(nat);
  const bgColor = stringBasedRandomHexColor(`${name?.first} ${name?.last}`);
  const dateOfBirth = new Date(dob?.date || '');

  return (
    <Modal
      animationType={'fade'}
      transparent
      visible={modalVisible}
      onRequestClose={onDismiss}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.overlay}
        onPress={onDismiss}>
        <View style={styles.container}>
          <MaterialIcon
            style={styles.dismissIcon}
            name="close"
            onPress={onDismiss}
          />

          <CardThumbnail
            size={128}
            border={6}
            bgColor={bgColor}
            imageUri={picture?.large || ''}
          />

          <Text style={styles.fullName}>
            {name?.title} {name?.first} {name?.last}
          </Text>

          <View style={styles.viewEmail}>
            <MaterialIcon name="email" size={20} color={colors.yellow['500']} />
            <Text style={styles.email}>{email}</Text>
          </View>
          <View style={styles.viewEmail}>
            <MaterialIcon
              name="cellphone"
              size={20}
              color={colors.yellow['500']}
            />
            <Text style={styles.email}>{phone}</Text>
          </View>

          <View style={styles.ViewLocations}>
            <Text
              style={[
                styles.city,
                {
                  borderColor: colors.purple['500'],
                  color: colors.purple['500'],
                },
              ]}>
              {' '}
              {emoji} {location?.country}
            </Text>
            <Text
              style={[
                styles.city,
                {borderColor: colors.sky['500'], color: colors.sky['500']},
              ]}>
              {location?.city}
            </Text>
            {dob?.date && (
              <Text
                style={[
                  styles.city,
                  {
                    borderColor: colors.emerald['500'],
                    color: colors.emerald['500'],
                  },
                ]}>
                {months[dateOfBirth.getMonth()]} {dateOfBirth.getDay()}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
