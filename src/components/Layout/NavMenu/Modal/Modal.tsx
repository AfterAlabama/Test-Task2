import { createPortal } from 'react-dom';
import cl from './Modal.module.scss';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useNavMenuContext } from '../../Layout';

const Modal = () => {
	const { isModalVisible, closeMenuClickHandler } = useNavMenuContext();
	const modalRef = useRef<HTMLDivElement>({} as HTMLDivElement);

	useEffect(() => {
		gsap.to(modalRef.current, {
			duration: 1,
			display: isModalVisible ? 'block' : 'none',
			opacity: isModalVisible ? 1 : 0,
		});	
	}, [isModalVisible]);

	return (
		<>
			{createPortal(
				<div
					ref={modalRef}
					className={cl.modal}
					onClick={closeMenuClickHandler}
				/>,
				document.getElementById('modalRoot') as HTMLElement
			)}
		</>
	);
};

export default Modal;
