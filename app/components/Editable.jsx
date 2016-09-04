import React from 'React';
import classnames from 'classnames';


export default ({editing, value, onEdit, className, ...props}) => {
	if(editing) {
		return <Edit value={value} onEdit={onEdit}  className={className} {...props}/>;
	} else {
		return (<span {...props}>{value}</span>);
	}

};


class Edit extends React.Component {
	construct(props) {

	}

	render() {
		const {className, onEdit, value, ...props} = this.props;

		return (
			<input
				className={classnames('edit', className)}
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
