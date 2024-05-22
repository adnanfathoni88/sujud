import { IProfile } from "./profile";

export interface IReplyUlasan {
	id: number;
	konten: string;
	rating: number;
	created_at: string;
	updated_at: string;
	varian_id: number;
	user_id: number;
	parent_id?: number;
	is_replied: number;
	user?: IProfile
}

export interface IReplyUlasanList extends Array<IReplyUlasan> {}