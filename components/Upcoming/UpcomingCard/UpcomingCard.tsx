import { Text, View, Image, TouchableOpacity, Dimensions, Platform } from 'react-native'
import React from 'react'
const timer = require('../../../assets/images/timer.png');
const calender = require('../../../assets/images/calender.png');

import styles from './UpcomingCard.style';
var { width, height } = Dimensions.get('window');
let platform = Platform.OS;
export default function UpcomingCard({ item }: { item: any }): JSX.Element {
  // console.log("🚀 ~ UpcomingCard.tsx:8")
  // if (height / 2 > width) {
  //   console.log("Upcoming Phone")
  // } else {
  //   console.log("Upcoming tab")
  // }
  return (
    <View style={[styles.containerLayout, platform === "ios" ? styles.containerShadowIOS : styles.containerShadowAndroid]}>
      <Image source={item.poster} style={styles.poster} />
      <View style={styles.tournamentDetails}>
        <View style={styles.timeLeftView}>
          <Image source={timer} style={styles.timer} />
          <Text style={styles.timeText}>Registration Closing in {item.daysLeft} days</Text>
        </View>
        <Text style={styles.tournamentName}>{item.tournamentName}</Text>
        <View style={styles.dateView}>
          <Image source={calender} style={styles.calender} />
          <Text style={styles.date}>{item.fromAndTo}</Text>
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

