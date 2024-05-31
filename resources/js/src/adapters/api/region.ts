import { IDistrictList, IProvinceList, IRegencyList, IVillageList } from "../../interfaces/region";
import { apiRegion } from "../../services/api";

export async function getProvince() {
	const r = await apiRegion.get('/provinces')
	return r.data as { data: IProvinceList }
}

export async function getRegency(idn_province_id: string) {
	const r = await apiRegion.get(`/regencies/${idn_province_id}`)
	return r.data as { data: IRegencyList }
}

export async function getDistrict(idn_regency_id: string) {
	const r = await apiRegion.get(`/districts/${idn_regency_id}`)
	return r.data as { data: IDistrictList }
}

export async function getVillage(idn_district_id: string) {
	const r = await apiRegion.get(`/villages/${idn_district_id}`)
	return r.data as { data: IVillageList }
}