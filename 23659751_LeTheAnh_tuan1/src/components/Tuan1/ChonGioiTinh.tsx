import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type Gender= "male"| "female"| "other"

function ChonGioiTinh() {

  const [gtinh,setGtinh]= useState<Gender>("male")

  return (
    <View style={{flexDirection:"row", gap: 10}}>
      <Text>Giới tính đã chọn: {gtinh}</Text>
      <Pressable onPress={()=>{setGtinh("male")}} style={styles.nutBam}><Text>Nam</Text></Pressable>
      <Pressable onPress={()=>{setGtinh("female")}} style={styles.nutBam}><Text>Nữ</Text></Pressable>
      <Pressable onPress={()=>{setGtinh("other")}} style={styles.nutBam}><Text>Khác</Text></Pressable>
      {/* <Pressable onPress={()=>{setGtinh("hihi")}}>tên ko có trong Union</Pressable> */}
    </View>
  )
}

const styles= StyleSheet.create({
  nutBam:{
    backgroundColor: "pink",
    borderWidth:1,
    borderColor: "black"
  }
}
)

export default ChonGioiTinh
