import React from 'react'
import { View } from 'react-native'
import UserProfileDetail from '@/components/UserProfileDetail'
import { Link } from 'expo-router'
function bai2() {
  return (
    <View>
      <Link href={"/"} style={{backgroundColor:"pink", width:100, borderColor: "black", borderWidth:1}}>
        Trang chủ</Link>
      <br />
      <UserProfileDetail/>
    </View>
  )
}

export default bai2
