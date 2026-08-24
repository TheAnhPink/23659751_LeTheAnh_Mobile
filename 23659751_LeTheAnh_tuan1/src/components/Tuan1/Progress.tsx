import React from 'react'
import { Text, View } from 'react-native'

type duLieuProps={
    duLieu: number
}

function Progress({duLieu}:duLieuProps) {
    if(isNaN(duLieu)||duLieu<0||duLieu>100){
        return <Text>Dữ liệu nhập vào phải là số và từ 0 đến 100</Text>
    }
  return (
    <View>
        <Text>Tiến trình: {duLieu}%</Text>
    </View>
  )
}

export default Progress
