import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {getData} from '../utils/Services'
import { useRouter } from 'expo-router'

const index = () => {
  const router = useRouter();
  const checkUserAuth = async() =>{
        const result = await getData('login');
        if (!result){
          router.replace('./auth');
        }
        console.log("Auth result: ",result); 
  }

  useEffect(()=>{
    checkUserAuth()
  }, [])
  return (
    <>
    
    <SafeAreaView className="bg-primary h-full flex-1">
        <View className="flex-1 items-center justify-center">
        <Text className="mx-auto text-center text-white text-4xl font-pextrabold">moneyMonk</Text>
        </View>
    </SafeAreaView>
    
    </>
  )
}

export default index