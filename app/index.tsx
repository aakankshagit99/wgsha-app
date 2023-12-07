import { Redirect } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

export default function App() {
  return (
    <Redirect href={"/start"} />
    // <Redirect href={"/(auth)/login"} />

  )
}
