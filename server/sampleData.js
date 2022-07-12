// Shop Data and Categories

const productCategories = [
  {
    id: "1",
    name: "Hats",
    routeName: "hats",
  },
  {
    id: "2",
    name: "Sneakers",
    routeName: "sneakers",
  },
  {
    id: "3",
    name: "Jackets",
    routeName: "jackets",
  },
  {
    id: "4",
    name: "Womens",
    routeName: "womens",
  },
  {
    id: "5",
    name: "Mens",
    routeName: "mens",
  },
];

const products = [
  {
    id: 1,
    name: "Brown Brim",
    imageUrl: "/assets/images/shop-img/hats/brown-brim.png",
    price: 1500,
    productCategoryId: "1",
  },
];

const SHOP_DATA = {
  hats: {
    id: 1,
    title: "Hats",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl: "/assets/images/shop-img/hats/brown-brim.png",
        price: 1500,
      },
      {
        id: 2,
        name: "Blue Beanie",
        imageUrl: "/assets/images/shop-img/hats/blue-beanie.png",
        price: 2100,
      },
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl: "/assets/images/shop-img/hats/brown-cowboy.png",
        price: 2500,
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl: "/assets/images/shop-img/hats/grey-brim.png",
        price: 2500,
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl: "/assets/images/shop-img/hats/green-beanie.png",
        price: 1800,
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl: "/assets/images/shop-img/hats/palm-tree-cap.png",
        price: 1400,
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl: "/assets/images/shop-img/hats/red-beanie.png",
        price: 1800,
      },
      {
        id: 8,
        name: "Wolf Cap",
        imageUrl: "/assets/images/shop-img/hats/wolf-cap.png",
        price: 1400,
      },
      {
        id: 9,
        name: "Blue Snapback",
        imageUrl: "/assets/images/shop-img/hats/blue-snapback.png",
        price: 1600,
      },
    ],
  },
  sneakers: {
    id: 2,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: "/assets/images/shop-img/sneakers/adidas-nmd.png",
        price: 22000,
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: "/assets/images/shop-img/sneakers/yeezy.png",
        price: 28000,
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: "/assets/images/shop-img/sneakers/black-converse.png",
        price: 11000,
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: "/assets/images/shop-img/sneakers/white-nike-high-tops.png",
        price: 16000,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "/assets/images/shop-img/sneakers/nikes-red.png",
        price: 16000,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "/assets/images/shop-img/sneakers/nike-brown.png",
        price: 16000,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "/assets/images/shop-img/sneakers/nike-funky.png",
        price: 19000,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "/assets/images/shop-img/sneakers/timberlands.png",
        price: 20000,
      },
    ],
  },
  jackets: {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl: "/assets/images/shop-img/jackets/black-shearling.png",
        price: 12500,
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl: "/assets/images/shop-img/jackets/blue-jean-jacket.png",
        price: 9000,
      },
      {
        id: 20,
        name: "Grey Jean Jacket",
        imageUrl: "/assets/images/shop-img/jackets/grey-jean-jacket.png",
        price: 9000,
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl: "/assets/images/shop-img/jackets/brown-shearling.png",
        price: 16500,
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "/assets/images/shop-img/jackets/brown-trench.png",
        price: 18500,
      },
    ],
  },
  womens: {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Blue Tanktop",
        imageUrl: "/assets/images/shop-img/womens/blue-tank.png",
        price: 2500,
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl: "/assets/images/shop-img/womens/floral-blouse.png",
        price: 2000,
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl: "/assets/images/shop-img/womens/floral-skirt.png",
        price: 8000,
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl: "/assets/images/shop-img/womens/red-polka-dot-dress.png",
        price: 8000,
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: "/assets/images/shop-img/womens/striped-sweater.png",
        price: 4500,
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: "/assets/images/shop-img/womens/yellow-track-suit.png",
        price: 13500,
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: "/assets/images/shop-img/womens/white-vest.png",
        price: 2000,
      },
    ],
  },
  mens: {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: "/assets/images/shop-img/mens/camo-vest.png",
        price: 32500,
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: "/assets/images/shop-img/mens/floral-shirt.png",
        price: 2000,
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: "/assets/images/shop-img/mens/long-sleeve.png",
        price: 2500,
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: "/assets/images/shop-img/mens/pink-shirt.png",
        price: 2500,
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: "/assets/images/shop-img/mens/roll-up-jean-shirt.png",
        price: 4000,
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: "/assets/images/shop-img/mens/polka-dot-shirt.png",
        price: 2500,
      },
    ],
  },
};

export default SHOP_DATA;
