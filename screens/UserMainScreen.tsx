import { ScrollView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Memories from '../components/Memories/Memories'
import Tournaments from '../components/Tournaments/Tournaments'
import Styling from '../constants/Styling'
const heart = require("../assets/images/heart.png");
const basketball = require("../assets/images/basketball.png");


export default function UserMainScreen() {
  const [isTournaments, setIsTournaments] = useState(true)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Styling.NOTCH_BACKGROUND_COLOR} />

      {/* Tournaments section */}
      {isTournaments ? <Tournaments /> : <Memories /> }

      {/* Footer */}
      <View style={styles.footerView}>
        <TouchableOpacity style={[styles.buttonView]} onPress={() => setIsTournaments(true)}>
          <Image source={basketball} style={styles.icons} />
          <Text style={[styles.text, isTournaments ? styles.activeText : {}]}>Tournaments</Text>
        </TouchableOpacity>

        <View style={styles.lineSeparator} />

        <TouchableOpacity style={styles.buttonView} onPress={() => setIsTournaments(false)}>
          <Image source={heart} style={styles.icons} />
          <Text style={[styles.text, !isTournaments ? styles.activeText : {}]}>Memories</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  footerView: {
    flexDirection: "row",
    // justifyContent: "flex-end",
    alignSelf: "flex-end"
  },
  buttonView: {
    width: "50%",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    gap: 4
  },
  text: {
    color: "#A4A4A4",
    fontSize: 12,
    fontWeight: "400"
  },
  activeButtonView: {

  },
  activeText: {
    color: "#FF451A",
  },
  icons: {
    width: 24,
    height: 24
  },
  lineSeparator: {
    width: 0.6,
    backgroundColor: '#A4A4A4',
    marginVertical: 10
  }
})