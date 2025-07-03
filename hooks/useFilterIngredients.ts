import { Api } from '@/services/api-client'
import { Ingredient } from '@prisma/client'
import React from 'react'
import { useSet } from 'react-use'

interface ReturnProps {
	ingredients: Ingredient[];
	loading: boolean;
	selectedIds: Set<string>;
	onAddId: (id: string) => void;
};

export const useFilterIngredients = (): ReturnProps => {
	const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
	const [loading, setLoading] = React.useState<boolean>(true);

	// Хук для хранения списка ингредиентов https://streamich.github.io/react-use/?path=/story/state-useset--docs
	const [selectedIds, { toggle }] = useSet(new Set<string>([]));

		React.useEffect(() => {
			async function fetchIngredients() {
				try {
					setLoading(true);
					const ingredients = await Api.ingredients.getAll();
					setIngredients(ingredients);
				}
				catch (error) {
					console.error('Ошибка при получении ингредиентов:', error);
				} finally {
					setLoading(false);
				}
			}
			fetchIngredients();
		},[]);

		return {ingredients, loading, onAddId: toggle, selectedIds};
	};
