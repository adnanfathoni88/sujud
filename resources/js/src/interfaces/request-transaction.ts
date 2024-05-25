export interface IRequestTransaction {
	merchantCode: string;
	reference: string;
	paymentUrl: string;
	vaNumber: string;
	amount: string;
	statusCode: string;
	statusMessage: string;
}