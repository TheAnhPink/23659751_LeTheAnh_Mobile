import React, { useState } from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'

function Counter() {
    const [count, setCount]= useState<number>(0)
  return (
    <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <Pressable onPress={()=>{count>0? setCount(count-1): setCount(count)}}
                    style={{backgroundColor: "pink",width:100, alignItems: 'center'}}
            >
            <Text>Trừ</Text>
        </Pressable>
        <h2 style={{margin:20}}>{count}</h2>
        <TouchableOpacity onPress={()=>{setCount(count+1)}}
                        style={{backgroundColor: "blue", width:100, alignItems: 'center'}}
            >
            <Text style={{color:"white"}}>Cộng</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Counter
