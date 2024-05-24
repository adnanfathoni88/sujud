import { IProfile } from "./profile";
import { IVariant } from "./variant";

export interface ICart {
	id: number;
	qty: number;
	created_at: string;
	updated_at: string;
	user_id: number;
	varian_id: number;
	varian?: IVariant;
	user?: IProfile
}

export interface ICartList extends Array<ICart> {}