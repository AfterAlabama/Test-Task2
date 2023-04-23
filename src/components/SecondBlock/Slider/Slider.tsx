import slider from '../../../assets/SliderBackground.png';
import gift from '../../../assets/slide2.png';
import baloons from '../../../assets/slide1.png';
import flower from '../../../assets/slide4.png';
import left from '../../../assets/LeftArrow.png';
import right from '../../../assets/RightArrow.png';
import cl from './Slider.module.scss';
import { useRef, useState } from 'react';
import { leftArrowClickHandler } from './Logic/leftArrowClickHandler';
import { rightArrowClickHandler } from './Logic/rightArrowClickHandler';

export enum ActiveImage {
	GIFT = 'gift',
	BALOON = 'baloon',
	FLOWER = 'flower',
}

const Slider = () => {
	const [
		giftRef, 
		baloonsRef, 
		flowerRef
	] = Array(3)
		.fill(null)
		.map(() => useRef<HTMLImageElement>({} as HTMLImageElement));
	const [active, setActive] = useState(ActiveImage.GIFT);

	const refCondition = (index: number) => {
		if (index === 1) return giftRef;
		if (index === 2) return baloonsRef;
		return flowerRef;
	};

	const styleCondition = (index: number) => {
		return {
			opacity: index === 2 || index === 3 ? 0 : 1,
			left: 50,
			top: 50
		};
	};

	return (
		<div>
			<div className={cl.sliderContent}>
				<img
					alt='slider'
					src={slider}
				/>
				{[gift, baloons, flower].map((pic, index) => (
					<img
						key={index}
						alt={`${pic}`}
						src={pic}
						ref={refCondition(index + 1)}
						style={styleCondition(index + 1)}
					/>
				))}
			</div>
			<div className={cl.sliderArrows}>
				<img
					alt='leftArrow'
					src={left}
					onClick={() =>
						leftArrowClickHandler(
							active,
							setActive,
							giftRef,
							flowerRef,
							baloonsRef
						)
					}
				/>
				<img
					alt='right'
					src={right}
					onClick={() =>
						rightArrowClickHandler(
							active,
							setActive,
							giftRef,
							flowerRef,
							baloonsRef
						)
					}
				/>
			</div>
		</div>
	);
};

export default Slider;
