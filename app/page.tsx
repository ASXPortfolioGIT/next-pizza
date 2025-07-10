import { Container, Filters, Title, TopBar } from "@/components/shared"
import { ProductsGroupList } from '@/components/shared/products-group-list'
import { prisma } from '@/prisma/prisma-client'

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        }
      },
    }
  });

  // console.log(categories);

  return (
    <>
      {/* создали контейнер и в него положили настроенный title */}
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />

      </Container>

      <TopBar categories={categories.filter((category) => category.products.length > 0)} />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* фильтрация */}
          <div className="w-[260px] min-w-[200px]">
            <Filters />
          </div>
          
          {/* список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

