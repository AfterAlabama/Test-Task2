import { useBlocksContext } from '../../MainComponent/MainComponent';
import Slider from '../Slider/Slider';
import TextBlock from '../TextBlock/TextBlock';
import cl from './SecondBlock.module.scss';

const SecondBlock = () => {
	const { secondBlockRef } = useBlocksContext();

	return (
		<div
			className={cl.secondBlock}
			ref={secondBlockRef}
		>
			<TextBlock />
			<Slider />
		</div>
	);
};

export default SecondBlock;
