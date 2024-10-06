import {atom, RecoilState} from "recoil";
import {getTodayFormatted} from "@/app/utils";

export const dateStore: RecoilState<string> = atom({
    key: 'dateStore',
    default: getTodayFormatted(),
});

// @ts-ignore
export const foodStore: RecoilState<Food[]> = atom({
    key: 'foodStore',
    default: [],
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

export interface FoodTag {
    tag: string;
    condition: number;
}

export interface Food {
    food: string;
    ingredients: Ingredient[];
    date: number;
    calories: number;
    uuid: string;
    img: string;
    macronutrients: number,
    micronutrients: number,
    score: number,
    similar_users: number,
    percentile: number,
    recommended: string[],
    tags?: FoodTag[]
}

const nutrition = [
    {"name": "Protein", "short": "Prot"},
    {"name": "Carbohydrates", "short": "Carbs"},
    {"name": "Fat", "short": "Fat"},
    {"name": "Fiber", "short": "Fiber"},
    {"name": "Vitamin A", "short": "Vit A"},
    {"name": "Vitamin C", "short": "Vit C"},
    {"name": "Vitamin D", "short": "Vit D"},
    {"name": "Vitamin E", "short": "Vit E"},
    {"name": "Vitamin K", "short": "Vit K"},
    {"name": "Calcium", "short": "Ca"},
    {"name": "Iron", "short": "Fe"},
    {"name": "Potassium", "short": "K"},
    {"name": "Sodium", "short": "Na"},
    {"name": "Magnesium", "short": "Mg"},
    {"name": "Zinc", "short": "Zn"},
    {"name": "Omega-3", "short": "Omg3"},
    {"name": "Folate", "short": "Fol"},
    {"name": "Vitamin B12", "short": "B12"},
    {"name": "Phosphorus", "short": "P"},
    {"name": "Calories", "short": "Cal"}
]

export function aggregateNutrition(foods: Food[]): {[key: string]: number} {
    const n : any = {}
    foods.forEach((food) => {
        food.ingredients.forEach((ingredient) => {
            ingredient.nutrition.forEach((nutrient) => {
                if (n[nutrient.nutrient]) {
                    n[nutrient.nutrient] += nutrient.volume
                } else {
                    n[nutrient.nutrient] = nutrient.volume
                }
            })
        })
    })
    const nn : any = {}
    nutrition.forEach((nutrient) => {
        if (n[nutrient.name]) {
            nn[nutrient.short] = n[nutrient.name] * 40
        }
    })
    return nn;
}
