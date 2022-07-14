const ProductCategory = require("../models/ProductCategory");
const Product = require("../models/Product");
const Cart = require("../models/Cart");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean,
} = require("graphql");

const CartType = new GraphQLObjectType({
  name: "Cart",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    price: { type: GraphQLInt },
    quantity: { type: GraphQLInt },
    userId: { type: GraphQLString },
    checkedOut: { type: GraphQLBoolean },
    productId: { type: GraphQLID },
  }),
});

const ProductCategoryType = new GraphQLObjectType({
  name: "ProductCategory",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    routeName: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    size: { type: GraphQLString },
  }),
});

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    price: { type: GraphQLInt },
    productCategory: {
      type: ProductCategoryType,
      resolve(parent, args) {
        return ProductCategory.findById(parent.productCategoryId);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    carts: {
      type: GraphQLList(CartType),
      resolve(parent, args) {
        return Cart.find();
      },
    },

    userCart: {
      type: GraphQLList(CartType),
      args: { userId: { type: GraphQLString } },
      resolve(parent, args) {
        return Cart.find({ userId: args.userId });
      },
    },

    products: {
      type: GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.find();
      },
    },

    productsByCategory: {
      type: GraphQLList(ProductType),
      args: { categoryId: { type: GraphQLID } },
      resolve(parent, args) {
        return Product.find({ productCategoryId: args.categoryId });
      },
    },

    productsForCategoryPreview: {
      type: GraphQLList(ProductType),
      args: { categoryId: { type: GraphQLID } },
      resolve(parent, args) {
        return Product.find({ productCategoryId: args.categoryId }).then(
          (products) => products.slice(0, 4)
        );
      },
    },

    productCategories: {
      type: GraphQLList(ProductCategoryType),
      resolve(parent, args) {
        return ProductCategory.find();
      },
    },
  },
});

const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addProductCategory: {
      type: ProductCategoryType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        routeName: { type: GraphQLNonNull(GraphQLString) },
        imageUrl: { type: GraphQLString },
        size: { type: GraphQLString },
      },
      resolve(parent, args) {
        const { name, routeName, imageUrl, size } = args;
        const productCategory = new ProductCategory({
          name,
          routeName,
          imageUrl,
          size,
        });
        return productCategory.save();
      },
    },

    addItemtoCart: {
      type: CartType,
      args: {
        productId: { type: GraphQLNonNull(GraphQLString) },
        userId: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
        imageUrl: { type: GraphQLNonNull(GraphQLString) },
        price: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        const cart = new Cart({
          name: args.name,
          imageUrl: args.imageUrl,
          price: args.price,
          productId: args.productId,
          quantity: 1,
          userId: args.userId,
          checkedOut: false,
        });
        return cart.save();
      },
    },

    updateCartItem: {
      type: CartType,
      args: {
        cartId: { type: GraphQLNonNull(GraphQLID) },
        quantity: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        return Cart.findByIdAndUpdate(
          args.cartId,
          {
            $set: {
              quantity: args.quantity + 1,
            },
          },
          { new: true }
        );
      },
    },

    deleteCart: {
      type: CartType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Cart.findByIdAndRemove(args.id);
      },
    },

    updateProductCategory: {
      type: ProductCategoryType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        routeName: { type: GraphQLString },
        imageUrl: { type: GraphQLString },
        size: { type: GraphQLString },
      },
      resolve(parent, args) {
        const { id, name, routeName, imageUrl, size } = args;
        return ProductCategory.findByIdAndUpdate(
          id,
          {
            $set: {
              name,
              routeName,
              imageUrl,
              size,
            },
          },
          { new: true }
        );
      },
    },

    addProduct: {
      type: ProductType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        imageUrl: { type: GraphQLNonNull(GraphQLString) },
        price: { type: GraphQLNonNull(GraphQLInt) },
        productCategoryId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const { name, imageUrl, price, productCategoryId } = args;
        const product = new Product({
          name,
          imageUrl,
          price,
          productCategoryId,
        });
        return product.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
