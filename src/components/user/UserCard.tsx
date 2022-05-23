import React from 'react';
import styles from './UserCardStyles';
import { Image, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { PersonName } from '../../types/entity/personName';
import { PersonPicture } from '../../types/entity/personPicture';


const { width, height } = Dimensions.get('screen');

interface Props {
    personName: PersonName;
    // personImage:PersonPicture
}

export const UserCard: React.FC<Props> = ({ personName,
    // personImage
 }) => {
    const { title, first, last, } = personName;
    // const {thumbnail}=personImage;
    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        return `#${randomColor}`;
      };


    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={()=>{}}>
            <View style={[styles.viewImag,{backgroundColor:generateColor()}]}>
                {/* <Image style={styles.image} source={{uri: thumbnail}} /> */}
            </View>
            <View style={styles.details}>
                <Text style={styles.fullName}>{first} {last}</Text>
                <Text style={styles.city}>{title}</Text>
            </View>


        </TouchableOpacity>
    );
};