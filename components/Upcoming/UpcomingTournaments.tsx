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
      daysLeft: "20",
      fromAndTo: "10 Aug 2023 - 12 Aug 2023"
    },
    {
      tournamentName: "Hoopsters Fest 2021",
      entryFee: "1000",
      poster: poster2,
      daysLeft: "8",
      fromAndTo: "1 Sept 2023 - 3 Sept 2023"
    },
    {
      tournamentName: "Hoopsters Fest 2022",
      entryFee: "1500",
      poster: poster1,
      daysLeft: "15",
      fromAndTo: "9 Aug 2023 - 13 Aug 2023"
    },
    {
      tournamentName: "Hoopsters Fest 2023",
      entryFee: "2000",
      poster: poster2,
      daysLeft: "25",
      fromAndTo: "20 Aug 2023 - 23 Aug 2023"
    },
    {
      tournamentName: "Hoopsters Fest 2024",
      entryFee: "2900",
      poster: poster1,
      daysLeft: "25",
      fromAndTo: "30 Aug 2023 - 2 Sept 2023"
    }
  ]
  
  return (
    
    // <SafeAreaView style={{ flex: 1 }}>
    //   <FlatList
    //     data={data}
    //     renderItem={({ item, index }) => <UpcomingCard key={index} item={item} />}
    //     showsVerticalScrollIndicator={false}
    //   />
    // </SafeAreaView>
    
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.headingText}>UpcomingTournaments</Text>
      {
        data.map((item) => <UpcomingCard key={item.tournamentName} item={item} />)
      }
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