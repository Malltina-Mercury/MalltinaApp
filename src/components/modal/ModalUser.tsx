import React from 'react';
import styles from './ModalStyles';
import { Image, Text, View, Modal } from 'react-native';
import { Person } from '../../types/entity/person';


interface Props {
    modalVisible: boolean;
    setModalVisible: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    person: Person;
}



export const ModalUser: React.FC<Props> = ({ modalVisible, person, setModalVisible }) => {
    const { email, dob, name, location, picture, nat } = person;

    //   function getFlagEmoji(countryCode:string) {
    //     const codePoints = countryCode.toUpperCase().split('').map(char =>  127397 + char.charCodeAt(0));
    //     return String.fromCodePoint(...codePoints);
    //   }
    //   getFlagEmoji(nat);
    let countryCode = nat;
    const emoji = countryCode.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397));
 
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                console.log("Modal has been closed.");
                setModalVisible(prev => !prev)
            }}
        >
            <View style={styles.cardModal}>
                <View style={styles.viewImage}>
                    <Image style={styles.image} source={{ uri: picture.medium }} />
                </View>

                <Text style={styles.fullName}> {name.first} {name.last}  </Text>
                <Text style={styles.email}>{email}</Text>
                <View style={styles.ViewLocations}>
                    <Text style={[styles.city, { backgroundColor: '#d8b4fe' }]}>{dob.age}</Text>
                    <Text style={[styles.city, { backgroundColor: '#fecaca' }]}>{location.city}</Text>
                    <Text style={[styles.city, { backgroundColor: '#facc15' }]}>  {location.country}: {emoji}</Text>
                </View>

            </View>
        </Modal>
    );
};