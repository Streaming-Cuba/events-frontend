import React, { useEffect } from "react";
import clsx from "clsx";
import {
  makeStyles,
  Theme,
  Breadcrumbs,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import {
  HeartOutline as HeartOutlinedIcon,
  StarOutline as StarOutlineIcon,
  Facebook as FacebookIcon,
  Youtube as YoutubeIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
} from "mdi-material-ui";
import Event from "../../types/Event";
import * as DateUtils from "../../utils/DateUtils";

import Link from "../../components/Link";
import TitleBar from "../../components/TitleBar";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import axios from "axios";
import StartDateInfo from "../../components/EventDetailsInfo/StartDate";
import EndDateInfo from "../../components/EventDetailsInfo/EndDateInfo";
import LocationInfo from "../../components/EventDetailsInfo/LocationInfo";
import CategoryInfo from "../../components/EventDetailsInfo/CategoryInfo";

function EventById(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();

  const { event } = props;

  const classes = useStyles();

  useEffect(() => {
    console.log(event);
  }, []);

  return (
    <>
      <NextSeo
        title={event.name}
        description={event.description}
        openGraph={{
          title: event.name,
          description: event.description,
          images: [{ url: event.coverPath }],
          url: router.asPath,
        }}
      />
      <div>
        <TitleBar title={event.name as string} background={event.coverPath}>
          <Link href="/" color="inherit">
            Inicio
          </Link>
          <Link href="/events" color="inherit">
            Eventos
          </Link>
          <Typography color="inherit">{event.name}</Typography>
        </TitleBar>

        <div className={classes.container}>
          <Grid container spacing={4}>
            <Grid item sm={8}>
              <div
                style={{
                  paddingTop: "0px",
                  paddingBottom: "1px",
                  position: "static",
                }}
              >
                <div className={classes.pageContent}>
                  <div className={clsx(classes.contentHeader)}>
                    <img
                      src={event.coverPath}
                      className={classes.image}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className={classes.descriptionContent}>
                    {event.description}
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item sm={4}>
              <div
                style={{
                  paddingTop: "0px",
                  paddingBottom: "1px",
                }}
              >
                <div className={classes.detailWidget}>
                  <div className={classes.widgetTitle}>
                    <span>Detalles de evento</span>
                    <div className={classes.reactionsBox}>
                      <IconButton className={classes.like}>
                        <HeartOutlinedIcon />
                      </IconButton>
                      {/* <IconButton className={classes.like}>
                        <StarOutlineIcon />
                      </IconButton> */}
                    </div>
                  </div>
                  <div className="gt-widget-content">
                    <div className="gt-content-detail-box">
                      <ul className={classes.ul}>
                        <StartDateInfo startDate={event.startDate} />
                        <EndDateInfo endDate={event.endDate} />
                        <LocationInfo location={event.location} />
                        <CategoryInfo category={event.category} />

                        {/* <li className={classes.li}>
                          <div className={classes.icon}>
                            <svg
                              version="1.1"
                              xmlns="https://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              viewBox="0 0 52 52"
                            >
                              {" "}
                              <g>
                                {" "}
                                <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"></path>{" "}
                                <path d="M38.252,15.336l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.274-1.405,0.156c-0.345,0.432-0.275,1.061,0.156,1.406 l10,8C22.559,34.928,22.78,35,23,35c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411 C39.251,14.885,38.62,14.922,38.252,15.336z"></path>{" "}
                              </g>{" "}
                              <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                              <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                              <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                            </svg>
                          </div>
                          <div className={classes.detailItemContent}>
                            <div className={classes.detailItemTitle}>
                              Estado
                            </div>
                            <div className={classes.detailItemInner}>
                              Próximo
                            </div>
                          </div>
                        </li> */}

                        {/* <li className={classes.li}>
                          <div className={classes.icon}>
                            <svg
                              version="1.1"
                              xmlns="https://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              viewBox="0 0 60 60"
                            >
                              <path d="M48.014,42.889l-9.553-4.776C37.56,37.662,37,36.756,37,35.748v-3.381c0.229-0.28,0.47-0.599,0.719-0.951 c1.239-1.75,2.232-3.698,2.954-5.799C42.084,24.97,43,23.575,43,22v-4c0-0.963-0.36-1.896-1-2.625v-5.319 c0.056-0.55,0.276-3.824-2.092-6.525C37.854,1.188,34.521,0,30,0s-7.854,1.188-9.908,3.53C17.724,6.231,17.944,9.506,18,10.056 v5.319c-0.64,0.729-1,1.662-1,2.625v4c0,1.217,0.553,2.352,1.497,3.109c0.916,3.627,2.833,6.36,3.503,7.237v3.309 c0,0.968-0.528,1.856-1.377,2.32l-8.921,4.866C8.801,44.424,7,47.458,7,50.762V54c0,4.746,15.045,6,23,6s23-1.254,23-6v-3.043 C53,47.519,51.089,44.427,48.014,42.889z M51,54c0,1.357-7.412,4-21,4S9,55.357,9,54v-3.238c0-2.571,1.402-4.934,3.659-6.164 l8.921-4.866C23.073,38.917,24,37.354,24,35.655v-4.019l-0.233-0.278c-0.024-0.029-2.475-2.994-3.41-7.065l-0.091-0.396l-0.341-0.22 C19.346,23.303,19,22.676,19,22v-4c0-0.561,0.238-1.084,0.67-1.475L20,16.228V10l-0.009-0.131c-0.003-0.027-0.343-2.799,1.605-5.021 C23.253,2.958,26.081,2,30,2c3.905,0,6.727,0.951,8.386,2.828c1.947,2.201,1.625,5.017,1.623,5.041L40,16.228l0.33,0.298 C40.762,16.916,41,17.439,41,18v4c0,0.873-0.572,1.637-1.422,1.899l-0.498,0.153l-0.16,0.495c-0.669,2.081-1.622,4.003-2.834,5.713 c-0.297,0.421-0.586,0.794-0.837,1.079L35,31.623v4.125c0,1.77,0.983,3.361,2.566,4.153l9.553,4.776 C49.513,45.874,51,48.28,51,50.957V54z"></path>{" "}
                              <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                              <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                              <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                            </svg>
                          </div>
                          <div className={classes.detailItemContent}>
                            <div className={classes.detailItemTitle}>
                              Organizador(es)
                            </div>
                            <div className={classes.detailItemInner}>
                              <a>Ministerio de Cultura</a>, <a>Karicato INC</a>
                            </div>
                          </div>
                        </li>

                        <li className={classes.li}>
                          <div className={classes.icon}>
                            <svg
                              version="1.1"
                              xmlns="https://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512.076 512.076"
                            >
                              <g transform="translate(-1 -1)">
                                {" "}
                                <g>
                                  {" "}
                                  <g>
                                    {" "}
                                    <path d="M499.639,396.039l-103.646-69.12c-13.153-8.701-30.784-5.838-40.508,6.579l-30.191,38.818 c-3.88,5.116-10.933,6.6-16.546,3.482l-5.743-3.166c-19.038-10.377-42.726-23.296-90.453-71.04s-60.672-71.45-71.049-90.453 l-3.149-5.743c-3.161-5.612-1.705-12.695,3.413-16.606l38.792-30.182c12.412-9.725,15.279-27.351,6.588-40.508l-69.12-103.646 C109.12,1.056,91.25-2.966,77.461,5.323L34.12,31.358C20.502,39.364,10.511,52.33,6.242,67.539 c-15.607,56.866-3.866,155.008,140.706,299.597c115.004,114.995,200.619,145.92,259.465,145.92 c13.543,0.058,27.033-1.704,40.107-5.239c15.212-4.264,28.18-14.256,36.181-27.878l26.061-43.315 C517.063,422.832,513.043,404.951,499.639,396.039z M494.058,427.868l-26.001,43.341c-5.745,9.832-15.072,17.061-26.027,20.173 c-52.497,14.413-144.213,2.475-283.008-136.32S8.29,124.559,22.703,72.054c3.116-10.968,10.354-20.307,20.198-26.061 l43.341-26.001c5.983-3.6,13.739-1.855,17.604,3.959l37.547,56.371l31.514,47.266c3.774,5.707,2.534,13.356-2.85,17.579 l-38.801,30.182c-11.808,9.029-15.18,25.366-7.91,38.332l3.081,5.598c10.906,20.002,24.465,44.885,73.967,94.379 c49.502,49.493,74.377,63.053,94.37,73.958l5.606,3.089c12.965,7.269,29.303,3.898,38.332-7.91l30.182-38.801 c4.224-5.381,11.87-6.62,17.579-2.85l103.637,69.12C495.918,414.126,497.663,421.886,494.058,427.868z"></path>{" "}
                                    <path d="M291.161,86.39c80.081,0.089,144.977,64.986,145.067,145.067c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533 c-0.099-89.503-72.63-162.035-162.133-162.133c-4.713,0-8.533,3.82-8.533,8.533S286.448,86.39,291.161,86.39z"></path>{" "}
                                    <path d="M291.161,137.59c51.816,0.061,93.806,42.051,93.867,93.867c0,4.713,3.821,8.533,8.533,8.533 c4.713,0,8.533-3.82,8.533-8.533c-0.071-61.238-49.696-110.863-110.933-110.933c-4.713,0-8.533,3.82-8.533,8.533 S286.448,137.59,291.161,137.59z"></path>
                                    <path d="M291.161,188.79c23.552,0.028,42.638,19.114,42.667,42.667c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533 c-0.038-32.974-26.759-59.696-59.733-59.733c-4.713,0-8.533,3.82-8.533,8.533S286.448,188.79,291.161,188.79z"></path>{" "}
                                  </g>{" "}
                                </g>{" "}
                              </g>{" "}
                              <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                              <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                              <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                            </svg>
                          </div>
                          <div className={classes.detailItemContent}>
                            <div className={classes.detailItemTitle}>Phone</div>
                            <div className={classes.detailItemInner}>
                              <a href="tel:0674 987 665">0674 987 665</a>
                            </div>
                          </div>
                        </li>
                        <li className={classes.li}>
                          <div className={classes.icon}>
                            <svg
                              version="1.1"
                              xmlns="https://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                            >
                              {" "}
                              <g>
                                {" "}
                                <g>
                                  {" "}
                                  <g>
                                    {" "}
                                    <path d="M486.4,59.733H25.6c-14.138,0-25.6,11.461-25.6,25.6v341.333c0,14.138,11.461,25.6,25.6,25.6h460.8 c14.138,0,25.6-11.461,25.6-25.6V85.333C512,71.195,500.539,59.733,486.4,59.733z M494.933,426.667 c0,4.713-3.82,8.533-8.533,8.533H25.6c-4.713,0-8.533-3.82-8.533-8.533V85.333c0-4.713,3.82-8.533,8.533-8.533h460.8 c4.713,0,8.533,3.82,8.533,8.533V426.667z"></path>{" "}
                                    <path d="M470.076,93.898c-2.255-0.197-4.496,0.51-6.229,1.966L266.982,261.239c-6.349,5.337-15.616,5.337-21.965,0L48.154,95.863 c-2.335-1.96-5.539-2.526-8.404-1.484c-2.865,1.042-4.957,3.534-5.487,6.537s0.582,6.06,2.917,8.02l196.864,165.367 c12.688,10.683,31.224,10.683,43.913,0L474.82,108.937c1.734-1.455,2.818-3.539,3.015-5.794c0.197-2.255-0.51-4.496-1.966-6.229 C474.415,95.179,472.331,94.095,470.076,93.898z"></path>{" "}
                                    <path d="M164.124,273.13c-3.021-0.674-6.169,0.34-8.229,2.65l-119.467,128c-2.162,2.214-2.956,5.426-2.074,8.392 c0.882,2.967,3.301,5.223,6.321,5.897c3.021,0.674,6.169-0.34,8.229-2.65l119.467-128c2.162-2.214,2.956-5.426,2.074-8.392 C169.563,276.061,167.145,273.804,164.124,273.13z"></path>{" "}
                                    <path d="M356.105,275.78c-2.059-2.31-5.208-3.324-8.229-2.65c-3.021,0.674-5.439,2.931-6.321,5.897 c-0.882,2.967-0.088,6.178,2.074,8.392l119.467,128c3.24,3.318,8.536,3.442,11.927,0.278c3.391-3.164,3.635-8.456,0.549-11.918 L356.105,275.78z"></path>{" "}
                                  </g>{" "}
                                </g>{" "}
                              </g>{" "}
                              <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                              <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                              <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                            </svg>
                          </div>
                          <div className={classes.detailItemContent}>
                            <div className={classes.detailItemTitle}>Email</div>
                            <div className={classes.detailItemInner}>
                              <a href="mailto:event@gloriathemes.com">
                                event@gloriathemes.com
                              </a>
                            </div>
                          </div>
                        </li>

                        <li className={classes.li}>
                          <div className={classes.icon}>
                            <svg
                              version="1.1"
                              xmlns="https://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              viewBox="0 0 58.995 58.995"
                            >
                              <path d="M39.927,41.929c-0.524,0.524-0.975,1.1-1.365,1.709l-17.28-10.489c0.457-1.144,0.716-2.388,0.716-3.693 c0-1.305-0.259-2.549-0.715-3.693l17.284-10.409C40.342,18.142,43.454,20,46.998,20c5.514,0,10-4.486,10-10s-4.486-10-10-10 s-10,4.486-10,10c0,1.256,0.243,2.454,0.667,3.562L20.358,23.985c-1.788-2.724-4.866-4.529-8.361-4.529c-5.514,0-10,4.486-10,10 s4.486,10,10,10c3.495,0,6.572-1.805,8.36-4.529L37.661,45.43c-0.43,1.126-0.664,2.329-0.664,3.57c0,2.671,1.04,5.183,2.929,7.071 c1.949,1.949,4.51,2.924,7.071,2.924s5.122-0.975,7.071-2.924c1.889-1.889,2.929-4.4,2.929-7.071s-1.04-5.183-2.929-7.071 C50.169,38.029,43.826,38.029,39.927,41.929z M46.998,2c4.411,0,8,3.589,8,8s-3.589,8-8,8s-8-3.589-8-8S42.586,2,46.998,2z M11.998,37.456c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S16.409,37.456,11.998,37.456z M52.654,54.657 c-3.119,3.119-8.194,3.119-11.313,0c-1.511-1.511-2.343-3.521-2.343-5.657s0.832-4.146,2.343-5.657 c1.56-1.56,3.608-2.339,5.657-2.339s4.097,0.779,5.657,2.339c1.511,1.511,2.343,3.521,2.343,5.657S54.166,53.146,52.654,54.657z"></path>{" "}
                              <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                              <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                              <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                            </svg>
                          </div>
                          <div className={classes.detailItemContent}>
                            <div className={classes.detailItemTitle}>
                              Redes sociales
                            </div>
                            <div
                              className={clsx(
                                classes.detailItemInner,
                                classes.socialLinks
                              )}
                            >
                              <a
                                href="https://www.facebook.com/gloriathemes/"
                                target="_blank"
                              >
                                <FacebookIcon />
                              </a>
                              <a
                                href="https://twitter.com/GloriaThemes"
                                target="_blank"
                              >
                                <TwitterIcon />
                              </a>
                              <a
                                href="https://www.instagram.com/gloriathemes/"
                                target="_blank"
                              >
                                <InstagramIcon />
                              </a>
                              <a
                                href="https://www.youtube.com/channel/UCQ33nDAYSrv_IdPH71q33iQ"
                                target="_blank"
                              >
                                <YoutubeIcon />
                              </a>
                            </div>
                          </div>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "1300px",

    "& > h1": {
      margin: 0,
      color: "#fff",
      fontSize: "3rem",
      fontWeight: 600,
      wordBreak: "break-word",
    },
  },

  pageContent: {
    width: "100%",
    borderRadius: "5px",
    padding: "30px",
    backgroundColor: "#fff",
    marginBottom: "30px",
  },

  contentHeader: {
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    margin: "-30px -30px 30px",
    overflow: "hidden",
    position: "relative",
  },
  descriptionContent: {
    fontSize: "14px !important",
    whiteSpace: "break-spaces",
    textAlign: "justify",
  },
  image: {
    verticalAlign: "middle",
    borderStyle: "none",
    maxWidth: "100%",
    height: "auto",
  },
  detailWidget: {
    width: "100%",
    borderRadius: "5px",
    padding: "30px",
    backgroundColor: "#fff",
    marginBottom: "30px",
  },
  widgetTitle: {
    fontSize: "1.231rem",
    marginBottom: "20px",
    fontWeight: 600,
    margin: "-30px -30px 30px",
    borderBottom: "1px solid #eaeaea",
    padding: "30px 30px 25px",
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reactionsBox: {
    display: "flex",
    margin: "-4px",
  },
  like: {
    display: "block",
    color: "#888",
    textTransform: "uppercase",
    fontSize: ".9230769230769231rem",
    fontWeight: 500,
    margin: "4px",

    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  li: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "25px",
    borderBottom: "1px solid #eee",
    paddingBottom: "25px",
  },
  detailItemContent: {
    width: "100%",
  },
  detailItemTitle: {
    textTransform: "uppercase",
    marginBottom: "2px",
    fontWeight: 600,
    fontSize: ".7692rem",
    letterSpacing: "1px",
  },
  detailItemInner: {
    fontSize: ".9231rem",
    color: "#888",

    "& > a": {
      color: "inherit",
      textDecoration: "none",
    },
  },
  socialLinks: {},
  icon: {
    fontSize: "1.923rem",
    lineHeight: "1.923rem",
    paddingRight: "25px",
    width: "60px",

    "& > svg": {
      fill: theme.palette.primary.main,
    },
  },
}));

export default EventById;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { id } = context.params;
    const eventResponse = await axios.get<Event>(
      `${process.env.API_URL}/event/${id}`
    );

    const event = eventResponse.data;

    return {
      props: {
        event,
      },
    };
  } catch {
    return {
      notFound: true,
      props: {},
    };
  }
}
