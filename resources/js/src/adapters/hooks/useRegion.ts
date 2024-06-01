import { useQuery } from "@tanstack/react-query"
import { getDistrict, getProvince, getRegency, getVillage } from "../api/region"

export const useGetProvince = () => {
	return useQuery({
		queryKey: ['useGetProvince'],
		queryFn: () => getProvince()
	})
}

export const useGetRegency = (idn_province_id: string) => {
	return useQuery({
		queryKey: ['useGetRegency', idn_province_id],
		queryFn: () => getRegency(idn_province_id)
	})
}

export const useGetDistrict = (idn_regency_id: string) => {
	return useQuery({
		queryKey: ['useGetDistrict', idn_regency_id],
		queryFn: () => getDistrict(idn_regency_id)
	})
}

export const useGetVillage = (idn_district_id: string) => {
	return useQuery({
		queryKey: ['useGetVillage', idn_district_id],
		queryFn: () => getVillage(idn_district_id)
	})
}