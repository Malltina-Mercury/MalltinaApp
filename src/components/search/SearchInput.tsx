import React, { useCallback, useEffect, useState } from 'react';
import styles from './SearchInputStyles';
import { TextInput, View, Dimensions } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/FontAwesome';
import { useSearchContext } from 'context/SearchContextProvider';
import { useUsersContext } from 'context/UsersContextProvider';
const { height } = Dimensions.get('screen');

interface Props { }

export const SearchInput: React.FC<Props> = () => {
  // const [searchName, setSearchName] = useState<string>('');
  const [getUser, setUsers] = useSearchContext();
  const [{ users: cacheUsers }] = useUsersContext();


  useEffect(() => {
    onPressSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [searchName]);
  }, [getUser.query]);

  const onChangeText = (text: string) => {
    // setSearchName(text);
    setUsers({ query: text })
    // debounceSearch()
  };

  // const debounce = (func: () => {}, delay: number) => {
  //   let timeOutId: ReturnType<typeof setTimeout>;
  //   return () => {
  //     if (timeOutId) clearTimeout(timeOutId);
  //     timeOutId = setTimeout(() => {
  //       // func.apply(null,args);
  //       func();
  //     }, delay);
  //   }
  // }


  const onPressSearch = useCallback(() => {
    console.log('searchName', getUser.query);
    if (getUser.query) {
      const newData = cacheUsers?.filter(item => {
        const itemData = (item.name.first + item.name.last).toLowerCase();
        const textData = getUser?.query?.replace(/\s/g, '').toLowerCase();
        if (textData) return itemData.indexOf(textData) > -1;
      });
      console.log('newData', newData);
      if (newData) {
        setUsers({ filteredUsers: newData });

      } else {
        setUsers({ filteredUsers: cacheUsers });

      }
    } else {
      setUsers({ filteredUsers: cacheUsers });

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUser.query]);

  // const debounceSearch = debounce(() => onPressSearch, 500)


  return (
    <View style={styles.cardSearch}>
      <MaterialIcon
        name="search"
        size={height / 23}
        color="#fbbf24"
        onPress={onPressSearch}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Search Name"
        underlineColorAndroid="transparent"
        value={getUser.query}
        onChangeText={onChangeText}
        onSubmitEditing={onPressSearch}
      />
    </View>
  );
};
