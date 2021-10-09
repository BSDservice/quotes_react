import React from "react";
import {Grid} from "@material-ui/core";
import CardCite from './CardCite';

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'];

var quotes = [

  {
         "quote":"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse"},
  {
         "quote":"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill"},
  {
         "quote":"Strive not to be a success, but rather to be of value.","author":"Albert Einstein"},
  {
         "quote":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.","author":"Robert Frost"},
  {
         "quote":"I attribute my success to this: I never gave or took any excuse.","author":"Florence Nightingale"},
  {
         "quote":"You miss 100% of the shots you don’t take.","author":"Wayne Gretzky"},
  {
         "quote":"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.","author":"Michael Jordan"},
  {
         "quote":"The most difficult thing is the decision to act, the rest is merely tenacity.","author":"Amelia Earhart"},
  {
         "quote":"Every strike brings me closer to the next home run.","author":"Babe Ruth"},
  {
         "quote":"Definiteness of purpose is the starting point of all achievement.","author":"W. Clement Stone"},
  {
         "quote":"We must balance conspicuous consumption with conscious capitalism.","author":"Kevin Kruse"},
  {
         "quote":"Life is what happens to you while you’re busy making other plans.","author":"John Lennon"},
  {
         "quote":"We become what we think about.","author":"Earl Nightingale"}];

fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", {
    "method": "GET",
    "headers": {
      Accept: 'application/json'
    }
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    quotes = data.quotes;
  })
  .catch(err => {
    console.error(err);
  });
  
class App extends React.Component {
  
  constructor(props){
    super(props);
    let startCite = quotes[Math.floor(Math.random()*Number(quotes.length))]
    this.state = {
      cite: startCite.quote,
      author: startCite.author,
      color: colors[Math.floor(Math.random()*12)]
    }
    this.quotesGen = function*(){
      for (let quote of quotes) {
        let color = colors[Math.floor(Math.random()*12)]
        yield [quote, color]
      }
    }()
    this.nextCite = this.nextCite.bind(this)
  }
  

  nextCite(){
      let arr = this.quotesGen.next().value
      let obj = arr[0]
      let color = arr[1]
      this.setState({
        cite: obj.quote,
        author: obj.author,
        color: color
      })
  }
  
  render(){
    return (      
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spaicing={0}
          style={{ minHeight: '100vh',
                   backgroundColor: this.state.color,
                   transitionDuration: '2s',
                   transitionProperty: 'background-color' }}
        >
          <Grid item xs={3}>
            <CardCite cite={this.state.cite} author={this.state.author} nextCite={this.nextCite} color={this.state.color}/>
          </Grid>
        </Grid>      
    );
  }
}

export default App;
