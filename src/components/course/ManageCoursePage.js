import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseAction';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component{
	
	constructor(props, context){
		super(props, context);
		this.state = {
			course: Object.assign({}, this.props.course),
			authors: Object.assign({}, this.props.course),
			errors: {}
		};
		this.updateCourseState = this.updateCourseState.bind(this);
		this.saveCourse = this.saveCourse.bind(this);
	}

	componentWillReceiveProps(nextProps){
		if(this.props.course.id != nextProps.course.id){
			this.setState({course : Object.assign({}, nextProps.course)});
		}
	}

	updateCourseState(event){
		const field = event.target.name;
		let course = this.state.course;
		course[field] = event.target.value;
		return this.setState({course:course});
	}

	saveCourse(event){
		event.preventDefault();
		this.props.actions.saveCourse(this.state.course);
		this.context.router.push('/courses');
	}

	render(){
		return (
			<CourseForm
					course={this.state.course}
					allAuthors={this.props.authors}
					errors={this.state.errors} 
					onChange={this.updateCourseState}
					onSave={this.saveCourse} />
		);
	}
}

function getCourseById(courses, id){
	const course = courses.filter(course => course.id ==id);
	if(course) return course[0];
	return null;
}

function mapStateToProps(state, ownProps){
	const courseId = ownProps.params.id;
	let course = {id:'', title: '', authorId: '',category: '', length:''};
	if(courseId && state.courses.length > 0){
		course = getCourseById(state.courses, courseId);
	}
	const authorsFormattedForDropdown = state.authors.map(author => {
		return {
			value: author.id,
			text: author.firstName+' '+author.lastName
		};
	});
	return {
		course: course,
		authors: authorsFormattedForDropdown
	};
}

ManageCoursePage.propTypes = {
	course: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
	router: PropTypes.object
};

function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);