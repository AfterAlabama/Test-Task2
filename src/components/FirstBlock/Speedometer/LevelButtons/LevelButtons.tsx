import { useEffect, useRef } from 'react';
import cl from './LevelButtons.module.scss';
import { OnLoadAnimation } from '../../../../helpers/OnLoadAnimation';
import styles from '../../../../styles/_variables.module.scss';
import { useFirstBlockContext } from '../../FirstBlock/FirstBlock';
import { levelButtonsClickHandler } from './Logic/levelButtonsClickHandler';

const LevelButtons = () => {
	const { isFocused, setIsFocused } = useFirstBlockContext();
	const buttonsRef = useRef<HTMLDivElement>({} as HTMLDivElement);

	useEffect(() => {
		OnLoadAnimation(buttonsRef.current);
	}, []);

	const buttonStyleCondition = (isButtonFocused: boolean, color: string) => ({
		backgroundColor: isButtonFocused ? color : '',
		borderColor: isButtonFocused ? color : '',
		transform: isButtonFocused ? styles.onloadTransform : '',
		boxShadow: isButtonFocused ? styles.onloadSmallBoxShadow : '',
	});

	const buttonStylesArray = [
		[isFocused.firstButton, styles.firstButtonColor],
		[isFocused.secondButton, styles.secondButtonColor],
		[isFocused.thirdButton, styles.thirdButtonColor],
	];

	return (
		<div
			className={cl.buttonsContainer}
			ref={buttonsRef}
		>
			{buttonStylesArray.map((buttonArray, index) => (
				<button
					onClick={(e) => levelButtonsClickHandler(e, isFocused, setIsFocused)}
					key={index}
					style={buttonStyleCondition(buttonArray[0], buttonArray[1])}
				>
					Level {index + 1}
				</button>
			))}
		</div>
	);
};

export default LevelButtons;
