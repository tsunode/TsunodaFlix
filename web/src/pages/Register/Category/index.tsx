import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';

// components
import TemplatePage from '../../../Components/TemplatePage';
import FormField from '../../../Components/FormField';

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

	const [categories, setCategories] = useState<Category[]>([]);
	const [category, setCategory] = useState<Category>(formDataInitalValue);

	useEffect(() => {
		const URL = 'http://localhost:8080/categorias';

		fetch(URL).then(async (response) => {
			const categories =  await response.json();
			setCategories(categories);
		})

	},[]);

	function handleChangeValue(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {

		// get name and value from event.target
		const { name, value } = event.target;

		setCategory({
			...category,
			[name]: value
		});
	}

	function handleRegister(event: FormEvent) {

		event.preventDefault();

		setCategories([...categories, category]);
		setCategory(formDataInitalValue);
	}

	return (

		<TemplatePage>
			<h1>Cadastro de Categoria: {category?.titulo}</h1>
			<form onSubmit={handleRegister}>
				<FormField
					label="Nome da Categoria:"
					type="text"
					name="titulo"
					id="titulo"
					value={category?.titulo}
					onChange={handleChangeValue}
				/>
				<FormField
					label="Descricao:"
					type="textarea"
					name="description"
					id="description"
					value={category?.description}
					onChange={handleChangeValue}
				/>
				<FormField
					label="Cor:"
					type="color"
					name="color"
					id="color"
					value={category?.color}
					onChange={handleChangeValue}
				/>

				<button type="submit">Cadastrar</button>
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
