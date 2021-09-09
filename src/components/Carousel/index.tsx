import clsx from "clsx";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { Chip } from "@material-ui/core";
import { OutlinedButton } from "../Buttons";

// const data = [
//   {
//     id: 1,
//     title: "Cubadisco 2021",
//     image: "/image/upload/v1619213991/events/cubadisco-2021/cubadisco2021_cover.webp",
//     identifier: "cubadisco2021",
//   },
//   // {
//   //   id: 2,
//   //   title: "Gaucala 2020",
//   //   image: "/image/upload/v1617844957/samples/cloudinary-group.jpg",
//   //   identifier: "evento1",
//   // },
//   // { id: 3, title: 'ASdaguaca 2020', image: '/images/event2.webp', identifier: "evento2" },
// ];

function Carousel(props: { items: any[] }) {
  const classes = useStyles();

  const [active, setActive] = useState(0);

  const { items } = props;

  useEffect(() => {
    const intervalId = setInterval(nextItem, 6000);
    return () => {
      clearInterval(intervalId);
    };
  });

  const nextItem = () => {
    if (active === items.length - 1) setActive(0);
    else setActive(active + 1);
  };

  const renderChildrens = () => {
    return items
      .filter(item => item.statusId && (item.statusId === 1 || item.statusId === 2))
      .map((item, index) => {
        return (
          <div
            key={item.id}
            className={classes.carouselItem}
            style={{
              backgroundImage: `url(${item.coverPath})`,
              opacity: index === active ? 1 : 0,
            }}
          >
            <div className={classes.carouselItemOpacity} />
            <div className={classes.carouselItemContent}>
              <div className={classes.title}>{item.name}</div>
              <div className={classes.subtitle}>{item.subtitle}</div>
              {typeof item.status === "object" && item.status.id === 2 &&
            <div className={classes.categories}>
              <Chip label="Musica cubana" className={classes.category} />
            </div> }
              <div className={classes.actions}>
                <OutlinedButton href={`/event/${item.identifier}`}>
                Detalles
                </OutlinedButton>
                {/* <OutlinedButton href={`/vote/${item.identifier}`}>
                Votar
              </OutlinedButton> */}
              </div>
            </div>
          </div>
        );
      });
  };

  const goTo = (index: number) => {
    setActive(index);
  };

  const renderNavigationOptions = () => {
    return items
      .filter(item => item.statusId && (item.statusId === 1 || item.statusId === 2))
      .map((item, index) => (
        <span
          key={item.id}
          onClick={() => goTo(index)}
          className={clsx(classes.bullet, {
            [classes.bulletActive]: index === active,
          })}
          role="button"
        />
      ));
  };

  return (
    <div className={clsx(classes.carouselContainer)}>
      <div className={classes.carouselSwapper}>
        {renderChildrens()}

        <div className={classes.pagination}>{renderNavigationOptions()}</div>
      </div>
    </div>
  );
}

export default Carousel;
