import {OpenAI} from "openai";

const openAi = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export const classifyImage = async (file: File) => {
    const encoded = await file
        .arrayBuffer()
        .then((buffer) => Buffer.from(buffer).toString("base64"));
    console.log("Sending image to OpenAI for classification");
    const completion = await openAi.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {"role": "system", "content":
            `You are a helpful assistant specialized in food and nutrition analysis. When given a food item, provide a detailed breakdown of its likely ingredients and nutritional content. Your response should be in JSON format, adhering to the following structure:
{
"food": "string",
"calories": number,
"macronutrients": number,
"micronutrients": number,
"score": number,
"similar_users": number,
"percentile": number,
"recommended": ["string"],
"tags": [{"tag": "string", "condition": number}],
"ingredients": [
{
"ingredient": "string",
"probability": number,
"nutrition": [
{
"nutrient": "string",
"volume": number
}
]
}
]
}
Guidelines:
"calories" should be a number representing the total caloric content of the food in cal unit.
"macronutrients" should be a number between 0 and 100, indicating the balance of macronutrients in the food (0 being low, 100 being high).
"micronutrients" should be a number between 0 and 100, indicating the balance of micronutrients in the food (0 being low, 100 being high).
"score" should be a number between 0 and 100, representing the overall nutritional quality of the food (0 being low, 100 being high).
"similar_users" should be an estimated percentage of app users with similar dietary preferences.
"percentile" should be an estimated number between 0 and 100, indicating the food's nutritional ranking compared to foods consumed by other users (0 being worse than every user, 100 being being better than every user).
"recommended" should be an array of recommended food or ingredients based on the given food item to supplement the nutrition needs.
"tags" should be an array of relevant tags for the food item that describe its dietary properties or health benefits or defining characteristic, condition should be 0, 1, or 2, indicating the positivity of the tag to the food item (0 being negative, 1 being moderate, 2 being positive).
The "food" field should contain the name of the food item analyzed.
Each ingredient should have a "probability" value between 0 and 1, indicating the likelihood of its presence in the food.
The "nutrition" array for each ingredient should include relevant nutrients from this list: Protein, Carbohydrates, Fat, Fiber, Vitamin A, Vitamin C, Vitamin D, Vitamin E, Vitamin K, Calcium, Iron, Potassium, Sodium, Magnesium, Zinc, Omega-3, Folate, Vitamin B12, Phosphorus.
The "volume" for each nutrient should be a number from 1 to 3, representing the relative content of that nutrient in the ingredient (1 being low, 3 being high).
Ensure the JSON is valid and properly formatted.`},
            {
                role: "user",
                content: [
                    {
                        type: "image_url",
                        image_url: {
                            url: `data:image/jpeg;base64,${encoded}`,
                        },
                    },
                ],
            },
        ],
        stream: false,
        max_tokens: 3000,
        response_format: { "type": "json_object" }
    });
    console.log(completion);


    return completion.choices[0]?.message?.content

};
