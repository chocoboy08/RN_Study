import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';

export interface AuthInputProps {
  value: string;
  onChangeFn: (text: string) => void;
  placeholder?: string;
  isError: boolean;
  errorMsg: string;
}

export default function AuthInput({
  value,
  onChangeFn,
  placeholder,
  isError,
  errorMsg,
}: AuthInputProps) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <View
      style={[
        styles.inputContainer,
        isError && isEditing && {borderColor: 'red'},
      ]}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeFn}
        placeholder={placeholder}
        secureTextEntry={placeholder !== '이메일'}
        autoCorrect={false}
        autoComplete="off"
        autoCapitalize="none"
        onEndEditing={() => setIsEditing(true)}
      />
      {isError && isEditing && <Text style={styles.errorText}>{errorMsg}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 320,
    borderWidth: 1,
    borderColor: '#E3E8EE',
    paddingHorizontal: 15,
    paddingVertical: 13,
  },
  input: {fontSize: 13, marginBottom: 9},
  errorText: {fontSize: 8, color: '#FF5F5F'},
});
