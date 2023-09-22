import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  containerLayout: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 16,
    paddingRight: 16,
    gap: 14,
    width: "80%",
    alignSelf: "center",
    marginBottom: 16
  },
  containerStyle: {
    borderRadius: 20,
    borderColor: "#F4F4F4",
    backgroundColor: "#FFF",
    // backgroundColor: "yellow",
    shadowColor: "#00000033",
    // alignItems: "center"
  },
  poster: {
    width: 311,
    height: 340,

    // flex: 1,
    // aspectRatio: 1.5,
    // resizeMode: 'contain',
  },
  timeLeftView: {
    // display: 'flex',
    flexDirection: 'row',
    gap: 6,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: "#DFFFE2",
    borderRadius: 100
  },
  timer: {
    width: 14,
    height: 14,
    alignSelf: "center"
  },
  timeText: {
    color: "#00B712",
    fontFamily: "Geomanist",
    fontSize: 10
  },

  tournamentDetails: {
    alignItems: "flex-start",
    gap: 6
  },

  tournamentName: {
    color: "#1C1C1C",
    fontFamily: "Geomanist",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 26
  },

  calender: {
    marginRight: 6,
    alignSelf: 'center'
  },
  dateView :{
    flexDirection: 'row'
  },
  date: {
    color: "#777777",
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "Geomanist",
    fontStyle: "normal",
    lineHeight: 15.6
  },
  entryFeeView: {
    gap: 6,
    alignItems: "baseline",
    flexDirection: "row"
  },
  feeAmount: {
    color: "#1C1C1C",
    fontFamily: "Geomanist",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold"
  },
  perTeam: {
    color: "#A4A4A4",
    fontFamily: "Geomanist",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 15.6
  },
  buttonType: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 8,
    paddingRight: 8,

    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    alignSelf: "stretch",
    borderRadius: 10,
    backgroundColor: "#FF451A"
  },
  buttonText: {
    color: "#FFF",
    textAlign: 'center',
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 14
  }

})

export default styles;