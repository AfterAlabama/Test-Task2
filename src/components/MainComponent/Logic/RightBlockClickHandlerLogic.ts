import { gsap } from 'gsap';
import { MutableRefObject } from 'react';

export const RightBlockClickHandlerLogic = (...refs: MutableRefObject<HTMLElement>[]) => {
	const [
		layoutRef,
		secondBlockHeadingRef,
		secondBlockRef,
		firstBlockRef,
		secondBlockTextRef,
		firstBlockHeadingRef,
		firstBlockButtonRef,
		firstBlockTextRef,
		speedometerRef,
	] = refs;
	if (window.screen.availWidth > 501) {
		gsap.to(layoutRef.current, {
			duration: 1,
			ease: 'power1.out',
			scrollTo: secondBlockRef.current,
		});
		gsap.to(firstBlockRef.current, {
			duration: 1,
			y: 150,
		});
		gsap.fromTo(
			secondBlockHeadingRef.current,
			{
				y: 100,
				opacity: 0,
			},
			{
				duration: 1,
				y: 0,
				opacity: 1,
			}
		);
		gsap.to(secondBlockTextRef.current, {
			duration: 1,
			y: 0,
			height: '13vh',
			maxHeight: '13vh',
		});
	} else {
		gsap.to(layoutRef.current, {
			duration: 1,
			ease: 'power1.out',
			scrollTo: secondBlockRef.current,
		});

		gsap.to(secondBlockRef.current, {
			y: -20,
			duration: 1,
		});

		gsap.to(firstBlockHeadingRef.current, {
			duration: 1,
			y: 20,
		});
		gsap.to(firstBlockTextRef.current, {
			duration: 1,
			y: -20,
		});

		gsap.to(speedometerRef.current, {
			duration: 1,
			y: 50,
		});
		gsap.to(firstBlockButtonRef.current, {
			duration: 1,
			y: -50,
		});
	}
};
