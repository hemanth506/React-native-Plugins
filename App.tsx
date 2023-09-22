import { ScrollView, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCard from './components/FlatCard'
import UpcomingTournaments from './components/Upcoming/UpcomingTournaments'
import type { StatusBarStyle } from 'react-native';
import PreviousTournaments from './components/Previous/PreviousTournaments'

export default function App() {
  const [upcoming, setUpcoming] = useState(true)
  console.log("🚀 ~ file: App.tsx:11 ~ App ~ upcoming:", upcoming)
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <FlatCard /> */}
        <TouchableOpacity onPress={() => setUpcoming(true)}>
          <Text>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setUpcoming(false)}>
          <Text>Previous</Text>
        </TouchableOpacity>


        {upcoming ? <UpcomingTournaments /> : <PreviousTournaments />}
        
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})