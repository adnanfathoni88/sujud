export interface IGambar {
	id: number;
	nama: string;
	created_at: string;
	updated_at: string;
}

export interface IGambarList extends Array<IGambar> {}