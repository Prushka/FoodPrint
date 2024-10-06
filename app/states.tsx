import {atom, RecoilState} from "recoil";

export const foodStore: RecoilState<Food[]> = atom({
    key: 'foodStore',
    default: [

    ],
});

export interface NutritionInfo {
    nutrient: string;
    volume: number;
}

export interface Ingredient {
    ingredient: string;
    probability: number;
    nutrition: NutritionInfo[];
}

export interface Food {
    food: string;
    ingredients: Ingredient[];
    date: number;
    calories: number;
}
