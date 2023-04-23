import { gsap } from 'gsap';

export const OnLoadAnimation = (...Elements: HTMLElement[]) => {
	gsap.fromTo(
		Elements.length > 1 ? Elements : Elements[0],
		{
			y: 40,
			opacity: 0,
		},
		{
			duration: 1,
			y: 0,
			opacity: 1,
			ease: 'power1'
		}
	);
};
