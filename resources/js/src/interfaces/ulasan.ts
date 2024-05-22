export interface IBaseUlasan {
    id: number;
    konten: string;
    rating: number;
	user_id: number;
    created_at: string;
    updated_at: string;
}

export interface IUlasanList extends Array<IBaseUlasan> {}
