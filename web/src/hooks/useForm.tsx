import React, { useState, ChangeEvent } from 'react';

const useForm = (formDataInitalValue: any) => {

	const [values, setValues] = useState(formDataInitalValue);

	function handleChangeValue(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {

		// get name and value from event.target
		const { name, value } = event.target;

		setValues({
			...values,
			[name]: value
		});
	}

	function clearForm(){
		setValues(formDataInitalValue);
	}

	return {
		handleChangeValue,
		clearForm,
		values
	}
}

export default useForm;
