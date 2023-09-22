import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import PreviousCard from './PreviousCard/PreviousCard';
const poster1 = require('../../assets/images/poster1.png');
const poster2 = require('../../assets/images/poster2.png');

export default function PreviousTournaments(): JSX.Element {
  const data = [
    {
      tournamentName: "NBA 2000",
      poster: poster1,
      fromAndTo: "10 Aug 2023 - 12 Aug 2023"
    },
    {
      tournamentName: "NBA 2001",
      poster: poster2,
      fromAndTo: "1 Sept 2023 - 3 Sept 2023"
    },
    {
      tournamentName: "NBA 2002",
      poster: poster1,
      fromAndTo: "9 Aug 2023 - 13 Aug 2023"
    },
    {
      tournamentName: "NBA 2003",
      poster: poster2,
      fromAndTo: "20 Aug 2023 - 23 Aug 2023"
    },
    {
      tournamentName: "NBA 2004",
      poster: poster1,
      fromAndTo: "30 Aug 2023 - 2 Sept 2023"
    }
  ]
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.headingText}>PreviousTournaments</Text>
      {
        data.map((item) => <PreviousCard key={item.tournamentName} item={item} />)
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