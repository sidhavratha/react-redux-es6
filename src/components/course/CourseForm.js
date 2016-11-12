import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
	return (
		<form>
			<h1>Manage Course1</h1>
			<TextInput 
				name="title"
				label="Title"
				value={course.title}
				onChange={onChange}
				error={errors.title} />

			<SelectInput
				name="authorId"
				label="Author"
				value={course.authorId}
				defaultOption="Select Author"
				options={allAuthors}
				onChange={onChange} error={errors.authorId} />

			<TextInput 
				name="category"
				label="Category"
				value={course.category}
				onChange={onChange}
				error={errors.category} />

			<TextInput 
				name="length"
				label="Length"
				value={course.length}
				onChange={onChange}
				error={errors.length} />

			<input 
				type="submit"
				disabled={loading}
				value={loading ? 'Saving...': 'Save'}
				className="btn btn-default"
				onClick={onSave} />
		</form>
	);
};

CourseForm.propTypes = {
	course: PropTypes.object.isRequired,
	errors: PropTypes.object,
	allAuthors: PropTypes.array.isRequired,
	loading: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired
};

export default CourseForm;