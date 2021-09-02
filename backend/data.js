import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Gyrelyn Ann",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Mark Rañada",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Tonkatsu Sandwich",
      category: "Sandwich",
      image: "/images/p1.jpg",
      price: 150,
      countInStock: 25,
      brand: "Sandwich",
      rating: 4.5,
      numReviews: 12,
      description:
        "Crispy juicy pork cutlets sandwiched between soft pillowy Japanese milk bread, this Japanese Katsu Sando is a homey kind of sandwich but downright satisfying! Get over your sandwich ho-hum with this new favorite. ",
    },
    {
      name: "Boba Coffee Jelly",
      category: "Coffee",
      image: "/images/p2.jpg",
      price: 120,
      countInStock: 20,
      brand: "Caffeine",
      rating: 4.0,
      numReviews: 10,
      description:
        "A dessert consisting of coffee flavored gelatin cubes served with milk and whipped cream topping and shaved chocolate.",
    },
    {
      name: "Cheesy Ube Pandesal",
      category: "Bread",
      image: "/images/p3.jpg",
      price: 100,
      countInStock: 0,
      brand: "Bread",
      rating: 4.8,
      numReviews: 15,
      description:
        "Ube Cheese Pandesal are a new twist on our classic Filipino dinner roll. Ultra-soft and delicious with an intense purple-yam flavor and melty cheese filling, they’re great for breakfast or anytime snack.",
    },
    {
      name: "Mango Float Cake",
      category: "Cake",
      image: "/images/p4.jpg",
      price: 220,
      countInStock: 15,
      brand: "Cake",
      rating: 5,
      numReviews: 20,
      description:
        "You'll want the ripest and juiciest mangoes to really do justice to this popular Filipino dessert. Made of layered whipped sweetened cream, graham cracker crumbs and fruit that's chilled overnight (think icebox cake), it's an easy no-bake dessert you can learn by heart...",
    },
    {
      name: "Classic Cookie Chips",
      category: "Cookie",
      image: "/images/p5.jpg",
      price: 120,
      countInStock: 10,
      brand: "Cookie",
      rating: 4.5,
      numReviews: 10,
      description:
        "Small changes can make a big difference. We took our basic chocolate chip cookie and made one isolated change at a time. We added, swapped, melted, baked low, baked high and chilled. But mostly we had fun. And with each slight tweak we made a new cookie with a different texture, look and taste from the last. Use our guide as a way to find the perfect cookie for you. No big changes necessary.",
    },
    {
      name: "Sea Salt Chocolate Chip Cookie",
      category: "Cookie",
      image: "/images/p6.jpg",
      price: 140,
      countInStock: 30,
      brand: "Cookie",
      rating: 4.5,
      numReviews: 25,
      description:
        "Everyone needs a go-to chocolate chip cookie recipe! These sea salt chocolate chip cookies are definitely my favorite. Soft and chewy in the center and a tad bit crispy around the edges. Just how I like them!",
    },
  ],
};
export default data;
