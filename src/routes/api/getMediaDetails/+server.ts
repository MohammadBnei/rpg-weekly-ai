import { json } from '@sveltejs/kit';

export async function POST({ request }: { request: any }) {
	const { title } = await request.json();
	const url = `http://www.omdbapi.com/?apikey=${import.meta.env.OMDB_API_KEY}&t=${title}`;

	const res = await fetch(url);
	const details = await res.json();
	return json(details);
}
