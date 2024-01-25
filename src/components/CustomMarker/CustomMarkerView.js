// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./CustomMarkerStyles";
import { Images } from "../../theme";

export default function CustomMarkerView(props) {
  return (
    <div>
      <img
        src={Images.map_marker}
        height="37px"
        width="33px"
        alt="map marker"
      />
    </div>
  );
}
