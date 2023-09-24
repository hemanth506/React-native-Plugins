import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import UpcomingTournaments from './Upcoming/UpcomingTournaments'
import PreviousTournaments from './Previous/PreviousTournaments'

import styles from './Tournaments.style'

export default function Tournaments() {
  const [upcoming, setUpcoming] = useState(true)
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setUpcoming(true)} style={[styles.buttonType, upcoming ? styles.activeButtonType : {}]}>
          <Text style={[styles.textType, upcoming ? styles.activeTextType : {}]}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setUpcoming(false)} style={[styles.buttonType, !upcoming ? styles.activeButtonType : {}]}>
          <Text style={[styles.textType, !upcoming ? styles.activeTextType : {}]}>Previous</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {upcoming ? <UpcomingTournaments /> : <PreviousTournaments />}
      </ScrollView>
    </>
  )
}
