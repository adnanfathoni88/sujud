import { Link } from "@tanstack/react-router";

export default function ButtonSwitch() {
	return (
		<div>
			<Link to="/product">Product List</Link>
			<Link to="/product/1">Product 1</Link>
			<Link to="/product/2">Product 2</Link>
		</div>
	)
}