import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: "#E8E8E8",
    marginTop: 15,
    marginBottom: 15,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    width: "70%",
    borderRadius: 12
  },
  buttonType: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 24,
    paddingRight: 24,
    gap: 8,

    // justifyContent: "center",
    // alignItems: "center",

    // borderColor: "black",
    borderRadius: 12,
  },
  activeButtonType: {
    backgroundColor: "#FFDAD1",
    borderColor: "#FF451A",
    borderWidth: 1,
  },
  textType: {
    textAlign: "center",
    fontWeight: "500",
    color: "#777",
  },
  activeTextType: {
    color: "#FF451A"
  }
})

export default styles;