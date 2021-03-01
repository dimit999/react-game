import React from 'react'

export default class PreModalPopUp extends React.Component {

  render() {
    return (
      <div className='modal'>
        <div className='modal-body'>
          <h1 className="title-pop-up">Game Over</h1>
          <p className="snakeLengthPopUp">Snake length is <strong>{this.props.snakeDotsLength}</strong>.</p>
          <div className="bestResult">The best result is <strong>{localStorage.getItem('snakeGameLength')}</strong>.</div>
          <div className="close-btn-container">
            <button className="closePopUp" onClick={() => this.props.handleToUpdate()}>Close pop-up</button>
          </div>
        </div>
      </div>
    )
  }
}
