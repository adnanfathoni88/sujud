import { ReactNode, useEffect, useState } from 'react';
import { useLocationUrlId } from '../../../store/useLocationUrlId';

interface SidebarLinkGroupProps {
	children: (handleClick: () => void, open: boolean) => ReactNode;
	locationId: string;
}

const SidebarLinkGroup = ({
	children,
	locationId,
}: SidebarLinkGroupProps) => {
	const currentLocationId = useLocationUrlId((s) => s.value);
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => { setOpen(currentLocationId.includes(locationId)) }, [currentLocationId])

	const handleClick = () => {
		setOpen(!open);
	};

	return <li>{ children(handleClick, open) }</li>;
};

export default SidebarLinkGroup;
