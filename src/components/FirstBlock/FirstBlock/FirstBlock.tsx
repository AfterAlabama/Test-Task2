import cl from './FirstBlock.module.scss';
import Speedometer from '../Speedometer/Speedometer';
import TextBlock from '../TextBlock/TextBlock';
import LevelButtons from '../Speedometer/LevelButtons/LevelButtons';
import { createContext, useContext, useState } from 'react';
import { useBlocksContext } from '../../MainComponent/MainComponent';

export interface FirstBlockStateType {
	firstButton: boolean;
	secondButton: boolean;
	thirdButton: boolean;
}

interface FirstBlockContextProps {
	isFocused: FirstBlockStateType;
	setIsFocused: (el: FirstBlockStateType) => void;
}

const FirstBlockContext = createContext<FirstBlockContextProps>(
	{} as FirstBlockContextProps
);

export const useFirstBlockContext = () => useContext(FirstBlockContext);

const FirstBlock = () => {
	const [isFocused, setIsFocused] = useState({
		firstButton: true,
		secondButton: false,
		thirdButton: false,
	});
	const { firstBlockRef, speedometerRef } = useBlocksContext();

	return (
		<div
			ref={firstBlockRef}
			className={cl.container}
		>
			<TextBlock />
			<div
				ref={speedometerRef}
				className={cl.speedometerContainer}
			>
				<FirstBlockContext.Provider value={{ isFocused, setIsFocused }}>
					{window.screen.availWidth < 501 && <LevelButtons />}
					<Speedometer />
					{window.screen.availWidth > 501 && <LevelButtons />}
				</FirstBlockContext.Provider>
			</div>
		</div>
	);
};

export default FirstBlock;
