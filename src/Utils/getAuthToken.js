import AsyncStorage from '@react-native-community/async-storage';

export const getAuthToken = async () => {
  let authToken = AsyncStorage.getItem('@authToken');
  return authToken;
};

export const setAuthToken = async (token) => {
  let res = AsyncStorage.setItem('@authToken', token);
  return res;
};
