import Products from "./components/Products";

const products = [
	{
		id: 1,
		title: "Brand Name, Logo & QR Code",
		showPrice: false,

		description:
			`Yousuf Agro Food and Beverage LTD. is a trusted and reliable company, operated by a skilled and dedicated workforce. One of its prominent brands is Mejo.
For verification or further authentication, please scan the QR code provided.`,
		category: "Total 7 categories",
		image: "src/Image/image1.jpg",
		rating: { rate: 3.9, count: 120 },
	},
	{
		id: 2,
		title: "Mejo Energy & Mejo Drinking Water",
		price: 22.3,
		description:
			`Mejo Energy – Instant boost for active lives.
				 Mejo Drinking Water – Pure, safe, and refreshing hydration.`,
		category: " Beverages",
		image:
			"src/Image/image2.jpg",
		rating: { rate: 4.1, count: 259 },
	},
	{
		id: 3,
		title: "Mejo Cola",
		price: 15.01,
		description:
			"Mejo Cola – Bold taste, fizzy thrill, pure satisfaction.",
		category: " Beverages",
		image: "src/Image/image3.jpg",
		rating: { rate: 4.7, count: 500 },
	},
	{
		id: 4,
		title: "Mejo Orange",
		price: 15.99,
		description:
			"Mejo Orange – Bursting with juicy citrus energy  Refreshing. Zesty. Unstoppable. Pure orange joy in every sip.",
		category: " Beverages",
		image: "src/Image/image4.jpg",
		rating: { rate: 2.1, count: 430 },
	},
	{
		id: 5,
		title: "Mejo Up",
		price: 695,
		description:
			"Mejo Up – Crisp, cool, and citrusy.Lift your mood, refresh your day. The zesty splash you need.Lemon-lime refreshment, done right.",
		category: " Beverages",
		image: "src/Image/image5.jpg",
		rating: { rate: 4.6, count: 400 },
	},
	{
		id: 6,
		title: "Mejo Super Power Coil & Power Booster Coil",
		price: 168,
		description:
			"Mejo Coils – Super power, ultra boost. Keep bugs away, the Mejo way.",
		category: "Insect Repellent",
		image: "src/Image/image6.jpg",
		rating: { rate: 5.9, count: 70 },
	},
	{
		id: 7,
		title: "Mejo Aromatic Rice & Chilli,Turmeric,Coriander Powder",
		price: 168,
		description:
			"Mejo Rice & Spices – Aromatic rice. Authentic spices. Made for real flavor.",
		category: "Food Products",
		image: "src/Image/image7.jpg",
		rating: { rate: 5.9, count: 70 },
	},
	{
		id: 8,
		title: "Mejo Kon Chocolate",
		price: 168,
		description:
			" Mejo Kon Chocolate – Smooth, creamy, simply irresistible.",
		category: "Chocolates & Confectionery",
		image: "src/Image/image8.jpg",
		rating: { rate: 5.9, count: 70 },
	},
	{
		id: 9,
		title: "Mejo Dish wash, Toilet cleaner, & Tiles Cleaner",
		price: 168,
		description:
			"Mejo Cleaners – Tough on dirt, gentle on shine.",
		category: " Cleaning Products ",
		image: "src/Image/image9.jpg",
		rating: { rate: 5.9, count: 70 },
	},
	{
		id: 10,
		title: "Mejo Hand Wash Soap",
		price: 168,
		description:
			"Mejo Hand Wash Soap – Soft on hands, tough on germs.",
		category: "Personal Care",
		image: "src/Image/image10.jpg",
		rating: { rate: 5.9, count: 70 },
	},
	{
		id: 11,
		title: "Mejo Vim Bar & Beauty Soap",
		price: 168,
		description:
			"Cuts grease fast, shines longer. Glow naturally, feel refreshed. Tough on stains, gentle on skin.",
		category: " Cleaning Products ",
		image: "src/Image/image11.jpg",
		rating: { rate: 5.9, count: 70 },
	},
	{
		id: 12,
		title: "Mejo Ice Loly, Pop & Robo, Mango Fruton, Mango Cup Pudding",
		price: 168,
		description:
			"Chill, taste, and smile – the cool side of Mejo!",
		category: "Frozen & Dessert Items",
		image: "src/Image/image12.jpg",
		rating: { rate: 5.9, count: 70 },
	},
	{
		id: 13,
		title: "Mejo Mango Frut Drink, Drinko Litchi & Pineapple , Mejo Litchi & Orange Drink",
		price: 168,
		description:
			"Bursting with real fruit flavor, made to refresh every moment.",
		category: "Beverages",
		image: "src/Image/image13.jpg",
		rating: { rate: 5.9, count: 70 },
	},
	{
		id: 14,
		title: "Mejo Mustard Oil",
		price: 168,
		description:
			" Pure, aromatic, and traditionally powerful perfect for both cooking and care",
		category: "Food Products",
		image: "src/Image/image14.jpg",
		rating: { rate: 5.9, count: 70 },
	},
	{
		id: 15,
		title: "Mejo Soyabean oil & Mustard Oil",
		price: 168,
		description:
			"Pure cooking essentials for healthy, flavorful meals.",
		category: "Food Products",
		image: "src/Image/image15.jpg",
		rating: { rate: 5.9, count: 70 },
	},
	{
		id: 16,
		title: "",
		price: 168,
		description:
			`Mejo – A Name You Trust
From refreshing beverages to essential household items and quality food products, Mejo brings you a diverse range of everyday essentials crafted for purity, performance, and satisfaction. Taste the quality, feel the care, live the Mejo life.

"`,
		category: "Total 7 categories",
		image: "src/Image/image16.jpg",
		rating: { rate: 5.9, count: 70 },
	},

];

const App = () => {
	return (
		<div className="container">
			<h1>YOUSUF AGRO FOOD & BEVERAGE LTD.</h1>
			<h3>House-13, Road-17, 4th Floor, Nikunja-2 Dhaka</h3>
			<h4>Email: yousufali1917@gmail.com phone: 01335989764</h4>
			<h2>Good Food Good Health</h2>
			<Products products={products} />
		</div>
	);
};

export default App;
