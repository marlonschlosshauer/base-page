import {
	HeaderNavigation,
	ALIGN,
	StyledNavigationItem as NavigationItem,
	StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';
import { Avatar } from "baseui/avatar";

import logo from '../logo.svg';

function Header() {
	return (
		<div>
			<HeaderNavigation>
				<NavigationList $align={ALIGN.left}>
					<NavigationItem>
						<Avatar name="logo" src={logo} />
					</NavigationItem>
					<NavigationItem>Dashboard</NavigationItem>
					<NavigationItem>Users</NavigationItem>
					<NavigationItem>Test</NavigationItem>
				</NavigationList>
			</HeaderNavigation>
		</div>
	);
}

export default Header;
