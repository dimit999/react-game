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
      gameDot: '',
    };
    this._showGameComponent = this._showGameComponent.bind(this);
    this._showBestResult = this._showBestResult.bind(this);
    this._setSize = this._setSize.bind(this);
    this._setDot = this._setDot.bind(this);
    this._setBackground = this._setBackground.bind(this);
  }

  propsRadioButtons = {
    gameSize: [],
    gameDot: '',
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

  _getDot(state) {
    if (state === 'dot1') {
      return 'Dot1'
    } else if(state === 'dot3') {
      return 'Dot3'
    } else {
      return 'Dot2'
    }
  }

  _setDot(target) {
    let stateDot = this._getDot(target.currentTarget.id)
    this.setState({
      gameDot: stateDot,
    });
    this.propsRadioButtons.gameDot = stateDot;
  }

  _setBackground(target) {
    let backId = target.currentTarget.id
    if (backId === 'back1') {
      document.querySelector('.mainPlace').style.backgroundImage = "url('../dist/assets/back2.png')";
    } else if (backId === 'back3') {
      document.querySelector('.mainPlace').style.backgroundImage = "url('../dist/assets/back3.jpg')";
    } else {
      document.querySelector('.mainPlace').style.backgroundImage = "url('../dist/assets/snake.jpg')";
    }
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
                <div className="sizeTitle">Size of game area:</div>
                <div className="wrapperSize">
                  <label className="radioSize" htmlFor="s" id="yes-lbl">S</label><input type="radio" value="" name="choice_radio" id="s" onClick={this._setSize}/>
                  <label className="radioSize" htmlFor="m" id="maybe-lbl">M</label><input type="radio" value="" name="choice_radio" id="m" defaultChecked="checked" onClick={this._setSize}/>
                  <label className="radioSize" htmlFor="l" id="no-lbl">L</label><input type="radio" value="" name="choice_radio" id="l" onClick={this._setSize}/>
                  <div className="toggleSize"></div>
                </div>
                <div className="dotTitle">Snake design:</div>
                <div className="wrapperDot">
                  <label className="radioDot" htmlFor="dot1" id="yes-lbl-dot"><img className="keyboardImg" src="./assets/dot1.svg" alt="Dot1" width="50" height="50"></img></label><input type="radio" value="" name="drone" id="dot1" onClick={this._setDot}/>
                  <label className="radioDot" htmlFor="dot2" id="maybe-lbl-dot"><img className="keyboardImg" src="./assets/dot2.svg" alt="Dot2" width="50" height="50"></img></label><input type="radio" value="" name="drone" id="dot2" defaultChecked="checked" onClick={this._setDot}/>
                  <label className="radioDot" htmlFor="dot3" id="no-lbl-dot"><img className="keyboardImg" src="./assets/dot3.svg" alt="Dot3" width="50" height="50"></img></label><input type="radio" value="" name="drone" id="dot3" onClick={this._setDot}/>
                  <div className="toggleDot"></div>
                </div>
                <div className="backTitle">Background design:</div>
                <div className="wrapperBack">
                  <label className="radioBack" htmlFor="back1" id="yes-lbl-back">1</label><input type="radio" value="" name="contact" id="back1" onClick={this._setBackground}/>
                  <label className="radioBack" htmlFor="back2" id="maybe-lbl-back">2</label><input type="radio" value="" name="contact" id="back2" defaultChecked="checked" onClick={this._setBackground}/>
                  <label className="radioBack" htmlFor="back3" id="no-lbl-back">3</label><input type="radio" value="" name="contact" id="back3" onClick={this._setBackground}/>
                  <div className="toggleBack"></div>
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

