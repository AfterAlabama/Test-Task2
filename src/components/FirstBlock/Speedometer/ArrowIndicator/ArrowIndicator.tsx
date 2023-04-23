import arrow from '../../../../assets/Arrow.png';
import cl from './ArrowIndicator.module.scss';
import { useFirstBlockContext } from '../../FirstBlock/FirstBlock';
import { useEffect, useRef } from 'react';
import { ArrowRotationLogic } from './Logic/ArrowLogic';

const ArrowIndicator = () => {
	const { isFocused } = useFirstBlockContext();
	const arrowCircleRef = useRef<HTMLDivElement>({} as HTMLDivElement);
	const arrowRef = useRef<HTMLImageElement>({} as HTMLImageElement);

	useEffect(() => {
		ArrowRotationLogic(arrowCircleRef, arrowRef, isFocused)
	}, [
		isFocused.firstButton, 
		isFocused.secondButton, 
		isFocused.thirdButton
	]);

	return (
		<>
			<div
				ref={arrowCircleRef}
				className={cl.arrowCircle}
			/>
			<img
				alt='Arrow'
				src={arrow}
				ref={arrowRef}
				className={cl.arrow}
			/>
		</>
	);
};

export default ArrowIndicator;
