import { Container, Filters, Title, TopBar } from "@/components/shared"
import { ProductsGroupList } from '@/components/shared/products-group-list'


export default function Home() {
  return (
    <>
      {/* создали контейнер и в него положили настроенный title */}
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />

      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* фильтрация */}
          <div className="w-[260px] min-w-[200px]">
            <Filters />
          </div>
          
          {/* список товаров */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
            <ProductsGroupList 
            title={'Пиццы'} 
            items={[
              {
              id: 1,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
              price: 550,
              items: [{ price: 550}]
              },
              {
              id: 2,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
              price: 550,
              items: [{ price: 550}]
              },
              {
              id: 3,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
              price: 550,
              items: [{ price: 550}]
              },
              {
              id: 4,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
              price: 550,
              items: [{ price: 550}]
              },
              {
              id: 5,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
              price: 550,
              items: [{ price: 550}]
              },
              {
              id: 6,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
              price: 550,
              items: [{ price: 550}]
              },
              {
              id: 7,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
              price: 550,
              items: [{ price: 550}]
              },
              {
              id: 8,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
              price: 550,
              items: [{ price: 550}]
              },
              {
              id: 9,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
              price: 550,
              items: [{ price: 550}]
              },
            ]} categoryId={1} 
            />

            <ProductsGroupList 
            title={'Комбо'} 
            items={[
              {
              id: 10,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
              price: 550,
              items: [{ price: 550}]
              },
              {
              id: 11,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
              price: 550,
              items: [{ price: 550}]
              },
              {
              id: 12,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
              price: 550,
              items: [{ price: 550}]
              },
              {
              id: 13,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
              price: 550,
              items: [{ price: 550}]
              },
              {
              id: 14,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
              price: 550,
              items: [{ price: 550}]
              },
              {
              id: 15,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
              price: 550,
              items: [{ price: 550}]
              },
              {
              id: 16,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
              price: 550,
              items: [{ price: 550}]
              },
              {
              id: 17,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
              price: 550,
              items: [{ price: 550}]
              },
              {
              id: 18,
              name: 'Чизбургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
              price: 550,
              items: [{ price: 550}]
              },
            ]} categoryId={2} 
            />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

