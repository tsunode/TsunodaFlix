import React, { ChangeEvent } from 'react';

// styles
import { FormFieldWrapper, Span, Input } from './styles';

interface Props {
	label: string;
	type: string;
	name: string
	id: string;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormField: React.FC<Props> = (props) => {

	const isTextArea = props.type === 'textarea';
	const tag = isTextArea ? 'textarea' : 'input';

	return (
		<FormFieldWrapper>
			<label htmlFor={props.id}>

				<Input
					as={tag}
					type={props.type}
					name={props.name}
					id={props.id}
					value={props.value}
					onChange={props.onChange}
				/>
				<Span>
					{props.label}
				</Span>
			</label>
		</FormFieldWrapper>
	);
}

export default FormField;
