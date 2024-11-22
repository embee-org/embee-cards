export const capitalizeFirstLetter = (val: string) =>
	String(val).charAt(0).toUpperCase() + String(val.toLowerCase()).slice(1);
