import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cars from "./cars.json";
import './App.css';

class App extends Component {
  // Setting this.state.cars to the cars json array
  state = {
    cars,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cars.forEach(card => {
      card.count = 0;
    });
    alert(`Game over! Please try again. \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    // eslint-disable-next-line
    this.state.cars.find((o, i) => {
      if (o.id === id) {
        if(cars[i].count === 0){
          cars[i].count = cars[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cars.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

  // Map over this.state.cars and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}><strong>Race Car Clicker:</strong> Don't Click an Image Twice!</Header>
        {this.state.cars.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;