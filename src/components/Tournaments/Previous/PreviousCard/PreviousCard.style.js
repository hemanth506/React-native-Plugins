import {Dimensions, StyleSheet} from 'react-native';

var {width, height} = Dimensions.get('window');

let styles = StyleSheet.create({
  containerLayout: {
    flex: 1,
    flexDirection: 'column',

    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 16,
    paddingRight: 16,
    gap: 14,
    marginBottom: 14,
    marginTop: 12,
    borderRadius: 20,

    // paddingTop: height * 0.017,
    // paddingBottom: height * 0.017,
    // paddingLeft: width * 0.027,
    // paddingRight: width * 0.027,
    // gap: height * 0.014,
    // marginBottom: height * 0.02,
    // borderRadius: width * 0.04,

    width: '80%',
    alignSelf: 'center',
    borderColor: '#F4F4F4',
    backgroundColor: '#FFF',
    // backgroundColor: 'yellow',
    // elevation: 10,
  },
  containerShadowIOS: {
    shadowColor: 'rgba(0, 0, 0, 0.20)',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 1,
    shadowRadius: 30,
  },
  containerShadowAndroid: {
    elevation: 10,
  },
  poster: {
    width: 311,
    height: 340,

    // width: width * 0.74,
    // height: height * 0.51,

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

    // gap: height * 0.007,
    // paddingLeft: width * 0.007,
    // paddingRight: width * 0.007,
    // paddingTop: height * 0.001,
    // paddingBottom: height * 0.001,

    backgroundColor: '#D2D2D2',
    borderRadius: 100,
  },
  timer: {
    width: 14,
    height: 14,
    // width: width * 0.02,
    // height: height * 0.015,
    alignSelf: 'center',
  },
  timeText: {
    color: '#1C1C1C',
    fontFamily: 'Geomanist',
    fontSize: 10,
    // fontSize: width * 0.018,
  },

  tournamentDetails: {
    alignItems: 'flex-start',
    gap: 6,
    // gap: height * 0.007
  },

  tournamentName: {
    color: '#1C1C1C',
    fontFamily: 'Geomanist',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 26,

    // fontSize: width * 0.043,
    // lineHeight: height * 0.027,
  },

  calender: {
    marginRight: 6,
    // marginRight: width * 0.007,
    alignSelf: 'center',
  },
  dateView: {
    flexDirection: 'row',
  },
  date: {
    color: '#777777',
    fontWeight: '400',
    fontFamily: 'Geomanist',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15.6,
    // fontSize: width * 0.019,
    // lineHeight: height * 0.015,
  },
  buttonType: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    // backgroundColor: '#FF451A',
    marginTop: 10, // --->

    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 8,
    paddingRight: 8,
    gap: 8,
    borderRadius: 10,
    borderColor: '#FF451A',
    borderWidth: 1,

    // paddingTop: height * 0.017,
    // paddingBottom: height * 0.017,
    // paddingLeft: width * 0.01,
    // paddingRight: width * 0.01,
    // gap: height * 0.01,
    // borderRadius: width * 0.019,
  },
  buttonText: {
    color: '#FF451A',
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 14,
    // fontSize: width * 0.023,
    // lineHeight: height * 0.015,
  },
});

if (height / 2 > width) {
  console.log('Phone');
} else {
  console.log('tablet');
  styles = StyleSheet.create({
    containerLayout: {
      flex: 1,
      flexDirection: 'column',
      // paddingTop: 14,
      // paddingBottom: 14,
      // paddingLeft: 16,
      // paddingRight: 16,
      paddingTop: height * 0.017,
      paddingBottom: height * 0.017,

      paddingLeft: width * 0.027,
      paddingRight: width * 0.027,
      // gap: 14,
      gap: height * 0.014,
      width: '80%',
      alignSelf: 'center',
      // marginBottom: 16,
      marginBottom: height * 0.02,
      marginTop: height * 0.02,

      // borderRadius: 35,
      borderRadius: width * 0.04,

      borderColor: '#F4F4F4',
      backgroundColor: '#FFF',
      // backgroundColor: 'yellow',
      shadowColor: '#00000033',
      // alignItems: "center"
    },
    containerShadowIOS: {
      shadowColor: 'rgba(0, 0, 0, 0.20)',
      shadowOffset: {width: 0, height: 6},
      shadowOpacity: 1,
      shadowRadius: 30,
    },
    containerShadowAndroid: {
      elevation: 10,
    },
    poster: {
      // width: 611,
      // height: 640,

      // width: width * 0.74,
      // height: height * 0.51,

      width: width * 0.74,
      height: height * 0.51,

      // flex: 1,
      // aspectRatio: 1.5,
      // resizeMode: 'contain',
    },
    timeLeftView: {
      // display: 'flex',
      flexDirection: 'row',
      // gap: 6,
      // paddingLeft: 4,
      // paddingRight: 4,
      // paddingTop: 2,
      // paddingBottom: 2,

      gap: height * 0.007,
      paddingLeft: width * 0.007,
      paddingRight: width * 0.007,
      paddingTop: height * 0.001,
      paddingBottom: height * 0.001,

      backgroundColor: '#D2D2D2',
      borderRadius: 100,
    },
    timer: {
      // width: 14,
      // height: 14,
      width: width * 0.02,
      height: height * 0.015,
      alignSelf: 'center',
    },
    timeText: {
      color: '#1C1C1C',
      fontFamily: 'Geomanist',
      // fontSize: 10
      fontSize: width * 0.018,
    },

    tournamentDetails: {
      alignItems: 'flex-start',
      // gap: 6,
      gap: height * 0.007,
    },

    tournamentName: {
      color: '#1C1C1C',
      fontFamily: 'Geomanist',
      fontWeight: 'bold',
      // fontSize: 20,
      // lineHeight: 26,

      fontSize: width * 0.043,
      lineHeight: height * 0.027,
    },

    calender: {
      // marginRight: 6,
      marginRight: width * 0.007,
      alignSelf: 'center',
    },
    dateView: {
      flexDirection: 'row',
    },
    date: {
      color: '#777777',
      fontWeight: '400',
      fontFamily: 'Geomanist',
      fontStyle: 'normal',
      // fontSize: 12,
      // lineHeight: 15.6,
      fontSize: width * 0.019,
      lineHeight: height * 0.015,
    },
    buttonType: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
      // backgroundColor: '#FF451A',

      // paddingTop: 14,
      // paddingBottom: 14,
      // paddingLeft: 8,
      // paddingRight: 8,
      // gap: 8,
      // borderRadius: 10,

      paddingTop: height * 0.017,
      paddingBottom: height * 0.017,
      paddingLeft: width * 0.01,
      paddingRight: width * 0.01,
      gap: height * 0.01,
      borderRadius: width * 0.019,
      borderColor: '#FF451A',
      borderWidth: 1,
    },
    buttonText: {
      color: '#FF451A',
      textAlign: 'center',
      fontStyle: 'normal',
      fontWeight: '400',
      // fontSize: 14,
      // lineHeight: 14,
      fontSize: width * 0.023,
      lineHeight: height * 0.015,
    },
  });
}

export default styles;
