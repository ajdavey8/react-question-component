import React, { Component } from 'react';
import './App.css';
import Toggle from 'react-toggle';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      question: "An animal cell contains",
      answers: [{ id: "id1", correct: "unchecked", checked: "Cell Wall", unchecked: "Ribosome"}, { id: "id2", correct: "checked", checked: "Cytoplasm", unchecked: "Chloroplast"}, { id: "id3", correct: "unchecked", checked: "Cellulose", unchecked: "Mitochondria"}],
    };
  }

  handleChange(e) {
    const name = e.target.id;
    const value = e.target.checked;
    if (value === true) {
      this.setState({[name]: "unchecked"});
    } else if (value === false) {
      this.setState({[name]: "checked"});
    }
  }

  render() {
    let result = "Incorrect Answer";
    let disable = false;

    if (this.state.id1 === this.state.answers[0].correct && this.state.id2 === this.state.answers[1].correct && this.state.id3 === this.state.answers[2].correct) {
      result="Correct Answer";
      disable=true;
    }
    return (
      <div className="App" >
        <header className="App-header">
          <h1 >{this.state.question}</h1>
        </header>
          {
            this.state.answers.map(answer => (
              <div className="answers" key={answer.id}>
              <Toggle
              id={answer.id}
              onChange={this.handleChange}
              disabled={disable}
              icons={{
                checked:answer.checked,
                unchecked: answer.unchecked,
              }}
               />
              </div>
            ))
          }
          <div>
          <h2>{result}</h2>
          </div>
      </div>
    );
  }
}

export default App;
