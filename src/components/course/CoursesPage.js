import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseAction';

class CoursesPage extends React.Component{
	
	constructor(props, context){
		super(props, context);
		this.state = {
			course: { title: ''}
		};
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}

	onTitleChange(event){
		const course = this.state.course;
		course.title = event.target.value;
		this.setState({course: course});
	}

	onClickSave(event){
		this.props.actions.createCourse(this.state.course);
	}

	courseRow(course, index){
		return <div key={index}>{course.title}</div>;
	}

	render(){
		return (
			<div>
				<h1>Courses</h1>
				{this.props.courses.map(this.courseRow)}
				<h2>Add Course</h2>
				<input
					type="text"
					onChange={this.onTitleChange}
					value={this.state.course.tltle} />
				<input
					type="submit"
					value="Save"
					onClick={this.onClickSave} />
			</div>
		);
	}
}

function mapStateToProps(state, ownProps){
	return {
		courses: state.courses
	};
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(courseActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);