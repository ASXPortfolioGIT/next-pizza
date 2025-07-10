'use client';

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import { Category } from '@prisma/client'
import React from 'react'

interface Props {
  items: Category[];
  className?: string;
}

export const Categories: React.FC<Props> = ({items, className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  // console.log('categoryActiveId in Categories:', categoryActiveId);

  return (
    // оборачиваем в div, чтобы можно было применить стили, настройка иконок и т д
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      
      {/* с помощью cats.map рендер происходит*/}
      {items.map(({name, id}, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href={`/#${name}`}
          key={index}>
          <button onClick={() => useCategoryStore.getState().setActiveId(id)}>{name}</button>
        </a>
      ))}
    </div>
  );
};
