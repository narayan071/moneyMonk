import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {getData, storeData} from '../../utils/Services'
import { useRouter } from 'expo-router'
import { images } from '../../constants'
const index = () => {
  const router = useRouter();
  const checkUserAuth = async() =>{
        const result = await getData('login');
        if (result === 'false'){
          router.replace('/auth');
        }
        console.log("Auth result: ",result); 
  }

  const handleLogout = async() =>{
    try {
      console.log("logged out")
      storeData('login', 'false');
      router.replace('/auth')
    } catch (error) {
      console.log("error in logout")
      throw Error(error)
    }
  }

  useEffect(()=>{
    checkUserAuth()
  }, [])
  return (
    <>
    
    <SafeAreaView className="bg-primary h-full flex-1">
      <TouchableOpacity
        onPress={
          handleLogout
        }  
      >
          <Image
          source={images.logout} 
          resizeMode='contain'
          className='h-6 w-6 m-3 absolute top-0 right-0'  
        />
      </TouchableOpacity>
        <View className="flex-1 items-center justify-center">
        <Text className="mx-auto text-center text-white text-4xl font-pextrabold">moneyMonk</Text>
        </View>
    </SafeAreaView>
    
    </>
  )
}

export default index