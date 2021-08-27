import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import { Children } from 'react';

import useStyles from '../utils/styles';

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Next eShop</title>
      </Head>
      <AppBar position='static' className={classes.navbar}>
        <Toolbar>
          <Typography>eShop</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>Tous droits réservés. eShop</Typography>
      </footer>
    </div>
  );
}
