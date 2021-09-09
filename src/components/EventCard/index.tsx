import React from "react";
import useStyles from "./styles";
import Event from "../../types/Event";
import Image from "next/image";
import {useRouter} from "next/router";

function EventCard(props: {event: Event}): JSX.Element {
  const classes = useStyles();

  const {event} = props;
  const router = useRouter();

  return (
    <div className={classes.inner}>
      <div className={classes.root}>
        <div className={classes.image}>
          {/* <div className="gt-label gt-style-4 gt-position-top-left gt-label-194">
            <span>Featured</span>
          </div> */}
          <Image
            width="952"
            height="579"
            src={event.coverPath}
            className={classes.img}
            alt=""
            loading="lazy"
          />
          <div className={classes.status}>{event.statusId === 1? "Próximamente" : "Abierto" }</div>
        </div>
        <div className={classes.title}>
          <h3 onClick={() => router.push(`/event/${event.identifier}`)}>
            {event.name}
          </h3>
        </div>
        <div className={classes.text}>
          {event.description.length < 300? event.description : event.description.slice(0, 300).concat("...")}
        </div>
      </div>
    </div>
  );
}

export default EventCard;
