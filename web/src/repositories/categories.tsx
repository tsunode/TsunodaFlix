import config from '../config'

const URL_CATEGORIES = `${config.BASE_URL}/categories`

const getAllWithVideos = () => {

	return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (response) => {

		if (response.ok)
			return await response.json();

		throw new Error(`It wasn't possible to get the data`);
	})


}

const getAll = () => {

	return fetch(`${URL_CATEGORIES}`).then(async (response) => {

		if (response.ok)
			return await response.json();

		throw new Error(`It wasn't possible to get the data`);
	})


}

export default {
	getAllWithVideos,
	getAll
}
