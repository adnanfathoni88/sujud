import { IProduct } from "./product"
import { IVariant } from "./variant"

interface IProdukInVarian extends IVariant {
	produk: IProduct
}

export interface IPesanan {
	id: number
	alamat: string
	pesanan_grup: string
	qty: number
	total: number
	diskon: number
	tgl_pesan: string
	status: string
	created_at: string
	updated_at: string
	varian_id: number
	user_id: number
	varian?: IProdukInVarian
}