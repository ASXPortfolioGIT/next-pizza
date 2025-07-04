'use client'
import { useFilterIngredients } from '@/hooks/useFilterIngredients'
import React from 'react'
import { useSet } from 'react-use'
import { Input } from '../ui'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
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
  const { ingredients, loading, onAddId, selectedIngredients } = useFilterIngredients();
  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]));

  const [prices, setPrice] = React.useState<PriceProps>({ priceFrom: 0, priceTo: 1000});

  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
  // пример обновления объекта
  setPrice ({
    ...prices,
    [name]: value,
  });
};

React.useEffect(() => {
  console.log({prices, pizzaTypes, sizes, ingredients, selectedIngredients})
}, [prices, pizzaTypes, sizes, ingredients, selectedIngredients])

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* верхние чекбоксы */}

      {/* фильтр теста */}
      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={togglePizzaTypes}
        selected={pizzaTypes}
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
        onClickCheckbox={toggleSizes}
        selected={sizes}
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
      selected={selectedIngredients}
      />
    </div>
  );
};
