export interface ITransaksi {
	id: number
	tgl_bayar: string
	metode: string
	status: string
	total: string
	pesanan_grup: string
	reference: string
	publisher_order_id: string
	signature: string
	order_id: string
	created_at: string
	updated_at: string
}

export interface ITransactionStatus {
	merchantOrderId: string
	reference: string
	amount: string
	fee: string
	statusCode: string
	statusMessage: string
	Message?: string
}

export interface ITransaksiList extends Array<ITransaksi> {}