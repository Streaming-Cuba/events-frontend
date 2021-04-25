import React, { MouseEvent, MouseEventHandler } from "react";
import useStyles from "./styles";
import {
  Headphones as HeadphonesIcon,
  Vote as VoteIcon,
} from "mdi-material-ui";
import { IconButton, Tooltip } from "@material-ui/core";

function VoteCard(props: VoteCardProps) {
  const classes = useStyles();

  const { title, coverPath } = props;

  const onVote = (e: MouseEvent<HTMLButtonElement>) => {
    if (props.onVote) props.onVote(e, props.id);
  };

  return (
    <div className={classes.inner}>
      <div className={classes.root}>
        <div className={classes.image}>
          {/* <div className="gt-label gt-style-4 gt-position-top-left gt-label-194">
            <span>Featured</span>
          </div> */}
          <a>
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
        <div className={classes.actions}>
          <Tooltip title="Escuchar">
            <IconButton
              onClick={props.onListen && props.onListen}
              className={classes.action}
            >
              <HeadphonesIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Votar">
            <IconButton onClick={onVote} className={classes.action}>
              <VoteIcon />
            </IconButton>
          </Tooltip>
        </div>

        {/* <div className={classes.text}>
          Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam
          principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum
          volutpat delicatissimi has.
        </div> */}
      </div>
    </div>
  );
}

interface VoteCardProps {
  id: number
  title?: string;
  coverPath?: string;
  onVote?: (event: MouseEvent, id?: number) => void;
  onListen?: MouseEventHandler;
}

export default VoteCard;
