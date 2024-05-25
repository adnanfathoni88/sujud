export interface IPaymentMethod {
	paymentMethod: string;
	paymentName: string;
	paymentImage: string;
	totalFee: number;
}

export interface IPaymentMethodList extends Array<IPaymentMethod> {}