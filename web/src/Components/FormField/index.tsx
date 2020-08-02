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
	suggestions?: string[];
}

const FormField: React.FC<Props> = (props) => {

	const isTextArea = props.type === 'textarea';
	const tag = isTextArea ? 'textarea' : 'input';

	const hasSuggestions = props.suggestions !== undefined;

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
					autoComplete="off"
					list={`datalist${props.id}`}
				/>
				<Span>
					{props.label}
				</Span>
				{
					hasSuggestions &&
					<datalist id={`datalist${props.id}`}>
						{
							props.suggestions?.map((suggestion) => (
								<option key={suggestion} value={suggestion} >
									{suggestion}
								</option>
							))
						}
					</datalist>
				}
			</label>
		</FormFieldWrapper>
	);
}

export default FormField;
