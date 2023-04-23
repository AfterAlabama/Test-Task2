import FirstBlock from '../FirstBlock/FirstBlock/FirstBlock';
import Layout from '../Layout/Layout';
import SecondBlock from '../SecondBlock/SecondBlock/SecondBlock';
import { MutableRefObject, createContext, useContext, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { RightBlockClickHandlerLogic } from './Logic/RightBlockClickHandlerLogic';
import { LeftBlockClickhandlerLogic } from './Logic/LeftBlockClickHandlerLogic';

gsap.registerPlugin(ScrollToPlugin);

interface BlocksContextProps {
	toRightBlockClickHandler: () => void;
	toLeftBlockClickHandler: () => void;
	firstBlockRef: MutableRefObject<HTMLDivElement>;
	speedometerRef: MutableRefObject<HTMLDivElement>;
	firstBlockHeadingRef: MutableRefObject<HTMLHeadingElement>;
	firstBlockTextRef: MutableRefObject<HTMLParagraphElement>;
	firstBlockButtonRef: MutableRefObject<HTMLButtonElement>;
	secondBlockRef: MutableRefObject<HTMLDivElement>;
	layoutRef: MutableRefObject<HTMLDivElement>;
	secondBlockHeadingRef: MutableRefObject<HTMLHeadingElement>;
	secondBlockTextRef: MutableRefObject<HTMLParagraphElement>;
}

const BlocksContext = createContext<BlocksContextProps>(
	{} as BlocksContextProps
);

export const useBlocksContext = () => useContext(BlocksContext);

const MainComponent = () => {
	const [
		firstBlockRef, 
		secondBlockRef, 
		layoutRef, 
		speedometerRef
	] = Array(4)
		.fill(null)
		.map(() => useRef<HTMLDivElement>({} as HTMLDivElement
	));

	const [
		firstBlockHeadingRef, 
		secondBlockHeadingRef
	] = Array(2)
		.fill(null)
		.map(() => useRef<HTMLHeadingElement>({} as HTMLHeadingElement
	));

	const [
		firstBlockTextRef, 
		secondBlockTextRef
	] = Array(2)
		.fill(null)
		.map(() => useRef<HTMLParagraphElement>({} as HTMLParagraphElement
	));

	const firstBlockButtonRef = useRef<HTMLButtonElement>(
		{} as HTMLButtonElement
	);

	const toRightBlockClickHandler = () =>
		RightBlockClickHandlerLogic(
			layoutRef,
			secondBlockHeadingRef,
			secondBlockRef,
			firstBlockRef,
			secondBlockTextRef,
			firstBlockHeadingRef,
			firstBlockButtonRef,
			firstBlockTextRef,
			speedometerRef
	);

	const toLeftBlockClickHandler = () =>
		LeftBlockClickhandlerLogic(
			layoutRef,
			secondBlockHeadingRef,
			secondBlockRef,
			firstBlockRef,
			secondBlockTextRef,
			firstBlockHeadingRef,
			firstBlockButtonRef,
			firstBlockTextRef,
			speedometerRef
	);

	return (
		<BlocksContext.Provider
			value={{
				firstBlockRef,
				speedometerRef,
				firstBlockHeadingRef,
				firstBlockTextRef,
				firstBlockButtonRef,
				secondBlockRef,
				layoutRef,
				secondBlockHeadingRef,
				secondBlockTextRef,
				toRightBlockClickHandler,
				toLeftBlockClickHandler,
			}}
		>
			<Layout>
				<FirstBlock />
				<SecondBlock />
			</Layout>
		</BlocksContext.Provider>
	);
};

export default MainComponent;
