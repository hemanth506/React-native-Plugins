import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
const timer = require('../../../assets/images/timer.png');
const calender = require('../../../assets/images/calender.png');

import styles from './UpcomingCard.style';

export default function UpcomingCard({ item }: { item: any }): JSX.Element {
  return (
    <View style={[styles.containerLayout, styles.containerStyle]}>
      <Image source={item.poster} style={styles.poster} />
      <View style={styles.tournamentDetails}>
        <View style={styles.timeLeftView}>
          <Image source={timer} style={styles.timer} />
          <Text style={styles.timeText}>Registration Closing in {item.daysLeft} days</Text>
        </View>
        <Text style={styles.tournamentName}>{item.tournamentName}</Text>
        <View style={styles.dateView}>
          <Image source={calender} style={styles.calender} />
          <Text style={styles.date}>10 Aug 2023 - 12 Aug 2023</Text>
        </View>
        <View style={styles.entryFeeView}>
          <Text style={styles.feeAmount}>₹ {item.entryFee}</Text>
          <Text style={styles.perTeam}>per team</Text>
        </View>
        <TouchableOpacity style={styles.buttonType}>
          <Text style={styles.buttonText}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

