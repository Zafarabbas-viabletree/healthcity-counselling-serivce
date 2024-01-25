// @flow
import { StyleSheet } from "aphrodite";
import { Colors, Images, Fonts } from "../../../theme";

export default StyleSheet.create({
  heroSectionInner: {
    position: "relative",
    backgroundImage: `url(${Images.hero_sec_image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    // height: "calc(100vh - 160px)",
    height: "90vh",
    "@media (max-width: 600px)": {
      height: "60vh",
    },
  },
  cardBox: {
    maxWidth: 530,
    width: "100%",
    height: "auto",
    position: "absolute",
    bottom: 0,
    background: "rgba(14, 158, 148, 0.7)",
    padding: "46px 0 0 59px",
    "@media (max-width: 600px)": {
      maxWidth: 370,
      paddingLeft: 20,
    },
    "@media (max-width: 415px)": {
      maxWidth: 260,
    },
  },
  cardHeading: {
    color: Colors.white,
    fontSize: 46,
    fontWeight: 600,
    textTransform: "capitalize",
    marginTop: 24,
    marginBottom: 40,
    lineHeight: 1.21,
    width: "100%",
    maxWidth: 410,
    "@media (max-width: 600px)": {
      fontSize: 30,
      maxWidth: 270,
      marginBottom: 30,
    },
    "@media (max-width: 415px)": {
      fontSize: 27,
      maxWidth: 210,
    },
  },
  cardSubHeading: {
    color: Colors.white,
    fontSize: 25,
    fontWeight: 600,
    textTransform: "capitalize",
    "@media (max-width: 600px)": {
      fontSize: 20,
    },
    "@media (max-width: 415px)": {
      fontSize: 15,
    },
  },
  bookNowBtn: {
    width: 183,
    height: 55,
    background: Colors.white,
    borderRadius: 1,
    border: "transparent",
    color: Colors.text.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: 600,
    "@media (max-width: 600px)": {
      width: 150,
      fontSize: 14,
      height: 40,
    },
  },
  arrowIconCont: {
    width: 60,
    height: 60,
    backgroundColor: Colors.text.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "@media (max-width: 600px)": {
      width: 50,
      height: 50,
    },
  },
  arrowIcon: {
    width: 13,
    "@media (max-width: 600px)": {
      width: 7,
    },
  },
});
