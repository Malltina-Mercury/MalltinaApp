import React, { useState, useCallback } from 'react';
import styles from './SearchInputStyles';
import { TextInput, View, Dimensions } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('screen');

interface Props { }

export const SearchInput: React.FC<Props> = () => {
    const [searchName, setSearchName] = useState<string>('');
    // const [users, setUsers] = useState<any>([]);//transfer to useContext

    const onChangeText = useCallback(
        (text: string) => {
            setSearchName(text);
        },
        [searchName],
    );
    const onPressSearch = useCallback(() => {

        console.log('searchName', searchName);

        // if (searchName) {
        //     const newData = users.filter((item: {}) => {
        //         const itemData = item.name.toLowerCase();
        //         const textData = searchName.toLowerCase();
        //         //  return itemData.includes(textData);
        //         return itemData.indexOf(textData) > -1;
        //     });
        //     setUsers(newData);

        // } else {
        //     console.log('no items');
        // }
        // }



    }, [searchName]);
    return (
        <View style={styles.cardSearch} >
            <MaterialIcon
                name="magnify"
                size={32}
                color="#fbbf24"
                onPress={onPressSearch}
            />
            <TextInput

                style={styles.inputText}
                placeholder="Search Name"
                underlineColorAndroid="transparent"
                value={searchName}
                onChangeText={onChangeText}
                onSubmitEditing={onPressSearch}
            />
        </View>
    );
};