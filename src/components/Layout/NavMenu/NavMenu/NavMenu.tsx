import cl from './NavMenu.module.scss';
import NavMenuIcon from '../NavMenuIcon/NavMenuIcon';
import NavMenuItems from '../NavMenuItems/NavMenuItems';

const NavMenu = () => {
	return (
		<div className={cl.menuWrapper}>
			<NavMenuIcon />
			<NavMenuItems />
		</div>
	);
};

export default NavMenu;
