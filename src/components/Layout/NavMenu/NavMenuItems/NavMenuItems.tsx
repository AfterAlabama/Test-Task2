import cl from './NavMenuItems.module.scss';
import { useNavMenuContext } from '../../Layout';

const NavMenuItems = () => {
	const { closeMenuClickHandler, menuRef } = useNavMenuContext();

	return (
		<div
			ref={menuRef}
			className={cl.menu}
		>
			<div onClick={closeMenuClickHandler}>
				<div className={cl.closeMenuIcon} />
			</div>
			<ul>
				{[1, 2, 3, 4].map((val) => (
					<li key={val}>
						Menu {val}
						<div>GO</div>
					</li>
				))}
				<li>8 800 000 00 00</li>
			</ul>
		</div>
	);
};

export default NavMenuItems;
