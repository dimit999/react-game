import React from 'react'
import Game from './Game'
import Footer from './Footer'

export default class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      showBestResult: false,
      gameSize: [],
    };
    this._showGameComponent = this._showGameComponent.bind(this);
    this._showBestResult = this._showBestResult.bind(this);
    this._setSize = this._setSize.bind(this);
  }

  propsRadioButtons = {
    gameSize: [],
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

  _getSize(state) {
    if (state === 's') {
      return [300, 300]
    } else if(state === 'l') {
      return [450, 450]
    } else {
      return [400, 400]
    }
  }

  _setSize(target) {
    let stateVal = this._getSize(target.currentTarget.id)
    this.setState({
      gameSize: stateVal,
    });
    this.propsRadioButtons.gameSize = stateVal;
  }

render() {
  return (
    this.state.showComponent ?
      <Game {...this.propsRadioButtons}/> :
        <div className='start-wrapper'>
          <div className='start-modal'>
            <div className='start-modal-body'>
              <div className="startGameContainer" >
                <div className="result">
                  <button className="startGame" onClick={this._showGameComponent}>Start game</button>
                  <img className="keyboardImg" src="./assets/keyboard.png" alt="Keyboard" width="60" height="60"></img>
                </div>
                <div className="wrapper">
                  <label className="radioSize" htmlFor="s" id="yes-lbl">S</label><input type="radio" value="" name="choice_radio" id="s" onClick={this._setSize}/>
                  <label className="radioSize" htmlFor="m" id="maybe-lbl">M</label><input type="radio" value="" name="choice_radio" id="m" defaultChecked="checked" onClick={this._setSize}/>
                  <label className="radioSize" htmlFor="l" id="no-lbl">L</label><input type="radio" value="" name="choice_radio" id="l" onClick={this._setSize}/>
                  <div className="toggle"></div>
                </div>
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
          <Footer />
        </div>
      )
    }
}

