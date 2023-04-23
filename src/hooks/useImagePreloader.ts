import { useEffect, useState } from 'react';

function preloadImage(src: string): Promise<HTMLImageElement> {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = function () {
			resolve(img);
		};
		img.onerror = img.onabort = function () {
			reject(src);
		};
		img.src = src;
	});
}

export const useImagePreloader = (imageList: string[]) => {
	const [imagesPreloaded, setImagesPreloaded] = useState(false);
	useEffect(() => {
		let isCancelled = false;

		async function effect() {
			if (isCancelled) {
				return;
			}

			const imagesPromiseList: Promise<HTMLImageElement>[] = [];
			for (const i of imageList) {
				imagesPromiseList.push(preloadImage(i));
			}

			await Promise.all(imagesPromiseList);

			if (isCancelled) {
				return;
			}

			setImagesPreloaded(true);
		}

		effect();

		return () => {
			isCancelled = true;
		};
	}, []);

	return { imagesPreloaded };
};
