import { gsap } from 'gsap';
import { ActiveImage } from '../Slider';
import { MutableRefObject } from 'react';

export const leftArrowClickHandler = (
	active: ActiveImage,
	setActive: (el: ActiveImage) => void,
	...Refs: MutableRefObject<HTMLImageElement>[]
) => {
	const [giftRef, flowerRef, baloonsRef] = Refs;

	if (active === ActiveImage.GIFT) {
		gsap.to(giftRef.current, {
			duration: 0.5,
			x: -200,
			y: -200,
			ease: 'back.out(1)',
		});
		gsap.to(giftRef.current, {
			duration: 0.3,
			opacity: 0
		});

		gsap.fromTo(
			baloonsRef.current,
			{
				x: 200,
				y: -200
			},
			{
				duration: 0.5,
				x: 0,
				y: 0,
				ease: 'back.out(1)',
			}
		);
		gsap.to(baloonsRef.current, {
			duration: 0.3,
			opacity: 1,
		});
		setActive(ActiveImage.BALOON);
	} else if (active === ActiveImage.BALOON) {
		gsap.to(baloonsRef.current, {
			duration: 0.5,
			x: -200,
			y: -200,
			ease: 'back.out(1)',
		});
		gsap.to(baloonsRef.current, {
			duration: 0.3,
			opacity: 0,
		});

		gsap.fromTo(
			flowerRef.current,
			{
				x: 200,
				y: -200,
			},
			{
				duration: 0.5,
				x: 0,
				y: 0,
				ease: 'back.out(1)',
			}
		);
		gsap.to(flowerRef.current, {
			duration: 0.3,
			opacity: 1,
		});
		setActive(ActiveImage.FLOWER);
	} else if (active === ActiveImage.FLOWER) {
		gsap.to(flowerRef.current, {
			duration: 0.5,
			x: -200,
			y: -200,
			ease: 'back.out(1)',
		});
		gsap.to(flowerRef.current, {
			duration: 0.3,
			opacity: 0,
		});

		gsap.fromTo(
			giftRef.current,
			{
				x: 200,
				y: -200,
			},
			{
				duration: 0.5,
				x: 0,
				y: 0,
				ease: 'back.out(1)',
			}
		);
		gsap.to(giftRef.current, {
			duration: 0.3,
			opacity: 1,
		});
		setActive(ActiveImage.GIFT);
	}
};
