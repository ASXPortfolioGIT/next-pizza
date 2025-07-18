import { Api } from '@/services/api-client'
import { Ingredient } from '@prisma/client'
import React from 'react'

export const useIngredients = () => {
const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
const [loading, setLoading] = React.useState<boolean>(true);

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

		return {
			ingredients, 
			loading, 
		};
}