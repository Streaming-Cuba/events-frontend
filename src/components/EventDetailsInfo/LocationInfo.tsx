import React from "react";
import useStyles from "./styles";

function LocationInfo(props: LocationInfoProps): JSX.Element {
  const classes = useStyles();
  const { location } = props;
  if (!location) return null;

  return (
    <li className={classes.li}>
      <div className={classes.icon}>
        <svg
          version="1.1"
          xmlns="https://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 54.757 54.757"
        >
          <g>
            <path d="M27.557,12c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S31.416,12,27.557,12z M27.557,24c-2.757,0-5-2.243-5-5 s2.243-5,5-5s5,2.243,5,5S30.314,24,27.557,24z"></path>
            <path d="M40.94,5.617C37.318,1.995,32.502,0,27.38,0c-5.123,0-9.938,1.995-13.56,5.617c-6.703,6.702-7.536,19.312-1.804,26.952 L27.38,54.757L42.721,32.6C48.476,24.929,47.643,12.319,40.94,5.617z M41.099,31.431L27.38,51.243L13.639,31.4 C8.44,24.468,9.185,13.08,15.235,7.031C18.479,3.787,22.792,2,27.38,2s8.901,1.787,12.146,5.031 C45.576,13.08,46.321,24.468,41.099,31.431z"></path>{" "}
          </g>{" "}
          <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
          <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
          <g> </g>{" "}
        </svg>
      </div>
      <div className={classes.detailItemContent}>
        <div className={classes.detailItemTitle}>Lugar</div>
        <div className={classes.detailItemInner}>{location}</div>
      </div>
    </li>
  );
}

interface LocationInfoProps {
  location?: string;
}

export default LocationInfo;