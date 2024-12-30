import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '../navigators/AuthNavigator';
import AuthInput from '../components/AuthInput';
import {useAuth} from '../hooks/useAuth';

type RegisterScreenProps = StackScreenProps<AuthStackParamList, 'Register'>;

export default function RegisterScreen({navigation}: RegisterScreenProps) {
  const {value, handleInputChange} = useAuth({
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <View style={styles.container}>
      <View style={{rowGap: 30}}>
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
        <AuthInput
          value={value.confirmPassword}
          onChangeFn={text => handleInputChange('confirmPassword', text)}
          placeholder="비밀번호 확인"
          isError={!(value.password === value.confirmPassword)}
          errorMsg="비밀번호가 일치하지 않습니다."
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
});
