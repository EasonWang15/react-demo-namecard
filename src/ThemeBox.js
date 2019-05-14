import React from 'react'
import ThemeContext from './ThemeContext'

class ThemeBox extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const {name, phone, isHuman, tags} = this.props;
		return (
			<ThemeContext.Consumer>
				{
					theme => {
						return (
							<div className="container light" style={ { backgroundColor: theme.bgColor, color: theme.color} }>
					            <h2>{name}</h2>
					            <ul>
					              <li>电话： {phone}</li>
					              <li>{isHuman ? "人类" : "外星生物"}</li>
					            </ul>
					            <p>
					              <span>好友印象： </span>
					              {
					              	tags.map((tag, index) => {
					              		return (
					              			<span className={theme.className}>{tag}</span>
					              		)
					              	})
					              }
					            </p>
					        </div>
						)
					}
			    }
			</ThemeContext.Consumer>
		)
	}
}

export default ThemeBox