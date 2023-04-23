import { useEffect, useRef } from 'react';
import ArrowIndicator from './ArrowIndicator/ArrowIndicator';
import DashedCircle from './DashedCircle/DashedCircle';
import cl from './Speedometer.module.scss';
import { OnLoadAnimation } from '../../../helpers/OnLoadAnimation';

const Speedometer = () => {
	const speedometerRef = useRef<HTMLDivElement>({} as HTMLDivElement);

	useEffect(() => {
		OnLoadAnimation(speedometerRef.current)
	}, [])

	return (
		<div
			ref={speedometerRef}
			className={cl.speedometer}
		>
			<DashedCircle />
			<ArrowIndicator />
		</div>
	);
};

export default Speedometer;
