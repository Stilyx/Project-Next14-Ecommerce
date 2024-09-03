export interface IProduct {
	id: number;
	slug: string;
	name: string;
	shortName: string;
	image: ICategoryImage;
	cartImage: string;
	category: string;
	categoryImage: ICategoryImage;
	new: boolean;
	price: number;
	description: string;
	features: string;
	includedItems: IncludedItem[];
	gallery: IGallery;
	others: IOther[];
}

export interface ICategoryImage {
	mobile: string;
	tablet: string;
	desktop: string;
}

export interface IGallery {
	first: ICategoryImage;
	second: ICategoryImage;
	third: ICategoryImage;
}

export interface IncludedItem {
	quantity: number;
	item: string;
}

export interface IOther {
	slug: string;
	name: string;
	image: ICategoryImage;
}
