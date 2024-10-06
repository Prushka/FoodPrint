import {atom, RecoilState} from "recoil";

export const foodStore: RecoilState<Food[]> = atom({
    key: 'foodStore',
    default: [],
});

interface NutritionInfo {
    nutrition: string;
    volume: number;
}

interface Ingredient {
    ingredient: string;
    probability: number;
    nutrition: NutritionInfo[];
}

interface Food {
    food: string;
    ingredients: Ingredient[];
    date: string;
}
