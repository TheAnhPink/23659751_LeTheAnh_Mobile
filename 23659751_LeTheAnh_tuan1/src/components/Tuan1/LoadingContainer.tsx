import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

type MyType={
    isLoading: boolean,
    // kiểu dl nào có thể hiện ra trên màn hình thì có thể truyền vào
    children: React.ReactNode
}

function LoadingContainer({isLoading, children}: MyType) {
  return (
    <View>
      {isLoading? <ActivityIndicator/>: <Text>{children}</Text>}
    </View>
  )
}

export default LoadingContainer
