import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_0_2332}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/493f/44dd/ac46194963961572f2ef738f0f527512"
          }}
          style={styles.ImageBackground_I0_2332_0_2344}
        />
        <View style={styles.View_I0_2332_0_2345}>
          <Text style={styles.Text_I0_2332_0_2345}>9:41 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5b2/9b6e/9f4ebddedf0a67e048844bd03492656b"
          }}
          style={styles.ImageBackground_I0_2332_0_2346}
        />
        <View style={styles.View_I0_2332_0_2347}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db8/4607/80724245ffc614d8102bf772d05e0345"
            }}
            style={styles.ImageBackground_I0_2332_0_2348}
          />
          <View style={styles.View_I0_2332_0_2351}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f98/cc59/30772f318baaef5ce069548f03e5c9c6"
              }}
              style={styles.ImageBackground_I0_2332_0_2349}
            />
            <View style={styles.View_I0_2332_0_2350} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a71/a9ca/ed39fb83956723adc92f2a1932fa5a4b"
            }}
            style={styles.ImageBackground_I0_2332_0_2352}
          />
        </View>
        <View style={styles.View_I0_2332_0_2355}>
          <View style={styles.View_I0_2332_0_2353} />
          <View style={styles.View_I0_2332_0_2354} />
          <View style={styles.View_I0_2332_0_2356} />
          <View style={styles.View_I0_2332_0_2357} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdaf/1493/599c215dbe141ec4e36bdcce1628d2e4"
          }}
          style={styles.ImageBackground_I0_2332_0_2360}
        />
        <View style={styles.View_I0_2332_0_2362}>
          <View style={styles.View_I0_2332_0_2362_0_2341} />
          <View style={styles.View_I0_2332_0_2362_0_2342}>
            <Text style={styles.Text_I0_2332_0_2362_0_2342}>Wedstimate</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e36d/93be/532f6e09be2b5797170ce63b206b9b6b"
          }}
          style={styles.ImageBackground_I0_2332_0_2363}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff44/fa8f/7f5777859feb9dac514c69d6658e7071"
          }}
          style={styles.ImageBackground_I0_2332_0_2367}
        />
        <View style={styles.View_I0_2332_0_2368}>
          <Text style={styles.Text_I0_2332_0_2368}>9:41 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5b2/9b6e/9f4ebddedf0a67e048844bd03492656b"
          }}
          style={styles.ImageBackground_I0_2332_0_2369}
        />
        <View style={styles.View_I0_2332_0_2370}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db8/4607/80724245ffc614d8102bf772d05e0345"
            }}
            style={styles.ImageBackground_I0_2332_0_2371}
          />
          <View style={styles.View_I0_2332_0_2374}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f98/cc59/30772f318baaef5ce069548f03e5c9c6"
              }}
              style={styles.ImageBackground_I0_2332_0_2372}
            />
            <View style={styles.View_I0_2332_0_2373} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a71/a9ca/ed39fb83956723adc92f2a1932fa5a4b"
            }}
            style={styles.ImageBackground_I0_2332_0_2375}
          />
        </View>
        <View style={styles.View_I0_2332_0_2378}>
          <View style={styles.View_I0_2332_0_2376} />
          <View style={styles.View_I0_2332_0_2377} />
          <View style={styles.View_I0_2332_0_2379} />
          <View style={styles.View_I0_2332_0_2380} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdaf/1493/599c215dbe141ec4e36bdcce1628d2e4"
          }}
          style={styles.ImageBackground_I0_2332_0_2383}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_2332: {
    width: 390,
    minWidth: 390,
    height: 78,
    minHeight: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2332_0_2344: {
    flexGrow: 1,
    width: 390,
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14
  },
  View_I0_2332_0_2345: {
    flexGrow: 1,
    width: 48.87999725341797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.6800537109375,
    top: 11
  },
  Text_I0_2332_0_2345: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_2332_0_2346: {
    flexGrow: 1,
    width: 227.760009765625,
    height: 37.78125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.1199951171875,
    top: 0
  },
  View_I0_2332_0_2347: {
    flexGrow: 1,
    width: 27.55999755859375,
    height: 14.015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 357.760009765625,
    top: 6.09375
  },
  ImageBackground_I0_2332_0_2348: {
    width: 24.96002197265625,
    height: 14.015625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_2332_0_2351: {
    width: 1.559967041015625,
    height: 4.721416473388672,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26
  },
  ImageBackground_I0_2332_0_2349: {
    width: 4.15997314453125,
    height: 4.875,
    top: -0.0767822265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.5999755859375
  },
  View_I0_2332_0_2350: {
    width: 2.600006103515625,
    height: 4.875,
    top: -0.0767822265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.5999755859375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_2332_0_2352: {
    width: 20.800018310546875,
    height: 9.140625,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.080078125
  },
  View_I0_2332_0_2355: {
    flexGrow: 1,
    width: 17.1600341796875,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309.919921875,
    top: 4.875
  },
  View_I0_2332_0_2353: {
    width: 3.120025634765625,
    height: 5.484375,
    top: 6.703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_2332_0_2354: {
    width: 3.1199951171875,
    height: 7.3125,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.6800537109375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_2332_0_2356: {
    width: 3.1199951171875,
    height: 9.75,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.3599853515625,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_2332_0_2357: {
    width: 3.120025634765625,
    height: 12.1875,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.0400390625,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_2332_0_2360: {
    flexGrow: 1,
    width: 14.914490699768066,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.8800048828125,
    top: 6.09375
  },
  View_I0_2332_0_2362: {
    flexGrow: 1,
    width: 175,
    height: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 107,
    top: 45,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2332_0_2362_0_2341: {
    flexGrow: 1,
    width: 175,
    height: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_2332_0_2362_0_2342: {
    flexGrow: 1,
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I0_2332_0_2362_0_2342: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_I0_2332_0_2363: {
    flexGrow: 1,
    width: 30.68000030517578,
    height: 20.109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.6800537109375,
    top: 45.09375
  },
  ImageBackground_I0_2332_0_2367: {
    flexGrow: 1,
    width: 390,
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14
  },
  View_I0_2332_0_2368: {
    flexGrow: 1,
    width: 48.87999725341797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.6800537109375,
    top: 11
  },
  Text_I0_2332_0_2368: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_2332_0_2369: {
    flexGrow: 1,
    width: 227.760009765625,
    height: 37.78125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.1199951171875,
    top: 0
  },
  View_I0_2332_0_2370: {
    flexGrow: 1,
    width: 27.55999755859375,
    height: 14.015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 357.760009765625,
    top: 6.09375
  },
  ImageBackground_I0_2332_0_2371: {
    width: 24.96002197265625,
    height: 14.015625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_2332_0_2374: {
    width: 1.559967041015625,
    height: 4.721416473388672,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26
  },
  ImageBackground_I0_2332_0_2372: {
    width: 4.15997314453125,
    height: 4.875,
    top: -0.0767822265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.5999755859375
  },
  View_I0_2332_0_2373: {
    width: 2.600006103515625,
    height: 4.875,
    top: -0.0767822265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.5999755859375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_2332_0_2375: {
    width: 20.800018310546875,
    height: 9.140625,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.080078125
  },
  View_I0_2332_0_2378: {
    flexGrow: 1,
    width: 17.1600341796875,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309.919921875,
    top: 4.875
  },
  View_I0_2332_0_2376: {
    width: 3.120025634765625,
    height: 5.484375,
    top: 6.703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_2332_0_2377: {
    width: 3.1199951171875,
    height: 7.3125,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.6800537109375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_2332_0_2379: {
    width: 3.1199951171875,
    height: 9.75,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.3599853515625,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_2332_0_2380: {
    width: 3.120025634765625,
    height: 12.1875,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.0400390625,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_2332_0_2383: {
    flexGrow: 1,
    width: 14.914490699768066,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.8800048828125,
    top: 6.09375
  },
  View_2: { height: 844 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
