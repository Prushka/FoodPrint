import {atom, RecoilState} from "recoil";
import {getTodayFormatted} from "@/app/page";

export const dateStore: RecoilState<string> = atom({
    key: 'dateStore',
    default: getTodayFormatted(),
});

export const foodStore: RecoilState<Food[]> = atom({
    key: 'foodStore',
    default: [
        {
            "food": "balanced plate",
            "calories": 600,
            "macronutrients": 80,
            "micronutrients": 90,
            "score": 85,
            "similar_users": 75,
            "percentile": 80,
            "recommended": [
                "avocado",
                "chia seeds"
            ],
            "ingredients": [
                {
                    "ingredient": "vegetables",
                    "probability": 1,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin A",
                            "volume": 3
                        },
                        {
                            "nutrient": "Vitamin C",
                            "volume": 3
                        },
                        {
                            "nutrient": "Fiber",
                            "volume": 3
                        }
                    ]
                },
                {
                    "ingredient": "fruits",
                    "probability": 1,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin C",
                            "volume": 3
                        },
                        {
                            "nutrient": "Fiber",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "grains",
                    "probability": 1,
                    "nutrition": [
                        {
                            "nutrient": "Carbohydrates",
                            "volume": 3
                        },
                        {
                            "nutrient": "Fiber",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "proteins",
                    "probability": 1,
                    "nutrition": [
                        {
                            "nutrient": "Protein",
                            "volume": 3
                        },
                        {
                            "nutrient": "Iron",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "dairy",
                    "probability": 0.8,
                    "nutrition": [
                        {
                            "nutrient": "Calcium",
                            "volume": 3
                        },
                        {
                            "nutrient": "Vitamin D",
                            "volume": 2
                        }
                    ]
                }
            ],
            "date": 1728045951,
            "uuid": "1",
            "img": "1.jpg"
        },
        {
            "food": "pancakes with mixed berries and syrup",
            "calories": 400,
            "macronutrients": 70,
            "micronutrients": 60,
            "score": 65,
            "similar_users": 70,
            "percentile": 60,
            "recommended": [
                "Greek Yogurt",
                "Whole Wheat Flour",
                "Almond Butter"
            ],
            "ingredients": [
                {
                    "ingredient": "Pancakes",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Carbohydrates",
                            "volume": 3
                        },
                        {
                            "nutrient": "Protein",
                            "volume": 1
                        },
                        {
                            "nutrient": "Fat",
                            "volume": 2
                        },
                        {
                            "nutrient": "Fiber",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Blueberries",
                    "probability": 0.8,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin C",
                            "volume": 2
                        },
                        {
                            "nutrient": "Fiber",
                            "volume": 2
                        },
                        {
                            "nutrient": "Carbohydrates",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Blackberries",
                    "probability": 0.7,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin C",
                            "volume": 2
                        },
                        {
                            "nutrient": "Fiber",
                            "volume": 3
                        },
                        {
                            "nutrient": "Vitamin K",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Raspberries",
                    "probability": 0.7,
                    "nutrition": [
                        {
                            "nutrient": "Fiber",
                            "volume": 3
                        },
                        {
                            "nutrient": "Vitamin C",
                            "volume": 2
                        },
                        {
                            "nutrient": "Folate",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Syrup",
                    "probability": 0.85,
                    "nutrition": [
                        {
                            "nutrient": "Carbohydrates",
                            "volume": 2
                        },
                        {
                            "nutrient": "Sugar",
                            "volume": 3
                        }
                    ]
                }
            ],
            "date": 1728032351,
            "uuid": "2",
            "img": "2.jpg"
        },
        {
            "food": "Spaghetti Carbonara",
            "calories": 600,
            "macronutrients": 70,
            "micronutrients": 50,
            "score": 60,
            "similar_users": 45,
            "percentile": 65,
            "recommended": [
                "Green salad",
                "Steamed vegetables",
                "Fruit"
            ],
            "ingredients": [
                {
                    "ingredient": "Spaghetti",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Carbohydrates",
                            "volume": 3
                        },
                        {
                            "nutrient": "Fiber",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Eggs",
                    "probability": 0.8,
                    "nutrition": [
                        {
                            "nutrient": "Protein",
                            "volume": 2
                        },
                        {
                            "nutrient": "Vitamin D",
                            "volume": 1
                        },
                        {
                            "nutrient": "Vitamin B12",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "Pecorino Cheese",
                    "probability": 0.7,
                    "nutrition": [
                        {
                            "nutrient": "Calcium",
                            "volume": 3
                        },
                        {
                            "nutrient": "Protein",
                            "volume": 2
                        },
                        {
                            "nutrient": "Fat",
                            "volume": 3
                        }
                    ]
                },
                {
                    "ingredient": "Pancetta",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Protein",
                            "volume": 2
                        },
                        {
                            "nutrient": "Fat",
                            "volume": 3
                        },
                        {
                            "nutrient": "Sodium",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "Black Pepper",
                    "probability": 0.6,
                    "nutrition": [
                        {
                            "nutrient": "Fiber",
                            "volume": 1
                        }
                    ]
                }
            ],
            "date": 1728132351,
            "uuid": "3",
            "img": "3.jpg"
        },
        {
            "food": "Gnocchi with Tomato Sauce and Cheese",
            "calories": 550,
            "macronutrients": 65,
            "micronutrients": 60,
            "score": 70,
            "similar_users": 45,
            "percentile": 75,
            "recommended": [
                "Steamed Vegetables",
                "Grilled Chicken",
                "Green Salad"
            ],
            "ingredients": [
                {
                    "ingredient": "Gnocchi",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Carbohydrates",
                            "volume": 3
                        },
                        {
                            "nutrient": "Protein",
                            "volume": 1
                        },
                        {
                            "nutrient": "Sodium",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Tomato Sauce",
                    "probability": 0.85,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin C",
                            "volume": 2
                        },
                        {
                            "nutrient": "Vitamin A",
                            "volume": 2
                        },
                        {
                            "nutrient": "Sodium",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "Cheese",
                    "probability": 0.8,
                    "nutrition": [
                        {
                            "nutrient": "Fat",
                            "volume": 3
                        },
                        {
                            "nutrient": "Calcium",
                            "volume": 2
                        },
                        {
                            "nutrient": "Protein",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "Basil",
                    "probability": 0.6,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin K",
                            "volume": 2
                        },
                        {
                            "nutrient": "Vitamin A",
                            "volume": 1
                        },
                        {
                            "nutrient": "Iron",
                            "volume": 1
                        }
                    ]
                }
            ],
            "date": 1728118751,
            "uuid": "4",
            "img": "4.jpg"
        },
        {
            "food": "Scrambled Eggs with Tomatoes and Rice",
            "calories": 400,
            "macronutrients": 70,
            "micronutrients": 60,
            "score": 75,
            "similar_users": 30,
            "percentile": 65,
            "recommended": [
                "Spinach",
                "Avocado",
                "Bell Peppers"
            ],
            "tags": [
                {
                    "tag": "high-protein",
                    "condition": 2
                },
                {
                    "tag": "contains-vegetables",
                    "condition": 2
                },
                {
                    "tag": "vegetarian",
                    "condition": 2
                }
            ],
            "ingredients": [
                {
                    "ingredient": "Eggs",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Protein",
                            "volume": 3
                        },
                        {
                            "nutrient": "Fat",
                            "volume": 3
                        },
                        {
                            "nutrient": "Vitamin B12",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "Tomatoes",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin C",
                            "volume": 3
                        },
                        {
                            "nutrient": "Vitamin A",
                            "volume": 2
                        },
                        {
                            "nutrient": "Fiber",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Rice",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Carbohydrates",
                            "volume": 3
                        },
                        {
                            "nutrient": "Fiber",
                            "volume": 1
                        },
                        {
                            "nutrient": "Protein",
                            "volume": 1
                        }
                    ]
                }
            ],
            "date": 1728208129,
            "uuid": "5",
            "img": "5.jpg"
        }
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

export interface Tag {
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
    tags?: Tag[]
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
