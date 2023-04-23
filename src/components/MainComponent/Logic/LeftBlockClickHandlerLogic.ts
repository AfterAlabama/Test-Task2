import { gsap } from 'gsap';
import { MutableRefObject } from 'react';

export const LeftBlockClickhandlerLogic = (
	...refs: MutableRefObject<HTMLElement>[]
) => {
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
			scrollTo: firstBlockRef.current,
		});
		gsap.to(firstBlockRef.current, {
			duration: 1,
			y: 0,
		});
		gsap.to(secondBlockHeadingRef.current, {
			duration: 1,
			y: 100,
			opacity: 0,
		});
		gsap.to(secondBlockTextRef.current, {
			duration: 1,
			y: 0,
			height: '20vh',
			maxHeight: '20vh',
		});
	} else {
		gsap.to(layoutRef.current, {
			duration: 1,
			ease: 'power1.out',
			scrollTo: firstBlockRef.current,
		});
		gsap.to(secondBlockRef.current, {
			y: 20,
			duration: 1,
		});

		gsap.to(firstBlockHeadingRef.current, {
			duration: 1,
			y: 0,
		});
		gsap.to(firstBlockTextRef.current, {
			duration: 1,
			y: 0,
		});

		gsap.to(speedometerRef.current, {
			duration: 1,
			y: 0,
		});
		gsap.to(firstBlockButtonRef.current, {
			duration: 0.3,
			y: 0,
		});
	}
};
