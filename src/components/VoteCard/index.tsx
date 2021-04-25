import React from "react";
import useStyles from "./styles";

function VoteCard(props: { title?: string; coverPath?: string }) {
  const classes = useStyles();

  const { title, coverPath } = props;

  return (
    <div className={classes.inner}>
      <div className={classes.root}>
        <div className={classes.image}>
          {/* <div className="gt-label gt-style-4 gt-position-top-left gt-label-194">
            <span>Featured</span>
          </div> */}
          <a >
            <img
              width="952"
              height="579"
              src={coverPath}
              className={classes.img}
              alt=""
              loading="lazy"
            />
          </a>
          {/* <div className={classes.status}>Showing</div> */}
        </div>
        <div className={classes.title}>{title}</div>
        {/* <div className={classes.text}>
          Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam
          principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum
          volutpat delicatissimi has.
        </div> */}
      </div>
    </div>
  );
}

export default VoteCard;
