import React from "react";
import {Grid} from "@material-ui/core";
import CardCite from './CardCite'

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
  
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cite: 'Это цитата Великого Человека',
      author: 'Великий Человек',
      color: colors[Math.floor(Math.random()*12)]
    }
    this.nextCite = this.nextCite.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
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

  componentDidMount(){
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", {
        "method": "GET",
        "headers": {
          Accept: 'application/json'
        }
      })
      .then(response => {
        return response.json();
      })
      .then(data => App.quotes = data.quotes)
      .catch(err => {
        console.error(err);
      });

      this.quotesGen = function*(){
        for (let quote of App.quotes) {
          let color = colors[Math.floor(Math.random()*12)]
          yield [quote, color]
        }
      }()    
  }
  render(){
    console.log(Math.random()*12 ,this.state.color)
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
