'use client'
import { useFilters, useIngredients, useQueryFilters } from '@/hooks'
import React from 'react'
import { Input } from '../ui'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
import { RangeSlider } from './range-slider'
import { Title } from './title'

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const {ingredients, loading} =useIngredients();
  const filters = useFilters();
  useQueryFilters(filters);

  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

  const updatePrices =(prices:  number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  }

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* верхние чекбоксы */}

      {/* фильтр теста */}
      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: 'Тонкое', value: '1' },
          { text: 'Традиционное', value: '2' },
        ]}
      />

      {/* фильтр размеров пиццы */}
      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: '20 cM', value: '20' },
          { text: '30 cM', value: '30' },
          { text: '40 cM', value: '40' },
        ]}
      />

      {/* фильтр цены */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>

        <div className="flex gap-3 mb-5">
          
          <Input 
          type="number" 
          value={filters.prices.priceFrom !== undefined ? filters.prices.priceFrom : ""} 
          placeholder="0" 
          min={0} 
          max={1000} 
          onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
          />
          
          <Input 
          type="number" 
          min={100} 
          max={1000} 
          placeholder="1000" 
          value={filters.prices.priceTo !== undefined ? filters.prices.priceTo : ""}
          onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
          />
        </div>

        {/* Слайдер цен */}
        <RangeSlider
          min={0} 
          max={1000} 
          step={10} 
          value={[ filters.prices.priceFrom || 0, filters.prices.priceTo || 1000,]} 
          onValueChange={updatePrices}
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
      onClickCheckbox={filters.setSelectedIngredients}
      selected={filters.selectedIngredients}
      />
    </div>
  );
};
