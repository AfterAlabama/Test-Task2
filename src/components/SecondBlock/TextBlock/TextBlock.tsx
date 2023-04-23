import { useBlocksContext } from '../../MainComponent/MainComponent';
import cl from './TextBlock.module.scss';

const TextBlock = () => {
	const { toLeftBlockClickHandler, secondBlockHeadingRef, secondBlockTextRef } = useBlocksContext();

	return (
		<div className={cl.textBlock}>
			<h1 ref={secondBlockHeadingRef} >PageMaker including versions of Lorem Ipsum.</h1>
			<p ref={secondBlockTextRef} >
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industrys standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sit, aperiam dolorum esse odit incidunt labore culpa illo, sequi soluta, sunt blanditiis praesentium? Ad error aperiam nisi, laudantium vero eligendi.
			</p>
			<button onClick={toLeftBlockClickHandler}>Back</button>
		</div>
	);
};

export default TextBlock;
