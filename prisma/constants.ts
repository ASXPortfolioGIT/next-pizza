export const categories = [
	{ name: "Пиццы" },
	{ name: "Завтрак" },
	{ name: "Закуски" },
	{ name: "Коктейли" },
	{ name: "Напитки" }
];

export const ingredients = [
	{
		name: 'Сырный бортик',
		price: 179,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
	},
	{
		name: 'Сливочная моцарелла',
		price: 79,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
	},
	{
		name: 'Сыры чеддер и пармезан',
		price: 79,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
	},
	{
		name: 'Острый перец халапеньо',
		price: 59,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
	},
	{
		name: 'Нежный цыпленок',
		price: 79,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
	},
	{
		name: 'Шампиньоны',
		price: 59,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
	},
	{
		name: 'Бекон',
		price: 79,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
	},
	{
		name: 'Ветчина',
		price: 79,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
	},
	{
		name: 'Пикантная пепперони',
		price: 79,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
	},
	{
		name: 'Острая чоризо',
		price: 79,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
	},
	{
		name: 'Маринованные огурчики',
		price: 59,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
	},
	{
		name: 'Свежие томаты',
		price: 59,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
	},
	{
		name: 'Красный лук',
		price: 59,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
	},
	{
		name: 'Сочные ананасы',
		price: 59,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
	},
	{
		name: 'Итальянские травы',
		price: 39,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
	},
	{
		name: 'Сладкий перец',
		price: 59,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
	},
	{
		name: 'Кубики брынзы',
		price: 79,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
	},
	{
		name: 'Митболы',
		price: 79,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
	},
].map((obj, index) => ({id: index + 1, ...obj}));

export const products = [
	// Пиццы (categoryId: 1)
	{
		name: 'Коктеиль молочный',
		imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
		categoryId: 1,
		price: 599,
	},
	{
		name: 'Сосиска в тесте',
		imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
		categoryId: 1,
		price: 549,
	},
		{
		name: 'Кофе латте',
		imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61b0c26a3f85d97a78feee00ad.avif',
		categoryId: 3,
		price: 149,
	},
	{
		name: 'Чоризо фреш',
		imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
		categoryId: 1,
		price: 629,
	},

	// Напитки (categoryId: 2)
	{
		name: 'Добрый кола 0.5л',
		imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194b770052874e5866fb322a5ccd52e.avif',
		categoryId: 2,
		price: 149,
	},
	{
		name: 'Добрый апельсин 0.5л',
		imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194b76f2778790e920584c191edd032.avif',
		categoryId: 2,
		price: 149,
	},

	// Закуски (categoryId: 3)
	{
		name: 'Картофель из печи',
		imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D61C1A5B7A2B9F9F2F6C4D1F4FC.webp',
		categoryId: 3,
		price: 249,
	},
	{
		name: 'Куриные крылья',
		imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D61C1A5B7A2B9F9F2F6C4D1F4FD.webp',
		categoryId: 3,
		price: 349,
	},

	// Десерты (categoryId: 4)
	{
		name: 'Чизкейк',
		imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D61C1A5B7A2B9F9F2F6C4D1F4FE.webp',
		categoryId: 4,
		price: 199,
	},
	{
		name: 'Тирамису',
		imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D61C1A5B7A2B9F9F2F6C4D1F4FF.webp',
		categoryId: 4,
		price: 229,
	},

	// Завтраки (categoryId: 5)
	{
		name: 'Омлет с беконом',
		imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D61C1A5B7A2B9F9F2F6C4D1F500.webp',
		categoryId: 5,
		price: 299,
	}
];