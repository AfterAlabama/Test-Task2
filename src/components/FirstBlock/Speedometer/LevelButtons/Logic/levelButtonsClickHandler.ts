import { MouseEvent } from 'react';
import { FirstBlockStateType } from '../../../FirstBlock/FirstBlock';

export const levelButtonsClickHandler = (
	e: MouseEvent<HTMLButtonElement>,
	isFocused: FirstBlockStateType,
	setIsFocused: (el: FirstBlockStateType) => void
) => {
	const target = e.target as HTMLButtonElement;

	if (target.textContent === 'Level 1' && !isFocused.firstButton) {
		setIsFocused({
			firstButton: true,
			secondButton: false,
			thirdButton: false,
		});
	}
	if (target.textContent === 'Level 2' && !isFocused.secondButton) {
		setIsFocused({
			firstButton: false,
			secondButton: true,
			thirdButton: false,
		});
	}
	if (target.textContent === 'Level 3' && !isFocused.thirdButton) {
		setIsFocused({
			firstButton: false,
			secondButton: false,
			thirdButton: true,
		});
	}
};
