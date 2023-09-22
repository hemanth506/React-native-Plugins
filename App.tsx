import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCard from './components/FlatCard'
import UpcomingTournaments from './components/Upcoming/UpcomingTournaments'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <UpcomingTournaments />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})