import ButtonSwitch from "../../components/button-switch"
import { useGetProductList } from "../../adapters/hooks/useProducts"

export default function ProductModule() {
	const { data } = useGetProductList()

	return (
		<>
			<ButtonSwitch />
			<p className="text-cyan-600">Product Page</p>
			<hr />
			<pre>
				{ JSON.stringify(data, null, 2) }
			</pre>
		</>
	)
}