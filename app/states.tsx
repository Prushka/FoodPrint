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
            "food": "Balanced Plate",
            "calories": 450,
            "macronutrients": 90,
            "micronutrients": 85,
            "score": 92,
            "similar_users": 78,
            "percentile": 88,
            "recommended": [
                "Avocado",
                "Chia Seeds",
                "Kale"
            ],
            "tags": [
                {
                    "tag": "balanced",
                    "condition": 2
                },
                {
                    "tag": "high-fiber",
                    "condition": 2
                },
                {
                    "tag": "protein-rich",
                    "condition": 2
                }
            ],
            "ingredients": [
                {
                    "ingredient": "broccoli",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Fiber",
                            "volume": 2
                        },
                        {
                            "nutrient": "Vitamin C",
                            "volume": 3
                        }
                    ]
                },
                {
                    "ingredient": "carrots",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin A",
                            "volume": 3
                        },
                        {
                            "nutrient": "Fiber",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "strawberries",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin C",
                            "volume": 3
                        },
                        {
                            "nutrient": "Fiber",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "mixed nuts",
                    "probability": 0.8,
                    "nutrition": [
                        {
                            "nutrient": "Protein",
                            "volume": 2
                        },
                        {
                            "nutrient": "Fat",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "salmon",
                    "probability": 0.8,
                    "nutrition": [
                        {
                            "nutrient": "Omega-3",
                            "volume": 3
                        },
                        {
                            "nutrient": "Protein",
                            "volume": 3
                        }
                    ]
                },
                {
                    "ingredient": "quinoa",
                    "probability": 0.8,
                    "nutrition": [
                        {
                            "nutrient": "Protein",
                            "volume": 2
                        },
                        {
                            "nutrient": "Fiber",
                            "volume": 2
                        }
                    ]
                }
            ],
            "date": 1727613951,
            "uuid": "e8atjg",
            "img": "e8atjg.png"
        },
        {
            "food": "Pancakes with Berries and Syrup",
            "calories": 550,
            "macronutrients": 65,
            "micronutrients": 45,
            "score": 60,
            "similar_users": 75,
            "percentile": 65,
            "recommended": [
                "Greek Yogurt",
                "Nuts",
                "Banana"
            ],
            "tags": [
                {
                    "tag": "Breakfast",
                    "condition": 2
                },
                {
                    "tag": "Sweet",
                    "condition": 1
                },
                {
                    "tag": "High Carbohydrate",
                    "condition": 0
                }
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
                        }
                    ]
                },
                {
                    "ingredient": "Berries",
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
                            "nutrient": "Vitamin K",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Syrup",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Carbohydrates",
                            "volume": 3
                        },
                        {
                            "nutrient": "Sugar",
                            "volume": 3
                        }
                    ]
                }
            ],
            "date": 1727600351,
            "uuid": "evfffa",
            "img": "evfffa.png"
        },
        {
            "food": "Spaghetti Carbonara",
            "calories": 450,
            "macronutrients": 75,
            "micronutrients": 50,
            "score": 70,
            "similar_users": 65,
            "percentile": 70,
            "recommended": [
                "Broccoli",
                "Spinach"
            ],
            "tags": [
                {
                    "tag": "Italian",
                    "condition": 2
                },
                {
                    "tag": "High Protein",
                    "condition": 1
                },
                {
                    "tag": "Comfort Food",
                    "condition": 2
                }
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
                            "nutrient": "Protein",
                            "volume": 1
                        },
                        {
                            "nutrient": "Fiber",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Pancetta",
                    "probability": 0.8,
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
                    "ingredient": "Eggs",
                    "probability": 0.7,
                    "nutrition": [
                        {
                            "nutrient": "Protein",
                            "volume": 2
                        },
                        {
                            "nutrient": "Fat",
                            "volume": 2
                        },
                        {
                            "nutrient": "Vitamin D",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Parmesan Cheese",
                    "probability": 0.8,
                    "nutrition": [
                        {
                            "nutrient": "Calcium",
                            "volume": 2
                        },
                        {
                            "nutrient": "Protein",
                            "volume": 2
                        },
                        {
                            "nutrient": "Fat",
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
            "date": 1727700351,
            "uuid": "xsk8b5",
            "img": "xsk8b5.png"
        },
        {
            "food": "Tteokbokki",
            "calories": 500,
            "macronutrients": 60,
            "micronutrients": 50,
            "score": 70,
            "similar_users": 65,
            "percentile": 75,
            "recommended": [
                "Kimchi",
                "Vegetables"
            ],
            "tags": [
                {
                    "tag": "Spicy",
                    "condition": 2
                },
                {
                    "tag": "Korean",
                    "condition": 2
                },
                {
                    "tag": "Comfort food",
                    "condition": 1
                }
            ],
            "ingredients": [
                {
                    "ingredient": "Rice cakes",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Carbohydrates",
                            "volume": 3
                        },
                        {
                            "nutrient": "Protein",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Gochujang sauce",
                    "probability": 0.8,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin A",
                            "volume": 1
                        },
                        {
                            "nutrient": "Carbohydrates",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "Fish cakes",
                    "probability": 0.7,
                    "nutrition": [
                        {
                            "nutrient": "Protein",
                            "volume": 2
                        },
                        {
                            "nutrient": "Fat",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Hard-boiled egg",
                    "probability": 0.6,
                    "nutrition": [
                        {
                            "nutrient": "Protein",
                            "volume": 2
                        },
                        {
                            "nutrient": "Vitamin B12",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Green onions",
                    "probability": 0.5,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin C",
                            "volume": 1
                        },
                        {
                            "nutrient": "Fiber",
                            "volume": 1
                        }
                    ]
                }
            ],
            "date": 1727686751,
            "uuid": "akgcad",
            "img": "akgcad.png"
        },
        {
            "food": "hamburger",
            "calories": 350,
            "macronutrients": 75,
            "micronutrients": 55,
            "score": 60,
            "similar_users": 70,
            "percentile": 50,
            "recommended": [
                "grilled chicken",
                "vegetable salad"
            ],
            "tags": [
                {
                    "tag": "fast food",
                    "condition": 0
                },
                {
                    "tag": "protein-rich",
                    "condition": 2
                },
                {
                    "tag": "high calorie",
                    "condition": 0
                }
            ],
            "ingredients": [
                {
                    "ingredient": "beef patty",
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
                            "nutrient": "Iron",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "burger bun",
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
                            "nutrient": "Sodium",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "cheese",
                    "probability": 0.8,
                    "nutrition": [
                        {
                            "nutrient": "Protein",
                            "volume": 2
                        },
                        {
                            "nutrient": "Calcium",
                            "volume": 2
                        },
                        {
                            "nutrient": "Fat",
                            "volume": 3
                        }
                    ]
                },
                {
                    "ingredient": "lettuce",
                    "probability": 0.7,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin A",
                            "volume": 2
                        },
                        {
                            "nutrient": "Vitamin K",
                            "volume": 2
                        },
                        {
                            "nutrient": "Fiber",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "tomato",
                    "probability": 0.7,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin C",
                            "volume": 2
                        },
                        {
                            "nutrient": "Potassium",
                            "volume": 1
                        },
                        {
                            "nutrient": "Fiber",
                            "volume": 1
                        }
                    ]
                }
            ],
            "date": 1727786751,
            "uuid": "v5wtu8",
            "img": "v5wtu8.png"
        },
        {
            "food": "Ramen with Vegetables and Soft-Boiled Egg",
            "calories": 450,
            "macronutrients": 75,
            "micronutrients": 65,
            "score": 70,
            "similar_users": 50,
            "percentile": 60,
            "recommended": [
                "Tofu",
                "Seaweed",
                "Edamame"
            ],
            "tags": [
                {
                    "tag": "vegetarian",
                    "condition": 2
                },
                {
                    "tag": "high_protein",
                    "condition": 1
                },
                {
                    "tag": "contains_egg",
                    "condition": 2
                }
            ],
            "ingredients": [
                {
                    "ingredient": "Ramen Noodles",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Carbohydrates",
                            "volume": 3
                        },
                        {
                            "nutrient": "Protein",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Soft-Boiled Egg",
                    "probability": 0.8,
                    "nutrition": [
                        {
                            "nutrient": "Protein",
                            "volume": 3
                        },
                        {
                            "nutrient": "Fat",
                            "volume": 2
                        },
                        {
                            "nutrient": "Vitamin D",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Bok Choy",
                    "probability": 0.7,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin C",
                            "volume": 2
                        },
                        {
                            "nutrient": "Vitamin K",
                            "volume": 3
                        }
                    ]
                },
                {
                    "ingredient": "Mushrooms",
                    "probability": 0.7,
                    "nutrition": [
                        {
                            "nutrient": "Fiber",
                            "volume": 1
                        },
                        {
                            "nutrient": "Potassium",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "Green Onions",
                    "probability": 0.6,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin A",
                            "volume": 1
                        },
                        {
                            "nutrient": "Vitamin C",
                            "volume": 1
                        }
                    ]
                }
            ],
            "date": 1727773151,
            "uuid": "raxt3r",
            "img": "raxt3r.png"
        },
        {
            "food": "Chicken nuggets, fries, ketchup, and a berry drink",
            "calories": 850,
            "macronutrients": 65,
            "micronutrients": 40,
            "score": 50,
            "similar_users": 60,
            "percentile": 50,
            "recommended": [
                "Salad",
                "Grilled vegetables",
                "Fruit"
            ],
            "tags": [
                {
                    "tag": "fried",
                    "condition": 0
                },
                {
                    "tag": "processed",
                    "condition": 0
                },
                {
                    "tag": "high-calorie",
                    "condition": 0
                },
                {
                    "tag": "kid-friendly",
                    "condition": 2
                }
            ],
            "ingredients": [
                {
                    "ingredient": "Chicken nuggets",
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
                            "volume": 3
                        }
                    ]
                },
                {
                    "ingredient": "Fries",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Carbohydrates",
                            "volume": 3
                        },
                        {
                            "nutrient": "Fat",
                            "volume": 2
                        },
                        {
                            "nutrient": "Sodium",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "Ketchup",
                    "probability": 0.8,
                    "nutrition": [
                        {
                            "nutrient": "Carbohydrates",
                            "volume": 1
                        },
                        {
                            "nutrient": "Sodium",
                            "volume": 1
                        },
                        {
                            "nutrient": "Vitamin C",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Berry drink",
                    "probability": 0.8,
                    "nutrition": [
                        {
                            "nutrient": "Carbohydrates",
                            "volume": 2
                        },
                        {
                            "nutrient": "Vitamin C",
                            "volume": 2
                        }
                    ]
                }
            ],
            "date": 1727873151,
            "uuid": "uib7pc",
            "img": "uib7pc.png"
        },
        {
            "food": "Chicken Ramen",
            "calories": 450,
            "macronutrients": 70,
            "micronutrients": 60,
            "score": 75,
            "similar_users": 65,
            "percentile": 70,
            "recommended": [
                "Spinach",
                "Broccoli",
                "Tofu"
            ],
            "tags": [
                {
                    "tag": "protein-rich",
                    "condition": 2
                },
                {
                    "tag": "comfort food",
                    "condition": 2
                },
                {
                    "tag": "high sodium",
                    "condition": 0
                }
            ],
            "ingredients": [
                {
                    "ingredient": "Chicken",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Protein",
                            "volume": 3
                        },
                        {
                            "nutrient": "Vitamin B12",
                            "volume": 2
                        },
                        {
                            "nutrient": "Iron",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Ramen Noodles",
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
                    "ingredient": "Green Onions",
                    "probability": 0.8,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin K",
                            "volume": 2
                        },
                        {
                            "nutrient": "Vitamin C",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Boiled Egg",
                    "probability": 0.7,
                    "nutrition": [
                        {
                            "nutrient": "Protein",
                            "volume": 2
                        },
                        {
                            "nutrient": "Vitamin D",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Seaweed",
                    "probability": 0.6,
                    "nutrition": [
                        {
                            "nutrient": "Iodine",
                            "volume": 3
                        },
                        {
                            "nutrient": "Vitamin A",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Bamboo Shoots",
                    "probability": 0.5,
                    "nutrition": [
                        {
                            "nutrient": "Fiber",
                            "volume": 2
                        },
                        {
                            "nutrient": "Potassium",
                            "volume": 1
                        }
                    ]
                }
            ],
            "date": 1727859551,
            "uuid": "ot5lx8",
            "img": "ot5lx8.png"
        },
        {
            "food": "Persian Saffron Rice with Curry",
            "calories": 850,
            "macronutrients": 70,
            "micronutrients": 50,
            "score": 65,
            "similar_users": 60,
            "percentile": 75,
            "recommended": [
                "Grilled Vegetables",
                "Salad",
                "Yogurt"
            ],
            "tags": [
                {
                    "tag": "rich in carbs",
                    "condition": 2
                },
                {
                    "tag": "contains dairy",
                    "condition": 1
                },
                {
                    "tag": "gluten-free",
                    "condition": 2
                }
            ],
            "ingredients": [
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
                        }
                    ]
                },
                {
                    "ingredient": "Saffron",
                    "probability": 0.8,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin C",
                            "volume": 1
                        },
                        {
                            "nutrient": "Iron",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Barberries",
                    "probability": 0.7,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin C",
                            "volume": 2
                        },
                        {
                            "nutrient": "Fiber",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Chicken Curry",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Protein",
                            "volume": 3
                        },
                        {
                            "nutrient": "Fat",
                            "volume": 2
                        },
                        {
                            "nutrient": "Sodium",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "Cream",
                    "probability": 0.8,
                    "nutrition": [
                        {
                            "nutrient": "Fat",
                            "volume": 3
                        },
                        {
                            "nutrient": "Calcium",
                            "volume": 1
                        }
                    ]
                }
            ],
            "date": 1727959551,
            "uuid": "mtxxo7",
            "img": "mtxxo7.png"
        },
        {
            "food": "chicken nuggets",
            "calories": 940,
            "macronutrients": 60,
            "micronutrients": 30,
            "score": 40,
            "similar_users": 70,
            "percentile": 35,
            "recommended": [
                "grilled chicken",
                "vegetable salad",
                "whole grain bread"
            ],
            "tags": [
                {
                    "tag": "processed",
                    "condition": 0
                },
                {
                    "tag": "fast food",
                    "condition": 1
                },
                {
                    "tag": "high protein",
                    "condition": 2
                }
            ],
            "ingredients": [
                {
                    "ingredient": "chicken",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Protein",
                            "volume": 3
                        },
                        {
                            "nutrient": "Fat",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "breading",
                    "probability": 0.8,
                    "nutrition": [
                        {
                            "nutrient": "Carbohydrates",
                            "volume": 3
                        },
                        {
                            "nutrient": "Sodium",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "vegetable oil",
                    "probability": 0.7,
                    "nutrition": [
                        {
                            "nutrient": "Fat",
                            "volume": 3
                        },
                        {
                            "nutrient": "Vitamin E",
                            "volume": 1
                        }
                    ]
                }
            ],
            "date": 1727945951,
            "uuid": "en462d",
            "img": "en462d.png"
        },
        {
            "food": "chicken nuggets",
            "calories": 940,
            "macronutrients": 60,
            "micronutrients": 30,
            "score": 40,
            "similar_users": 70,
            "percentile": 35,
            "recommended": [
                "grilled chicken",
                "vegetable salad",
                "whole grain bread"
            ],
            "tags": [
                {
                    "tag": "processed",
                    "condition": 0
                },
                {
                    "tag": "fast food",
                    "condition": 1
                },
                {
                    "tag": "high protein",
                    "condition": 2
                }
            ],
            "ingredients": [
                {
                    "ingredient": "chicken",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Protein",
                            "volume": 3
                        },
                        {
                            "nutrient": "Fat",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "breading",
                    "probability": 0.8,
                    "nutrition": [
                        {
                            "nutrient": "Carbohydrates",
                            "volume": 3
                        },
                        {
                            "nutrient": "Sodium",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "vegetable oil",
                    "probability": 0.7,
                    "nutrition": [
                        {
                            "nutrient": "Fat",
                            "volume": 3
                        },
                        {
                            "nutrient": "Vitamin E",
                            "volume": 1
                        }
                    ]
                }
            ],
            "date": 1728045951,
            "uuid": "en462d",
            "img": "en462d.png"
        },
        {
            "food": "Stir-fried Tofu with Vegetables and Rice",
            "calories": 450,
            "macronutrients": 70,
            "micronutrients": 60,
            "score": 75,
            "similar_users": 42,
            "percentile": 68,
            "recommended": [
                "Quinoa",
                "Mixed Nuts",
                "Chia Seeds"
            ],
            "tags": [
                {
                    "tag": "Vegetarian",
                    "condition": 2
                },
                {
                    "tag": "High Fiber",
                    "condition": 2
                },
                {
                    "tag": "Low Saturated Fat",
                    "condition": 2
                }
            ],
            "ingredients": [
                {
                    "ingredient": "Tofu",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Protein",
                            "volume": 2
                        },
                        {
                            "nutrient": "Calcium",
                            "volume": 2
                        },
                        {
                            "nutrient": "Iron",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "Broccoli",
                    "probability": 0.7,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin C",
                            "volume": 3
                        },
                        {
                            "nutrient": "Fiber",
                            "volume": 2
                        },
                        {
                            "nutrient": "Vitamin K",
                            "volume": 3
                        }
                    ]
                },
                {
                    "ingredient": "Carrot",
                    "probability": 0.6,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin A",
                            "volume": 3
                        },
                        {
                            "nutrient": "Fiber",
                            "volume": 2
                        },
                        {
                            "nutrient": "Potassium",
                            "volume": 2
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
                            "nutrient": "Protein",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Lettuce",
                    "probability": 0.8,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin A",
                            "volume": 2
                        },
                        {
                            "nutrient": "Vitamin K",
                            "volume": 2
                        },
                        {
                            "nutrient": "Folate",
                            "volume": 1
                        }
                    ]
                }
            ],
            "date": 1728032351,
            "uuid": "0s2kxr",
            "img": "0s2kxr.png"
        },
        {
            "food": "Mixed Fruit Platter",
            "calories": 200,
            "macronutrients": 70,
            "micronutrients": 85,
            "score": 90,
            "similar_users": 75,
            "percentile": 85,
            "recommended": [
                "Greek yogurt",
                "Nuts",
                "Seeds"
            ],
            "tags": [
                {
                    "tag": "low_calorie",
                    "condition": 2
                },
                {
                    "tag": "high_fiber",
                    "condition": 2
                },
                {
                    "tag": "vegan",
                    "condition": 2
                }
            ],
            "ingredients": [
                {
                    "ingredient": "Cantaloupe",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin A",
                            "volume": 3
                        },
                        {
                            "nutrient": "Vitamin C",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "Strawberries",
                    "probability": 0.9,
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
                    "ingredient": "Honeydew Melon",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin C",
                            "volume": 2
                        },
                        {
                            "nutrient": "Potassium",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "Watermelon",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin C",
                            "volume": 2
                        },
                        {
                            "nutrient": "Hydration",
                            "volume": 3
                        }
                    ]
                },
                {
                    "ingredient": "Pineapple",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin C",
                            "volume": 3
                        },
                        {
                            "nutrient": "Manganese",
                            "volume": 2
                        }
                    ]
                }
            ],
            "date": 1728132351,
            "uuid": "bhiu4g",
            "img": "bhiu4g.png"
        },
        {
            "food": "Tomato and Egg Stir-fry with Rice",
            "calories": 450,
            "macronutrients": 70,
            "micronutrients": 60,
            "score": 75,
            "similar_users": 35,
            "percentile": 65,
            "recommended": [
                "Spinach",
                "Broccoli",
                "Avocado"
            ],
            "tags": [
                {
                    "tag": "High Protein",
                    "condition": 2
                },
                {
                    "tag": "Vegetarian",
                    "condition": 2
                },
                {
                    "tag": "Gluten-Free",
                    "condition": 2
                }
            ],
            "ingredients": [
                {
                    "ingredient": "Egg",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Protein",
                            "volume": 3
                        },
                        {
                            "nutrient": "Vitamin D",
                            "volume": 2
                        },
                        {
                            "nutrient": "Fat",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "Tomato",
                    "probability": 0.9,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin C",
                            "volume": 3
                        },
                        {
                            "nutrient": "Vitamin K",
                            "volume": 2
                        },
                        {
                            "nutrient": "Potassium",
                            "volume": 2
                        }
                    ]
                },
                {
                    "ingredient": "Rice",
                    "probability": 0.8,
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
                },
                {
                    "ingredient": "Spring Onion",
                    "probability": 0.5,
                    "nutrition": [
                        {
                            "nutrient": "Vitamin A",
                            "volume": 1
                        },
                        {
                            "nutrient": "Vitamin C",
                            "volume": 1
                        }
                    ]
                }
            ],
            "date": 1728118751,
            "uuid": "7ohe5o",
            "img": "7ohe5o.png"
        },
        {
            "food": "Fried Eggs and Yogurt",
            "calories": 400,
            "macronutrients": 75,
            "micronutrients": 60,
            "score": 70,
            "similar_users": 50,
            "percentile": 65,
            "recommended": [
                "Whole grain toast",
                "Spinach",
                "Tomatoes"
            ],
            "tags": [
                {
                    "tag": "high protein",
                    "condition": 2
                },
                {
                    "tag": "vegetarian",
                    "condition": 2
                },
                {
                    "tag": "gluten-free",
                    "condition": 2
                },
                {
                    "tag": "rich in vitamin D",
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
                            "nutrient": "Vitamin D",
                            "volume": 2
                        },
                        {
                            "nutrient": "Vitamin B12",
                            "volume": 2
                        },
                        {
                            "nutrient": "Sodium",
                            "volume": 1
                        }
                    ]
                },
                {
                    "ingredient": "Yogurt",
                    "probability": 0.9,
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
                            "nutrient": "Potassium",
                            "volume": 2
                        },
                        {
                            "nutrient": "Probiotics",
                            "volume": 2
                        }
                    ]
                }
            ],
            "date": 1728216692,
            "uuid": "yir5om",
            "img": "yir5om.png"
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
