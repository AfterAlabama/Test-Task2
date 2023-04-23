import { FirstBlockStateType } from '../../../FirstBlock/FirstBlock';
import styles from '../../../../../styles/_variables.module.scss';
import { MutableRefObject } from 'react';
import { gsap } from 'gsap';

const arrowCircleColorCondition = (
	isFocused: FirstBlockStateType
): string => {
	if (isFocused.secondButton) return styles.secondButtonColor;
	if (isFocused.thirdButton) return styles.thirdButtonColor;
	return styles.firstButtonColor;
};

const arrowRotateCondition = (isFocused: FirstBlockStateType) => {
	if (isFocused.secondButton) return '120_short';
	if (isFocused.thirdButton) return '230_short';
	return '0_short';
};

export const ArrowRotationLogic = (
	arrowCircleRef: MutableRefObject<HTMLDivElement>,
	arrowRef: MutableRefObject<HTMLImageElement>,
	isFocused: FirstBlockStateType
) => {
	gsap.to(arrowCircleRef.current, {
		duration: 1.5,
		backgroundColor: arrowCircleColorCondition(isFocused),
	});

	gsap.to(arrowRef.current, {
		duration: 1.5,
		transformOrigin: '30% 30%',
		rotate: arrowRotateCondition(isFocused),
		ease: 'back.out(0.7)',
	});
};
