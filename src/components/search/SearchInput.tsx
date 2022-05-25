import React, { useState, useCallback } from 'react';
import styles from './SearchInputStyles';
import { TextInput, View, Dimensions } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/FontAwesome';
import { useGetUserList } from '../../hooks/useGetUserList';
import { UsersParams } from 'types/api/users';
import { useUsersContext, useUsersContextSetState } from 'context/GlobalStateUsers';



interface Props { }

export const SearchInput: React.FC<Props> = () => {
    const [searchName, setSearchName] = useState<string>('');
    const getUser = useUsersContext();
    const setUsers = useUsersContextSetState();


    const onChangeText = useCallback(
        (text: string) => {
            setSearchName(text);
        },
        [searchName],
    );


    const onPressSearch = () => {
        //  useCallback(() => {
        console.log('searchName', searchName);
        if (searchName) {
            const newData = getUser.filter((item) => {
                const itemData = (item.name.first).toLowerCase();
                const textData = searchName.toLowerCase();
                //  return itemData.includes(textData);
                return itemData.indexOf(textData) > -1;
            });
            setUsers(newData);
        } else {
          //  setUsers(prev => [...prev])
            console.log('no items');
        }
        console.log('names', getUser);

        ;
        // [searchName]
    }




    return (
        <View style={styles.cardSearch} >
            <MaterialIcon
                name="search"
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