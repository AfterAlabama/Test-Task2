import {
	FC,
	MutableRefObject,
	ReactNode,
	createContext,
	useContext,
	useRef,
	useState,
} from 'react';
import cl from './Layout.module.scss';
import upperWave from '../../assets/Upwave.png';
import lowerWave from '../../assets/Downwave.png';
import { useImagePreloader } from '../../hooks/useImagePreloader';
import arrow from '../../assets/Arrow.png';
import NavMenu from './NavMenu/NavMenu/NavMenu';
import { gsap } from 'gsap';
import Modal from './NavMenu/Modal/Modal';
import { useBlocksContext } from '../MainComponent/MainComponent';

interface LayoutProps {
	children: ReactNode;
}

interface NavMenuContextProps {
	isModalVisible: boolean;
	openMenuClickHandler: () => void;
	closeMenuClickHandler: () => void;
	menuRef: MutableRefObject<HTMLDivElement>;
}

const NavMenuContext = createContext<NavMenuContextProps>(
	{} as NavMenuContextProps
);

export const useNavMenuContext = () => useContext(NavMenuContext);

const Layout: FC<LayoutProps> = ({ children }) => {
	const { imagesPreloaded } = useImagePreloader([upperWave, lowerWave, arrow]);

	const [isModalVisible, setIsModalVisible] = useState(false);
	const menuRef = useRef<HTMLDivElement>({} as HTMLDivElement);
	const { layoutRef } = useBlocksContext();

	const openMenuClickHandler = () => {
		gsap.to(menuRef.current, {
			x: window.screen.availWidth >= 1201 ? 400 : 600,
			duration: 1.5,
			ease: 'power4',
			onStart: () => {
				setIsModalVisible(true);
			},
		});
	};

	const closeMenuClickHandler = () => {
		gsap.to(menuRef.current, {
			duration: 1.5,
			x: 0,
			ease: 'power4',
			onStart: () => {
				setIsModalVisible(false);
			},
		});
	};

	return (
		<>
			{imagesPreloaded && (
				<NavMenuContext.Provider
					value={{
						isModalVisible,
						openMenuClickHandler,
						closeMenuClickHandler,
						menuRef,
					}}
				>
					<div
						ref={layoutRef}
						className={cl.layoutContainer}
					>
						<div>
							<NavMenu />
							<img
								alt='UpperWave'
								src={upperWave}
								className={cl.upperWave}
							/>
							<div 
							className={cl.layoutChildrenContainer}>
								{children}
							</div>
							<img
								alt='LowerWave'
								src={lowerWave}
								className={cl.lowerWave}
							/>
							<Modal />
						</div>
					</div>
				</NavMenuContext.Provider>
			)}
		</>
	);
};

export default Layout;
