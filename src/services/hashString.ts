export const hashString = (s: string) => {
	let h: any;
	for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;

	return h;
};
