import React, { MouseEvent, MouseEventHandler } from "react";
import useStyles from "./styles";
import {
  Headphones as HeadphonesIcon,
  Vote as VoteIcon,
} from "mdi-material-ui";
import { Card, IconButton, Tooltip } from "@material-ui/core";
import Item from "../../types/Item";

function VoteCard(props: VoteCardProps) {
  const classes = useStyles();

  const { data, disableVote } = props;

  const onVote = (e: MouseEvent<HTMLButtonElement>) => {
    if (props.onVote) props.onVote(e, data.id);
  };

  const openExternalUrl = () => {
    window.open(data.metadata.url, "__blank");
  };

  return (
    <Card className={classes.inner}>
      <div className={classes.image}>
        <img
          width="952"
          height="579"
          src={data.coverPath}
          className={classes.img}
          alt=""
          loading="lazy"
        />
        {data.metadata?.productorHome && (
          <div className={classes.status}>{data.metadata?.productorHome}</div>
        )}
      </div>
      <div className={classes.content}>
        <div className={classes.title}>{data.name}</div>
        {data.metadata?.interpreter && (
          <div className={classes.subtitle}>{data.metadata?.interpreter}</div>
        )}
        {data.metadata?.productor && (
          <div className={classes.subtitle}>{data.metadata?.productor}</div>
        )}
      </div>
      <div className={classes.grow} />
      <div className={classes.actions}>
        {data.metadata.url && (
          <Tooltip title="Escuchar">
            <IconButton onClick={openExternalUrl} className={classes.action}>
              <HeadphonesIcon />
            </IconButton>
          </Tooltip>
        )}
        {!disableVote && (
          <Tooltip title="Votar">
            <IconButton onClick={onVote} className={classes.action}>
              <VoteIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Card>
  );
}

interface VoteCardProps {
  data: Item;
  onVote?: (
    event: MouseEvent | MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
  onListen?: MouseEventHandler;
  disableVote?: boolean;
}

export default VoteCard;
