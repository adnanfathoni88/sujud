export interface IProvince {
	id: number;
	name: string;
}

export interface IProvinceList extends Array<IProvince> {}

export interface IRegency {
	id: number;
	idn_province_id: string;
	name: string;
}

export interface IRegencyList extends Array<IRegency> {}

export interface IDistrict {
	id: number;
	idn_regency_id: string;
	name: string;
}

export interface IDistrictList extends Array<IDistrict> {}

export interface IVillage {
	id: number;
	idn_district_id: string;
	name: string;
}

export interface IVillageList extends Array<IVillage> {}