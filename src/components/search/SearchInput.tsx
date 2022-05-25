import React, { useState, useCallback } from 'react';
import styles from './SearchInputStyles';
import { TextInput, View, Dimensions } from 'react-native';
 import MaterialIcon from 'react-native-vector-icons/FontAwesome';
 import {useGetUserList} from '../../hooks/useGetUserList';
 import {UsersParams} from 'types/api/users';



interface Props { }

export const SearchInput: React.FC<Props> = () => {
    const [searchName, setSearchName] = useState<string>('');


    const initialParams = {
        page: 2,
        exc: '',
        results: 7,
        seed: 'Maltina'
      }
      const [params, setParams] = useState <UsersParams>(initialParams)
      const [data,isLoaded, error] = useGetUserList(params, [params]);
  const [users, setUsers] = useState<any>([]);//transfer to useContext

    const onChangeText = useCallback(
        (text: string) => {
            setSearchName(text);
        },
        [searchName],
    );


    const onPressSearch = useCallback(() => {
        console.log('searchName', searchName);

        if (searchName) {
            const newData = data?.results.filter((item) => {
                const itemData = (item.name.first).toLowerCase();
                const textData = searchName.toLowerCase();
                //  return itemData.includes(textData);
                return itemData.indexOf(textData) > -1;
            });
            setUsers(newData);

        } else {
            console.log('no items');
        }
        

        console.log('names', users);

    }, [searchName]);
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