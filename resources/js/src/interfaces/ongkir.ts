import { IPesanan, IPesananList } from "./pesanan"
import { IProfile } from "./profile"
import { ITransaksi } from "./transaksi"

export interface IBaseOngkir {
	id: number
	pesanan_grup: string
	ekspedisi: string
	resi: string
	ongkir: number
	berat: number
	is_confirmed_by_admin: boolean | 0 | 1
	telah_sampai: boolean | 0 | 1
	created_at: string
	updated_at: string
	pelanggan_user_id: number
	pelanggan: IProfile
	pesanan_single?: IPesanan,
}

export interface IOngkir extends IBaseOngkir {
	pesanan: IPesananList,
	transaksi?: ITransaksi
}

export interface IOngkirList extends Array<IBaseOngkir> {}
export interface IOngkirListWithPesanan extends Array<IOngkir> {}