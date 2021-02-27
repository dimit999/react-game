import React from 'react'

export default class PreModalPopUp extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    this.state.isShow = this.props.appProps.isShow;
    return (
      <React.Fragment>
        {this.state.isShow && (
          <div className='modal'>
            <div className='modal-body'>
              <h1>Game Over.</h1>
              <p className="snakeLengthPopUp">Snake length is {this.props.appProps.snakeDotsLength}.</p>
              <p className="bestResult">THE BEST result is {localStorage.getItem('snakeGameLength')}.</p>
              {/* <button onClick={() => this.setState({ isOpen: false })}> */}
              {/* <button onClick={() => this.changeState}>
                Close modal
              </button> */}
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}
