import { ScrollView, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCard from './components/FlatCard'
import type { StatusBarStyle } from 'react-native';
import Tournaments from './components/Tournaments/Tournaments'

export default function App() {
  // const [upcoming, setUpcoming] = useState(true)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <FlatCard /> */}

      {/* Tournaments section */}
      <Tournaments />

      <View style={{flexDirection: "row"}}>
        <TouchableOpacity style={{width: "50%", alignContent: "center"}}>
          <View>
            {/* <Image /> */}
            <Text>Tournaments</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{width: "50%", alignContent: "center"}}>
          <View>
            {/* <Image /> */}
            <Text>Memories</Text>
          </View>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})