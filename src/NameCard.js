import React, { Component, Fragment } from 'react'
import ThemeContext from './ThemeContext'
import ThemeBox from './ThemeBox'

const themes = {
  light: {
    className: "btn btn-primary",
    bgColor: "#fff",
    color: "#333"
  },
  dark: {
    className: "btn btn-light",
    bgColor: "#333",
    color: "#fff"
  }
}

class NameCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: "light"
    }
  }
  changeTheme(theme) {
    this.setState({theme})
  }
  render() {
    const tags = ["帅气", "高大"]
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <Fragment>
          <div className="jumbotron text-center">
            <h1 className="mb-5">NameCard</h1>
            <div>
              <button className="btn btn-secondary" onClick={() => {this.changeTheme("light")}}>浅色主题</button>
              <button className="btn btn-primary ml-5" onClick={() => {this.changeTheme("dark")}}>深色主题</button>
            </div>
          </div>
          <ThemeBox name="Eason" phone="137****0753" isHuman tags={tags}/>
        </Fragment>
      </ThemeContext.Provider>
    )
  }
}

export default NameCard;