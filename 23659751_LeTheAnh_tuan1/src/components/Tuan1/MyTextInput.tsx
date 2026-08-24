import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

function MyTextInput() {
    const [dlieu, setDlieu]= useState("")
  return (
    <View>
      <TextInput 
      // nó tự truyền text vô hàm setDlieu
      onChangeText={setDlieu}
      // giống với dòng dưới này
      // onChangeText={(text)=>{setDlieu(text)}} 
      value={dlieu} 
      style={{borderColor: "black", borderWidth:1}}
      ></TextInput>
      <Text>Chiều dài chuỗi: {dlieu.length}</Text>
    </View>
  )
}

export default MyTextInput
