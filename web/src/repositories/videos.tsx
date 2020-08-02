import config from '../config'

const URL_VIDEOS = `${config.BASE_URL}/videos`

interface Video {
	title: string;
	url: string;
	categoryId: number;
}

const create = (dataForm: Video) => {

	return fetch(`${URL_VIDEOS}?_embed=videos`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify(dataForm)
	}).then(async (response) => {

		if (response.ok)
			return await response.json();

		throw new Error(`It wasn't possible to get the data`);
	})


}

export default {
	create
}
