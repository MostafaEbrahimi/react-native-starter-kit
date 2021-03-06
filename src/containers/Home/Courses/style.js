import { StyleSheet, Dimensions } from "react-native";
import { Images, Strings, Colors } from "../../../config";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const style = StyleSheet.create({
  tabsScreen: {
    flex: 1,
    color: "#000",
    backgroundColor: "#fff"
  },
  courseViewContainer: {
    height: 150,
    flexDirection: "row",
    margin: 6,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.0,
    borderRadius: 4,
    elevation: 1,
    backgroundColor: "#fff",
    borderColor: "#000",
    alignContent: "center"
    // alignItems: "center"
  },
  courseImage: {
    width: 160,
    height: "100%"
  },
  bodyContainer: {
    flexDirection: "column",
    padding: 10
  },
  courseImageStyle: {
    width: 150,
    height: "100%"
  },
  courseTitle: {
    fontWeight: "bold",
    fontSize: 18
  },
  info: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "normal"
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 18,
    height: 18
  },
  imageInformationRow: {
    marginTop: 5,
    alignItems: "center",
    flexDirection: "row"
  },
  courseDetails: {
    backgroundColor: "#fff"
  },
  detailsTextContainer: {
    backgroundColor: "#fff",
    fontSize: 16,
    padding: 10
  }
});

export default style;
