import AsyncStorage from '@react-native-async-storage/async-storage';

//write into local storage

const storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log("Error from store data");
        throw Error(error);
    }
  };


//read local data

  const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch (e) {
        console.log("error in get data function");
        throw Error(error);
    }
  };

  export {getData, storeData}