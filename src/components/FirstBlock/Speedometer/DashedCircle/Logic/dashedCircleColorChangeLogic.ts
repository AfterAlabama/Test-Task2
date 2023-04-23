import { gsap } from 'gsap';
import { FirstBlockStateType } from '../../../FirstBlock/FirstBlock';
import { MutableRefObject } from 'react';

export const dashedCircleColorChangeLogic = (
	isFocused: FirstBlockStateType,
	strokeRef2: MutableRefObject<SVGCircleElement>,
	strokeRef3: MutableRefObject<SVGCircleElement>
) => {
	if (isFocused.secondButton) {
		gsap.to(strokeRef2.current, {
			duration: 1.5,
			opacity: 1,
		});
		gsap.to(strokeRef3.current, {
			duration: 1.5,
			opacity: 0,
		});
	} else 
  if (isFocused.thirdButton) {
		gsap.to(strokeRef3.current, {
			duration: 1.5,
			opacity: 1,
		});
	} else {
		gsap.to([strokeRef3.current, strokeRef2.current], {
			duration: 1.5,
			opacity: 0,
		});
	}
};
