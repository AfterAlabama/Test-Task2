import { useNavMenuContext } from '../../Layout';
import cl from './NavMenuIcon.module.scss';

const NavMenuIcon = () => {
	const { openMenuClickHandler } = useNavMenuContext();

	return (
		<>
			<input
				onClick={openMenuClickHandler}
				type='checkbox'
				className={cl.toggler}
			/>
			<div className={cl.menuIcon}>
				<div></div>
			</div>
		</>
	);
};

export default NavMenuIcon;
