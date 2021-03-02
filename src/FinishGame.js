import React from 'react'

export default class FinishGame extends React.Component {

  render() {
    return (
      <div className='modal'>
        <div className='modal-body'>
          <h1 className="title-pop-up">Game Over</h1>
          <p className="snakeLengthPopUp">Snake length was <strong>{this.props.snakeDotsLength}</strong>.</p>
          <div className="bestResult">The best result is <strong>{localStorage.getItem('snakeGameLength')}</strong>.</div>
          <div className="close-btn-container">
            <button className="closePopUp" onClick={() => this.props.handleToUpdate()}>Repeat game</button>
            <button className="finishGame" onClick={() => this.props.refresh()}>Finish game</button>
          </div>
        </div>
      </div>
    )
  }
}
