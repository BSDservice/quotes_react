import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Twitter} from '@material-ui/icons';
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
    <Card id="quote-box" className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Слово Дня
        </Typography>
        <Typography id="text" variant="h5" component="blockquote" style={{color: props.color, transitionDuration: '1s',
                   transitionProperty: 'color'}}>
            {props.cite}
        </Typography>
        <Typography id="author" className={classes.autor} variant="h6" component="figcaption" color="textSecondary">
          -<cite>{props.author}</cite>
        </Typography>
      </CardContent>
      <CardActions className={classes.buttons}>
        <div style={{textAlign:"left"}}>        
        <IconButton id="tweet-quote" component="a" href="https://twitter.com/intent/tweet" target="_blank">
            <Twitter fontSize="large"></Twitter>
        </IconButton>
        </div>
        <div style={{textAlign:"right"}}>
          <Button id="new-quote" variant="contained" size="small" onClick={props.nextCite} color='secondary'>New quote</Button>
        </div>
      </CardActions>
    </Card>
  );
}
