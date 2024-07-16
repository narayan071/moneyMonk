import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import { useRouter } from 'expo-router';
import CustomButton from '../../components/CustomButton';

const Index = () => {
  const router = useRouter();
  
  return (
    <SafeAreaView className="h-full flex-1 bg-primary">
      <View className="flex-1 items-center justify-center mt-[-60]">
        <Image
          source={images.bg}
          resizeMode="contain"
          className="h-80 w-80" 
        />
      </View>
      <View className="bg-gray-500 flex-1 items-center justify-start mt-[-75] rounded-t-3xl">
        <Text className="font-pbold text-3xl mt-5 mx-3 text-white text-center">moneyMonk</Text>
        <Text className="font-psemibold text-2xl mx-3 text-white text-center">your very own money manager</Text>
        <Text className="text-white text-center font-pregular text-base mt-3">because your expenses deserve planning</Text>
        <CustomButton
            title="Login/Signup"
            textStyles={"text-white"}
            containerStyles={"mt-12 "}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
