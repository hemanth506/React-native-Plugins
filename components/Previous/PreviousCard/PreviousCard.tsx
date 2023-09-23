import { Text, View, Image, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import styles from './PreviousCard.style';
import { RootStackparamList } from '../../../constants/types';


const timer = require('../../../assets/images/timer2.png');
const calender = require('../../../assets/images/calender.png');


let platform = Platform.OS;
console.log("🚀 ~ file: PreviousCard.tsx:9 ~ platform:", platform)

type previousCardProps = StackNavigationProp<RootStackparamList, "UserHome">

export default function PreviousCard({ item }: { item: any }): JSX.Element {
  const navigation = useNavigation<previousCardProps>();
  // console.log("🚀 ~ UpcomingCard.tsx:8")
  // if (height / 2 > width) {
  //   console.log("previous Phone")
  // } else {
  //   console.log("previous tab")
  // }

  return (
    <View style={[styles.containerLayout, platform === "ios" ? styles.containerShadowIOS : styles.containerShadowAndroid]}>
      <Image source={item.poster} style={styles.poster} />
      <View style={styles.tournamentDetails}>
        <View style={styles.timeLeftView}>
          <Image source={timer} style={styles.timer} />
          <Text style={styles.timeText}>Tournament Over</Text>
        </View>
        <Text style={styles.tournamentName}>{item.tournamentName}</Text>
        <View style={styles.dateView}>
          <Image source={calender} style={styles.calender} />
          <Text style={styles.date}>{item.fromAndTo}</Text>
        </View>
        <TouchableOpacity style={styles.buttonType} onPress={() => navigation.navigate("TournamentGallery")}>
          <Text style={styles.buttonText}>View Tournament Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}