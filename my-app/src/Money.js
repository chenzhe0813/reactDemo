import React from 'react';

export default class Money extends React.Component{
	constructor(props){
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		let type = this.props.type;
		this.props.moneyChange(type,e.target.value);
	}

	render(){
		return(
			<div>
				<input type="text" value={this.props.money} onChange={this.handleChange}/>
			</div>
		)
	}
}