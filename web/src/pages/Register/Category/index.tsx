import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';

// components
import TemplatePage from '../../../Components/TemplatePage';
import FormField from '../../../Components/FormField';
import { Button } from '../../../Components/Button';

// hooks
import useForm from '../../../hooks/useForm';

interface Category {
	titulo: string;
	description: string;
	color: string;
}

const RegisterCategory = () => {

	const formDataInitalValue = {
		titulo: '',
		description: '',
		color: ''
	};

	const { handleChangeValue, values, clearForm } = useForm(formDataInitalValue);

	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		const URL = 'http://localhost:8080/categories';

		fetch(URL).then(async (response) => {
			const categories = await response.json();
			setCategories(categories);
		})

	}, []);

	function handleRegister(event: FormEvent) {

		event.preventDefault();

		setCategories([...categories, values]);
		clearForm();
	}

	return (

		<TemplatePage>
			<h1>Cadastro de Categoria: {values?.titulo}</h1>
			<form onSubmit={handleRegister}>
				<FormField
					label="Nome da Categoria:"
					type="text"
					name="titulo"
					id="titulo"
					value={values?.titulo}
					onChange={handleChangeValue}
				/>
				<FormField
					label="Descricao:"
					type="textarea"
					name="description"
					id="description"
					value={values?.description}
					onChange={handleChangeValue}
				/>
				<FormField
					label="Cor:"
					type="color"
					name="color"
					id="color"
					value={values?.color}
					onChange={handleChangeValue}
				/>

				<Button type="submit">Cadastrar</Button>
			</form>

			<ul>
				{categories && categories.map(category => (
					<li key={category.titulo}>{category.titulo}</li>
				))}
			</ul>

		</TemplatePage>

	);
}

export default RegisterCategory;
