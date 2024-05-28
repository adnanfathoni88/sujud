import { IProfile } from "./profile";

export interface IBaseUlasan {
    id: number;
    konten: string;
    rating: number;
	user_id: number;
    created_at: string;
    updated_at: string;
	is_replied: boolean | 0 | 1;
	varian_id: number;
	user?: IProfile
}

export interface IUlasanList extends Array<IBaseUlasan> {}
