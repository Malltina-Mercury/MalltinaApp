import React, { useState, useCallback, useEffect } from 'react';
import styles from './SearchInputStyles';
import { TextInput, View, Dimensions } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/FontAwesome';
import { useUsersContext, useUsersContextSetState } from 'context/GlobalStateUsers';
import { useUsersCacheContext } from 'context/GlobalStateUsersCache';



interface Props { }
export const SearchInput: React.FC<Props> = () => {

    const [searchName, setSearchName] = useState<string>('');
    const getUser = useUsersContext();
    const setUsers = useUsersContextSetState();
  const cacheUsers = useUsersCacheContext();
    // let cacheUsers = [...getUser];

    useEffect(()=>{
        onPressSearch();
    },[searchName]);


    const onChangeText =
        // useCallback(
        (text: string) => {
            setSearchName(text);
            // console.log('searchName in set', searchName);
        }
    // ,[] );


    const onPressSearch = useCallback(() => {
        console.log('searchName', searchName);
        if ( searchName) {
            const newData = cacheUsers.filter((item) => {
                const itemData = (item.name.first+item.name.last).toLowerCase();
                const textData = searchName.replace(/\s/g, '').toLowerCase();
                console.log("textData",textData);
                //  return itemData.includes(textData);
                return itemData.indexOf(textData) > -1;
            });
            console.log('newData', newData);
            if (newData) {
                setUsers(newData);
                console.log('ok items');
                console.log('cacheUsers', cacheUsers);
                console.log('getUser', getUser);
            } else {

                setUsers(cacheUsers);
                console.log('no items');
                console.log('cacheUsers', cacheUsers);
                console.log('getUser', getUser);
            }

        } else {
            setUsers(cacheUsers)
            console.log('empty input Search');
            console.log('cacheUsers', cacheUsers);
            console.log('getUser', getUser);

        }
    }, [searchName])


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