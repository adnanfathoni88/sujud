import { IPesanan } from "./pesanan"
import { IProfile } from "./profile"
import { ITransaksi } from "./transaksi"

export interface IBaseOngkir {
	id: number
	pesanan_grup: string
	ekspedisi: string
	ongkir: number
	berat: number
	is_confirmed_by_admin: boolean | 0 | 1
	created_at: string
	updated_at: string
	pelanggan_user_id: number
	pelanggan: IProfile
}

export interface IOngkir extends IBaseOngkir {
	pesanan: IPesanan[],
	transaksi?: ITransaksi
}

export interface IOngkirList extends Array<IBaseOngkir> {}