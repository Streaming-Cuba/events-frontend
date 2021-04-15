import React from 'react';

import { Container, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { NextSeo } from 'next-seo';
import Carousel from '../components/Carousel';

function IndexPage() {
  const classes = useStyles();

  return (
    <>
      <NextSeo title="Eventos" description="Eventos de StreamingCuba" />
      <div style={{ overflowX: 'hidden' }}>
        <section className={classes.homeSection}>
          <Carousel />
        </section>
        {/*<section>*/}
        {/*  <Grid container justify="space-evenly" spacing={4}>*/}
        {/*    <Grid item xs={4}>*/}
        {/*      <FeatureCard />*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={4}>*/}
        {/*      <FeatureCard />*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={4}>*/}
        {/*      <FeatureCard />*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*</section>*/}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  homeSection: {
    position: 'relative',
  },
  carouselContainer: {
    maxWidth: '100vw',
    minHeight: '100vh',
    padding: 0,
    backgroundColor: '#614da7',

    alignContent: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default IndexPage;
