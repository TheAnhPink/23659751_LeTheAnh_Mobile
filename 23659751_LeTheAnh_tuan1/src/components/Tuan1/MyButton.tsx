import React from 'react'
import { Pressable, Text, View } from 'react-native'

type MyType={
    label: string,
    onPressHam: ()=> void,
    // dấu "?" để có thể truyền color hoặc ko
    color? : string
}

function MyButton({label, onPressHam, color="blue"}: MyType) {
  return (
    <Pressable style={{backgroundColor:color}}
                onPress={onPressHam}
    >
        <Text>{label}</Text>
    </Pressable>
  )
}

export default MyButton
