import React from 'react'
import NewsFeed from '@/components/NewsFeed'
import { Text, View } from 'react-native'
import { Link } from 'expo-router'
function bai1() {
  return (
    <View style={{margin: 20}}>
        
        <Link href={"/"} style={{backgroundColor:"pink", width:100}}>Trang chủ</Link>
        <br />
        <Text>Danh sách tiêu đề bài 1:</Text>
        <NewsFeed></NewsFeed>
    </View>
  )
}

export default bai1
