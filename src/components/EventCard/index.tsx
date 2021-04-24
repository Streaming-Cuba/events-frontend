import React from "react";
import useStyles from "./styles";

function EventCard() {
  const classes = useStyles();

  return (
    <div className={classes.inner}>
      <div className={classes.root}>
        <div className={classes.image}>
          {/* <div className="gt-label gt-style-4 gt-position-top-left gt-label-194">
            <span>Featured</span>
          </div> */}
          <a href="https://demo.gloriathemes.com/eventchamp/demo/event/drama-games-2019/">
            <img
              width="952"
              height="579"
              src="https://demo.gloriathemes.com/eventchamp/demo/wp-content/uploads/2018/11/event-13-952x579.jpg"
              className={classes.img}
              alt=""
              loading="lazy"
            />
          </a>
          <div className={classes.status}>Showing</div>
        </div>
        <div className={classes.title}>
          <a href="https://demo.gloriathemes.com/eventchamp/demo/event/drama-games-2019/">
            Drama Games 2020
          </a>
        </div>
        <div className={classes.text}>
          Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam
          principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum
          volutpat delicatissimi has.
        </div>
      </div>
    </div>
  );
}

export default EventCard;
