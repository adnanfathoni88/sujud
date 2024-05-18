export interface ICategory {
	id: number;
	nama: string;
	created_at: string;
	updated_at: string;
}

export interface ICategoryList extends Array<ICategory> {}	 
