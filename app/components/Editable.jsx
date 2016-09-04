import React from 'React';

export default ({editing, value, onEdit, ...props}) => {
	if(editing) {
		return <Edit value={value} onEdit={onEdit} {...props}/>;
	} else {
		return (<span {...props}>{value}</span>);
	}

};


class Edit extends React.Component {
	construct(props) {

	}

	render() {
		const {value, ...props} = this.props;

		return (
			<input
				type="text"
				autoFocus={true}
				defaultValue={value}
				onBlur={this.finishEdit}
				onKeyPress={this.checkEnter}
				{...props}
			/>
		);
	}

	finishEdit = (e) => {
		const value = e.target.value;

		if(this.props.onEdit) {
			this.props.onEdit(value);
		}
	}

	checkEnter = (e) => {
		if(e.key === 'Enter') {
			this.finishEdit(e);
		}
	}
}
