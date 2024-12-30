import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '../navigators/AuthNavigator';
import AuthInput from '../components/AuthInput';
import {useAuth} from '../hooks/useAuth';

type LoginScreenProps = StackScreenProps<AuthStackParamList, 'Login'>;

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const {value, handleInputChange} = useAuth({email: '', password: ''});

  return (
    <View style={styles.container}>
      <View style={{rowGap: 15}}>
        <AuthInput
          value={value.email}
          onChangeFn={text => handleInputChange('email', text)}
          placeholder="이메일"
          isError={
            !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
              value.email,
            )
          }
          errorMsg="이메일을 입력해주세요."
        />
        <AuthInput
          value={value.password}
          onChangeFn={text => handleInputChange('password', text)}
          placeholder="비밀번호"
          isError={!/^[a-zA-Z0-9]{4,16}$/.test(value.password)}
          errorMsg="비밀번호는 4~16자 이내로 입력해주세요."
        />
      </View>
      <Button
        title="회원가입"
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  inputBox: {
    width: 320,
    borderWidth: 1,
    borderColor: '#E3E8EE',
    fontSize: 13,
    paddingHorizontal: 15,
    paddingVertical: 13,
  },
});

export default LoginScreen;
