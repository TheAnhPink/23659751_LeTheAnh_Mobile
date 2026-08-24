import React from 'react'
import { Text, View } from 'react-native'

type MyType={
    id: string, 
    title: string
}

function TodoList({props}:{props:MyType[]}) {
  return (
    <View>
        {props.map((item)=>{
            return (
                <View key={item.id}>
                    <Text>id: {item.id}, title: {item.title}</Text>
                </View>
            )
        })}
    </View>
  )
}

export default TodoList
