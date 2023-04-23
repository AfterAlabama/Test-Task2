import { useEffect, useRef } from 'react';
import cl from './TextBlock.module.scss';
import { OnLoadAnimation } from '../../../helpers/OnLoadAnimation';
import { useBlocksContext } from '../../MainComponent/MainComponent';

const TextBlock = () => {
	const {
		toRightBlockClickHandler,
		firstBlockHeadingRef,
		firstBlockTextRef,
		firstBlockButtonRef,
	} = useBlocksContext();
	const textBlockRef = useRef<HTMLDivElement>({} as HTMLDivElement);

	useEffect(() => {
		OnLoadAnimation(textBlockRef.current);
	}, []);

	return (
		<div
			ref={textBlockRef}
			className={cl.textBlock}
		>
			<h1 ref={firstBlockHeadingRef}>Bibendum neque egestas congue</h1>
			<p ref={firstBlockTextRef}>
				lacus sed viverra tellus in hac habitasse platea dictumst vestibulum
				rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt
				lobortis feugiat
			</p>
			<button
				ref={firstBlockButtonRef}
				onClick={toRightBlockClickHandler}
			>
				GO
			</button>
		</div>
	);
};

export default TextBlock;
