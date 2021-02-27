import React from 'react'

export default class PreModalPopUp extends React.Component {

  render() {
    return (
      <div className='modal'>
        <div className='modal-body'>
          <h1>Game Over.</h1>
          <p className="snakeLengthPopUp">Snake length is {this.props.snakeDotsLength}.</p>
          <p className="bestResult">THE BEST result is {localStorage.getItem('snakeGameLength')}.</p>
          <button onClick={() => this.props.handleToUpdate()}>Close pop-up</button>
        </div>
      </div>
    )
  }
}
