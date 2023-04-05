import React, { Component } from 'react';

import { smileList, SMILE_VOTE_TEXT as SVT } from '../helpers/data';

export class SmileCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smiles: smileList,
      winner: null,
    };
  }

  vote(id) {
    const smileList = [...this.state.smiles];
    const smile = smileList.find((smile) => smile.id === id);
    smile.votes++;
    this.setState({ smiles: smileList });
  }

  getWinner() {
    const smileList = [...this.state.smiles];
    const winner = smileList.reduce((prev, current) =>
      prev.votes > current.votes ? prev : current
    );
    if (winner.votes !== 0) this.setState({ winner: winner });
  }

  render() {
    return (
      <div className="smile-vote">
        <div className="container">
          <div className="smile-vote-title">{SVT.title}</div>
          <div className="smile-vote-grid">
            {this.state.smiles.map((smile) => (
              <div className="smile-vote-item" key={smile.id}>
                <div className="smile-vote-item-image">{smile.name}</div>
                <div className="smile-vote-item-counter">{smile.votes}</div>
                <button
                  className="btn smile-vote-item-button"
                  onClick={this.vote.bind(this, smile.id)}
                >
                  {SVT.button}
                </button>
              </div>
            ))}
          </div>
          <div className="smile-vote-winner-section">
            <button
              className="btn smile-vote-winner-section-button"
              onClick={this.getWinner.bind(this)}
            >
              {SVT.choose_winner}
            </button>
            {this.state.winner !== null ? (
              <div className="smile-vote-winner-section-result">
                {SVT.winner} {this.state.winner.name}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}