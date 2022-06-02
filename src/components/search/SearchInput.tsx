import React, {useCallback, useState} from 'react';
import styles from './SearchInputStyles';
import {TextInput, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  onChangeQuery: (query: string) => void;
  onSubmitSearch: (query: string) => void;
}

export const SearchInput: React.FC<Props> = ({
  onChangeQuery,
  onSubmitSearch,
}) => {
  const [query, setQuery] = useState<string>('');

  const onChangeQueryHandler = useCallback(
    (input: string) => {
      setQuery(input);
      onChangeQuery(input);
    },
    [onChangeQuery],
  );

  const onSubmitSearchHandler = useCallback(() => {
    onSubmitSearch(query);
  }, [onSubmitSearch, query]);

  return (
    <View style={styles.container}>
      <MaterialIcon
        name="magnify"
        style={styles.icon}
        onPress={onSubmitSearchHandler}
      />

      <TextInput
        style={styles.input}
        placeholder="Search Name"
        underlineColorAndroid="transparent"
        value={query}
        onChangeText={onChangeQueryHandler}
        onSubmitEditing={onSubmitSearchHandler}
      />
    </View>
  );
};
