import { Prisma } from '@prisma/client'
import { hashSync } from 'bcrypt'
import { categories, ingredients, products } from './constants'
import { prisma } from './prisma-client'

const randomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max * 10 - min * 10 + 1) + min * 10) / 10;
};

const generateProductItem = ({ 
  productId, 
  pizzaType,
  size,
}: {
    productId: number;
    pizzaType?: 1 | 2; // тип пиццы (тонкое, толстое тесто и т.д.)
    size?: 20 | 30 | 40; // размеры пиццы
}) => {
  return {
    productId,
    pizzaType,
    size,
    price: randomNumber(500, 1500), // случайная цена от 500
    imageUrl: '/Users/asx_pro_m1/Desktop/scripts/next-pizza/public/pizza_img/1.jpg',
  } as Prisma.ProductItemUncheckedCreateInput;
};


// генерируем случайные данные для заполнения базы данных
async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User Test',
        email: 'user@test.ru',
        password: hashSync('12345678', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin Admin',
        email: 'admin@test.ru',
        password: hashSync('12345678', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });
  await prisma.category.createMany({
  data: categories
});

  await prisma.ingredient.createMany({
    data: ingredients
  });

  await prisma.product.createMany({
    data: products
  });
  // добавляем пиццу с ингредиентами
  const pizza1 = await prisma.product.create({
    data: {
      name: 'Пепперони',
      price: 700,
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Маргарита',
      price: 600,
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d6105ef6690b86fbde6150b5b0c.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Гавайская',
      price: 800,
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d6149eb101d8727573088fa2eff.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 15),
      },
    },
  });

  await prisma.productItem.createMany({
     data: [
  // Пицца "Пепперони фреш"
  generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
  generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
  generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40 }),

  // Пицца "Сырная"
  generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
  generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
  generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
  generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
  generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
  generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),

  // Пицца "Чоризо фреш"
  generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
  generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
  generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 }),
  

  generateProductItem({ productId: 1 }),
  generateProductItem({ productId: 2 }),
  generateProductItem({ productId: 3 }),
  generateProductItem({ productId: 4 }),
  generateProductItem({ productId: 5 }),
  generateProductItem({ productId: 6 }),
  generateProductItem({ productId: 7 }),
  generateProductItem({ productId: 8 }),
  generateProductItem({ productId: 9 }),
  generateProductItem({ productId: 10 }),
  generateProductItem({ productId: 11 }),
  generateProductItem({ productId: 12 }),
  generateProductItem({ productId: 13 }),
    ],
  });

  await prisma.cart.createMany({
    data:[
      {
        userId: 1,
        totalAmount: 0,
        token: '12345678',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: '15555678',
      },
    ],
  });

  await prisma.cartItem.create({
    data:{
        cartId: 1,
        productItemId: 1,
        quantity: 2,
        ingredients: {
          connect: [
            { id: 1 }, // Сыр
            { id: 2 }, // Помидоры
            { id: 3 }, // Колбаса
            { id: 4 }, // Грибы
            { id: 5 }, // Лук
          ]
        },
      },
  });
}



// очищаем базу данных
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE;`;
}


async function main() {
    try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });