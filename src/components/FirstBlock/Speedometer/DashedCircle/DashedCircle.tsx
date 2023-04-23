import cl from './DashedCircle.module.scss';
import { useFirstBlockContext } from '../../FirstBlock/FirstBlock';
import { useEffect, useRef } from 'react';
import { dashedCircleColorChangeLogic } from './Logic/dashedCircleColorChangeLogic';

const DashedCircle = () => {
	const { isFocused } = useFirstBlockContext();
	const [
		strokeRef1, 
		strokeRef2, 
		strokeRef3
	] = Array(3)
	.fill(null)
	.map(() => useRef<SVGCircleElement>({} as SVGCircleElement));

	useEffect(() => {
		dashedCircleColorChangeLogic(isFocused, strokeRef2, strokeRef3);
	}, [
		isFocused.firstButton, 
		isFocused.secondButton, 
		isFocused.thirdButton
	]);

	const refCondition = (index: number) => {
		if (index === 1) return strokeRef1;
		if (index === 2) return strokeRef2;
		if (index === 3) return strokeRef3;
		return null;
	};

	return (
		<svg
			className={cl.dashedCircle}
			viewBox='0 0 100 100'
		>
			{[1, 2, 3, 4].map((_, index) => (
				<circle
					key={index}
					cx='50'
					cy='50'
					r='45'
					ref={refCondition(index)}
				/>
			))}
		</svg>
	);
};

export default DashedCircle;
