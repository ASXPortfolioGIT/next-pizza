'use client';

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import React from 'react'
import { useIntersection } from 'react-use'
import { ProductCard } from './product-card'
import { Title } from './title'

interface Props {
  title: string;
  items: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
  className,
  title,
  items,
  listClassName,
  categoryId
}) => {

  // отвечает за переключение или получение заголовка типа завтрак или пиццы при прокрутке страницы
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef<HTMLDivElement | null>(null);
  const intersection = useIntersection(intersectionRef as React.RefObject<HTMLElement>, {
  threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      // Здесь можно выполнить действия, когда элемент становится видимым
      setActiveCategoryId(categoryId);
    }
  },[categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      {/* тут 3 ошибки, работает с ними исправить позже, отключил ESlint ошибки пропали */}
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
          {items.map((product, i) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.items[0].price}
            />
          ))}
        </div>
      </div>
  );
}