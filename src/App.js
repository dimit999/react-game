import React from 'react'
import Game from './Game'

export default class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

render() {
  return (
    this.state.showComponent ?
          <Game /> :
          <div className='start-modal modal'>
      <div className='start-modal-body modal-body'>
        <div className="startGame" >
        <button className="startGame" onClick={this._onButtonClick}>Start game</button>
      </div>
      </div>
    </div>
  )
}
}
