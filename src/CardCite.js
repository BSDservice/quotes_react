import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Facebook, Twitter, FormatQuoteRounded} from '@material-ui/icons';
import {IconButton, Button, Typography, CardContent, CardActions, Card} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 20, 
  },
  title: {
    fontSize: 14,
  },
  autor: {
    marginBottom: 12,
    textAlign: 'right',
  },
  buttons: {
    display: "flex",
    justifyContent: 'space-between'
  }
});

export default function CardCite(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h4" component="blockquote" style={{color: props.color, transitionDuration: '1s',
                   transitionProperty: 'color'}}>
            {props.cite}
        </Typography>
        <Typography className={classes.autor} variant="h6" component="figcaption" color="textSecondary">
          -<cite>{props.author}</cite>
        </Typography>
      </CardContent>
      <CardActions className={classes.buttons}>
        <div style={{textAlign:"left"}}>        
        <IconButton>
            <Twitter fontSize="large"></Twitter>
        </IconButton>
          <IconButton>
            <Facebook fontSize="large"></Facebook>
          </IconButton>
        </div>
        <div style={{textAlign:"right"}}>
          <Button variant="contained" size="small" onClick={props.nextCite} color='primary'>New quote</Button>
        </div>
      </CardActions>
    </Card>
  );
}
