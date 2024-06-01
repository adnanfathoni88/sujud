import { ChangeEvent, useEffect, useState } from "react";
import { useGetDistrict, useGetProvince, useGetRegency, useGetVillage } from "../../../adapters/hooks/useRegion";
import Select from "../../../components/select";
import TextGroup from "../../../components/text-group";
import Textarea from "../../../components/textarea";
import { P, match } from "ts-pattern";

export default function NewAddress({ setAddress }: {
	setAddress: React.Dispatch<React.SetStateAction<{
		prov: any;
		rege: any;
		dist: any;
		vill: any;
	}>>
}) {
	const [provId, setProvId] = useState<string | null>(null)
	const [regeId, setRegeId] = useState<string | null>(null)
	const [distId, setDistId] = useState<string | null>(null)
	const [villId, setVillId] = useState<string | null>(null)
	const prov = useGetProvince()
	const rege = useGetRegency(provId)
	const dist = useGetDistrict(regeId)
	const vill = useGetVillage(distId)

	const onChangeProv = (e: ChangeEvent<HTMLSelectElement>) => {
		setProvId(e.target.value)
		setRegeId(null)
		setDistId(null)
		setAddress({
			prov: prov.data.data.find((v) => v.id === Number(e.target.value))?.name ?? null,
			rege: null,
			dist: null,
			vill: null,
		})
	}

	const onChangeRege = (e: ChangeEvent<HTMLSelectElement>) => {
		setRegeId(e.target.value)
		setDistId(null)
		setAddress(v => ({
			...v,
			rege: rege.data.data.find((v) => v.id === Number(e.target.value))?.name ?? null,
			dist: null,
			vill: null,
		}))
	}

	const onChangeDist = (e: ChangeEvent<HTMLSelectElement>) => {
		setDistId(e.target.value)
		setAddress(v => ({
			...v,
			dist: dist.data.data.find((v) => v.id === Number(e.target.value))?.name ?? null,
			vill: null,
		}))
	}

	const onChangeVill = (e: ChangeEvent<HTMLSelectElement>) => {
		setVillId(e.target.value)
		setAddress(v => ({
			...v,
			vill: vill.data.data.find((v) => v.id === Number(e.target.value))?.name ?? null,
		}))
	}

	useEffect(() => {
		return () => {
			setAddress({
				prov: null,
				rege: null,
				dist: null,
				vill: null,
			})
		}
	}, [])

	return (
		<>
			<div className="mb-2 mt-3">
				{ Array.isArray(prov?.data?.data) && (
					<Select
						name="prov"
						label="Provinsi"
						defaultValue={ 0 }
						options={ prov.data.data.map((v) => ({ id: v.id, nama: v.name })) }
						onChange={ onChangeProv }
					/>
				) }
			</div>
			<div className="mb-2">
				{ Array.isArray(rege?.data?.data) && rege?.data?.data?.length > 0 && (
					<Select
						name="rege"
						label="Kabupaten/Kota"
						defaultValue={ 0 }
						options={ rege.data.data.map((v) => ({ id: v.id, nama: v.name })) }
						onChange={ onChangeRege }
					/>
				) }
			</div>
			<div className="mb-2">
				{ Array.isArray(dist?.data?.data) && dist?.data?.data?.length > 0 && (
					<Select
						name="dist"
						label="Kecamatan"
						defaultValue={ 0 }
						options={ dist.data.data.map((v) => ({ id: v.id, nama: v.name })) }
						onChange={ onChangeDist }
					/>
				) }
			</div>
			<div className="mb-2">
				{ Array.isArray(vill?.data?.data) && vill?.data?.data?.length > 0 && (
					<Select
						name="vill"
						label="Desa/Kelurahan"
						defaultValue={ 0 }
						options={ vill.data.data.map((v) => ({ id: v.id, nama: v.name })) }
						onChange={ onChangeVill }
					/>
				) }
			</div>
			{ match([provId, regeId, distId, villId])
				.with([P.string, P.string, P.string, P.string], () => (
					<>
						<div className="mb-2">
							<TextGroup
								type="text"
								name="postal"
								title="Kode Pos"
							/>
						</div>
						<div className="mb-2">
							<Textarea
								name="detail"
								label="Detail"
								required={ false }
							/>
						</div>
					</>
				))
				.otherwise(() => null) }
		</>
	)
}