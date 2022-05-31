import React, {useCallback, useEffect, useState} from 'react';
import styles from './SearchInputStyles';
import {Dimensions, TextInput, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSearchContext} from 'context/SearchContextProvider';
import {useUsersContext} from 'context/UsersContextProvider';

const {height} = Dimensions.get('screen');

interface Props {}

export const SearchInput: React.FC<Props> = () => {
  const [searchName, setSearchName] = useState<string>('');
  const [getUser, setUsers] = useSearchContext();
  const [{users: cacheUsers}] = useUsersContext();

  useEffect(() => {
    onPressSearch();
  }, [searchName]);

  const onChangeText = (text: string) => {
    setSearchName(text);
    setUsers(prev => {
      const newState = prev;
      newState.filteredUsers = [...(prev.filteredUsers || [])];
      newState.query = text;
      return newState;
    });
    debounceSearch();
  };

  const debounce = (func: () => {}, delay: number) => {
    let timeOutId: ReturnType<typeof setTimeout>;
    return () => {
      if (timeOutId) {
        clearTimeout(timeOutId);
      }
      timeOutId = setTimeout(() => {
        // func.apply(null,args);
        func();
      }, delay);
    };
  };

  const onPressSearch = useCallback(() => {
    if (searchName) {
      const newData = cacheUsers?.filter(item => {
        const itemData = (item.name.first + item.name.last).toLowerCase();
        const textData = searchName.replace(/\s/g, '').toLowerCase();
        // if (textData)
        return itemData.indexOf(textData) > -1;
      });
      if (newData) {
        setUsers({filteredUsers: newData});
      } else {
        setUsers({filteredUsers: cacheUsers});
      }
    } else {
      setUsers({filteredUsers: cacheUsers});
    }
  }, [searchName]);

  const debounceSearch = debounce(() => onPressSearch, 500);

  return (
    <View style={styles.cardSearch}>
      <MaterialIcon
        name="magnify"
        size={height / 23}
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
