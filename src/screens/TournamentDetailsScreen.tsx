import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
const backArrow = require("../assets/images/backArrow.png")

export default function TournamentDetailsScreen({ route }: { route: any }) {
  console.log("🚀 ~ file: TournamentDetailsScreen.tsx:6 ~ TournamentDetailsScreen ~ route:", route.params)
  // const { tournamentName, entryFee, poster, daysLeft, fromAndTo}
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>TournamentDetailsScreen</Text>
      <View>
        <Image source={backArrow} width={100} height={100} />
        <View>
          <Image source={route.params.poster} width={100} height={100} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})