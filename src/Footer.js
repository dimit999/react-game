import React from 'react'

export default class Footer extends React.Component {

render() {
  return (

      <div className="footer">
        <a className="course_link" href="https://rs.school/js/" target="_blank"><img className="course_link__logo" src="./assets/rs_school_js.svg" alt="RS logo"></img></a>
        <a className="year">2021</a>
        <div className="footer__wrapper">
          <div className="social__github_img">
            <a className="github_img__github_link" href="https://github.com/dimit999" target="_blank"><img className="github_img__logo" style={{width: "34px"}} src="./assets/da_git_logo.jpg" alt="Git logo"></img></a>
          </div>
        </div>
      </div>
      )
    }
}


