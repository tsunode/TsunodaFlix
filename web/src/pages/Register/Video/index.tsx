import React, { FormEvent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// components
import TemplatePage from '../../../Components/TemplatePage';
import FormField from '../../../Components/FormField';
import { Button } from '../../../Components/Button';

// hooks
import useForm from '../../../hooks/useForm';

// server
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

interface Category {
	id: number;
	title: string;
	description: string;
	color: string;
}

const RegisterVideo = () => {

	const history = useHistory();
	const formDataInitalValue = {
		title: '',
		url: '',
		category: ''
	};

	const [categories, setCategories] = useState<Category[]>();
	const { handleChangeValue, values, clearForm } = useForm(formDataInitalValue);

	useEffect(() => {
		categoriesRepository.getAll().then((response) => {
			setCategories(response);
		});
	}, []);

	function handleRegister(event: FormEvent) {
		event.preventDefault();

		const { title, url, category } = values;
		const formData = new FormData();

		if (categories !== undefined && categories.length > 0) {
			const categoryFinded = categories.find((category) => category.title === values.category);

			if(categoryFinded !== undefined){
				const categoryId: number = categoryFinded.id;

				videosRepository.create({
					title,
					url,
					categoryId
				}).then(() => {
					alert("Cadastro realizado com sucesso");
					history.push('/');
				});
			}else{
				alert("Categoria não encotrada");
			}
		}else{
			alert("Nenhuma cateogria cadastrada");
		}


	}

	return (

		<TemplatePage>
			<h1>Cadastro de Vídeo</h1>

			<form onSubmit={handleRegister}>
				<FormField
					label="Título do Vídeo:"
					type="text"
					name="title"
					id="title"
					value={values?.title}
					onChange={handleChangeValue}
				/>

				<FormField
					label="URL"
					type="text"
					name="url"
					id="url"
					value={values?.url}
					onChange={handleChangeValue}
				/>

				<FormField
					label="Categoria"
					type="text"
					name="category"
					id="category"
					value={values?.category}
					onChange={handleChangeValue}
					suggestions={categories?.map(({title}) => title)}
				/>

				<Button type="submit">Cadastrar</Button>
			</form>

			<Link to="/cadastro-categoria">
				Cadastrar Categoria
			</Link>
		</TemplatePage>

	);
}

export default RegisterVideo;
