import React from 'react'
import { View } from 'react-native'
import ErrorHandling from '@/components/ErrorHandling'
import { Link } from 'expo-router'

function bai3() {
  return (
    <View>
        <Link href={"/"} style={{backgroundColor:"pink", width:100, borderColor: "black", borderWidth:1}}>
        Trang chủ
        </Link>
        <br />
      <ErrorHandling></ErrorHandling>
    </View>
  )
}

export default bai3
