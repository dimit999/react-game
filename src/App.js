import React from 'react'
import Game from './Game'

export default class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      showBestResult: false,
    };
    this._showGameComponent = this._showGameComponent.bind(this);
    this._showBestResult = this._showBestResult.bind(this);
  }

  _showGameComponent() {
    this.setState({
      showComponent: true,
    });
  }

  _showBestResult() {
    this.setState({
      showBestResult: !this.state.showBestResult,
    });
  }

render() {
  return (
    this.state.showComponent ?
      <Game /> :
        <div className='start-modal modal'>
          <div className='start-modal-body'>
            <div className="startGameContainer" >
              <button className="startGame" onClick={this._showGameComponent}>Start game</button>
              <button className="showBestResult" onClick={this._showBestResult}>Show best result</button>
              {this.state.showBestResult && localStorage.getItem('snakeGameLength') != null && (
                  <div className="result">
                    <div className="bestResult">The best result is <strong>{localStorage.getItem('snakeGameLength')}</strong>.</div>
                  </div>
                )}
              {this.state.showBestResult && localStorage.getItem('snakeGameLength') == null && (
                <div className="result">
                  <div className="bestResult">No any results yet.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }
}

