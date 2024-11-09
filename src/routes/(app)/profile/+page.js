import { redirect } from '@sveltejs/kit';

export async function load({ parent }) {
	const user = 'nott'
	redirect(307, user ? `/profile/@${user}` : '/login');
}