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
		name: 'Охотничья',
		imageUrl: 'https://media.dodostatic.net/image/r:584x584/019635b27c727302835040e5d7c27caa.avif',
		categoryId: 1,
		price: 629,
	},
	{
		name: 'Криветка и песто',
		imageUrl: 'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
		categoryId: 1,
		price: 659,
	},
		{
		name: 'Чил грилл',
		imageUrl: 'https://media.dodostatic.net/image/r:584x584/019591c69fac7921a27e4ecd8c99f9df.avif',
		categoryId: 1,
		price: 519,
	},
	{
		name: 'Двойной ципленок',
		imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d614cbe0530b7234b6d7a6e5f8e.avif',
		categoryId: 1,
		price: 449,
	},
	{
		name: 'Сырная',
		imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d610d2925109ab2e1c92cc5383c.avif',
		categoryId: 1,
		price: 349,
	},
	{
		name: 'Пеперони фреш',
		imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif',
		categoryId: 1,
		price: 349,
	},
	{
		name: 'Черизо фреш',
		imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61706d472f9a5d71eb94149304.avif',
		categoryId: 1,
		price: 349,
	},
	{
		name: 'Ветчина и грибы',
		imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ef5b10b39bbbbda9f8c4e4ff1b067c.avif',
		categoryId: 1,
		price: 499,
	},
	{
		name: 'Баварская',
		imageUrl: 'https://media.dodostatic.net/image/r:584x584/019591a2e222794a81731c99f3cc34ec.avif',
		categoryId: 1,
		price: 569,
	},

	// Завтрак (categoryId: 2)
	{
		name: 'Хашбрауны',
		imageUrl: 'https://media.dodostatic.net/image/r:584x584/019591f326f27455a9841fb14785fc27.avif',
		categoryId: 2,
		price: 119,
	},
	{
		name: 'Омлет с томатами в пите',
		imageUrl: 'https://media.dodostatic.net/image/r:584x584/019635f4c8b873ed867cf7919f6185c7.avif',
		categoryId: 2,
		price: 165,
	},
	{
		name: 'Омлет с беконом в пите',
		imageUrl: 'https://media.dodostatic.net/image/r:584x584/019635ec59c471aeb41873a7ebd7f6e1.avif',
		categoryId: 2,
		price: 205,
	},

	// Закуски (categoryId: 3)
	{
		name: 'Ланчбокс охотничий',
		imageUrl: 'https://media.dodostatic.net/image/r:584x584/019635cebea7796aba0b56df07f787ac.avif',
		categoryId: 3,
		price: 389,
	},
	{
		name: 'Хашбрауны',
		imageUrl: 'https://media.dodostatic.net/image/r:584x584/019591f326f27455a9841fb14785fc27.avif',
		categoryId: 3,
		price: 119,
	},
	{
		name: 'Чикен ролл',
		imageUrl: 'https://media.dodostatic.net/image/r:584x584/019595f503e27410ab6e179c05347231.avif',
		categoryId: 3,
		price: 199,
	},

	// Коктейли (categoryId: 4)
	{
		name: 'Персиковый молочный коктейль',
		imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/019592025b2376d5af7b6ace8be8b9aa.avif',
		categoryId: 4,
		price: 235,
	},
	{
		name: 'Молочный коктейль Фисташка',
		imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/019595f0eec0752da61aed5ee21ebf0b.avif',
		categoryId: 4,
		price: 235,
	},
	{
		name: 'Молочный коктейль с печеньем Орео',
		imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/019595f0eec0752da61aed5ee21ebf0b.avif',
		categoryId: 4,
		price: 235,
	},

	// Напитки (categoryId: 5)
	{
		name: 'Добрый Кола Ледяной Лимон',
		imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/0196147311da7434b3bdb08f1f70713b.avif',
		categoryId: 5,
		price: 135,
	},
	{
		name: 'Лимонад Арбузный лайм',
		imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/0195923341fe74359961dae3c255e3c1.avif',
		categoryId: 5,
		price: 149,
	},
	{
		name: 'Добрый Кола',
		imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/0194b770052874e5866fb322a5ccd52e.avif',
		categoryId: 5,
		price: 135,
	}
];