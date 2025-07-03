'use client'
import { useFilterIngredients } from '@/hooks/useFilterIngredients'
import React from 'react'
import { Input } from '../ui'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
import { FilterCheckbox } from './filter-checkbox'
import { RangeSlider } from './range-slider'
import { Title } from './title'

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
};	

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients();
  const [prices, setPrice] = React.useState<PriceProps>({
    priceFrom: 0, 
    priceTo: 1000});

  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
  // пример обновления объекта
  setPrice ({
    ...prices,
    [name]: value,
  });
};

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* верхние чекбоксы */}
      <div className="flex flex-col gap-4"> 

        <FilterCheckbox name='qwe' text="Можно собирать" value="1" />
        <FilterCheckbox name='asd' text="Новинки" value="2" />

      </div>

      {/* фильтр цены */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>

        <div className="flex gap-3 mb-5">
          
          <Input 
          type="number" 
          value={String(prices.priceFrom)} 
          placeholder="0" 
          min={0} 
          max={1000} 
          onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
          />
          
          <Input 
          type="number" 
          min={100} 
          max={1000} 
          value={String(prices.priceTo)}
          onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          placeholder="1000" 
          />
        </div>

        {/* Слайдер цен */}
        <RangeSlider min={0} max={1000} step={10} value={[ prices.priceFrom, prices.priceTo,]} 
          onValueChange={([priceFrom, priceTo]) => setPrice({priceFrom, priceTo})}
        />

      </div>

      <CheckboxFiltersGroup 
      title="Ингредиенты" 
      name='ingredients'
      className="mt-5"
      limit={6}
      defaultItems={items.slice(0, 6)}
      items={items}
      loading={loading}
      onClickCheckbox={onAddId}
      selectedIds={selectedIds}
      />
    </div>
  );
};
