import { StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import UpcomingCard from './UpcomingCard/UpcomingCard'
const poster1 = require('../../assets/images/poster1.png');
const poster2 = require('../../assets/images/poster2.png');

export default function UpcomingTournaments(): JSX.Element {
  const data = [
    {
      tournamentName: "Hoopsters Fest 2020",
      entryFee: "1800",
      poster: poster1,
      daysLeft: "20"
    },
    {
      tournamentName: "Hoopsters Fest 2021",
      entryFee: "1000",
      poster: poster2,
      daysLeft: "8"
    },
    {
      tournamentName: "Hoopsters Fest 2022",
      entryFee: "1500",
      poster: poster1,
      daysLeft: "15"
    },
    {
      tournamentName: "Hoopsters Fest 2023",
      entryFee: "2000",
      poster: poster2,
      daysLeft: "25"
    },
    {
      tournamentName: "Hoopsters Fest 2024",
      entryFee: "2500",
      poster: poster1,
      daysLeft: "25"
    }
  ]


  return (
    <SafeAreaView>
      <Text style={styles.headingText}>UpcomingTournaments</Text>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => <UpcomingCard key={index} item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10
  },
  scrollView: {
    flexShrink: 0,
    flexDirection: "column",
    alignContent: "flex-start",
    gap: 16
  }
})