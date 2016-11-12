import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseAction';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component{
	
	constructor(props, context){
		super(props, context);
		this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
	}

	redirectToAddCoursePage(event){
		browserHistory.push('course');
	}

	render(){
		return (
			<div>
				<h1>Courses</h1>
				<input type="submit"
					value="Add Course"
					className="btn btn-primary"
					onClick={this.redirectToAddCoursePage} />
				<CourseList courses={this.props.courses} />
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
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);