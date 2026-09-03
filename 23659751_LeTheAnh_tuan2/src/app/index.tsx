import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import NewsFeed from '@/components/NewsFeed'
import { Link } from 'expo-router'
function index() {
  return (
    <ScrollView style={{margin: 20}}>
      <Text>Nhấn để chuyển đến bài:</Text>
      <Link href={"/bai1"} style={styles.link}>Bài 1</Link>
      <br />
      <Link href={"/bai2"} style={styles.link}>Bài 2</Link>

    </ScrollView>
  )
}

const styles= StyleSheet.create({
  link:{backgroundColor:"pink", width:100, borderColor: "black", borderWidth:1}
}
)

export default index
