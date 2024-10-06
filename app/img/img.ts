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
The "food" field should contain the name of the food item analyzed.
Each ingredient should have a "probability" value between 0 and 1, indicating the likelihood of its presence in the food.
The "nutrition" array for each ingredient should include relevant nutrients from this list: Protein, Carbohydrates, Fat, Fiber, Vitamin A, Vitamin C, Vitamin D, Vitamin E, Vitamin K, Calcium, Iron, Potassium, Sodium, Magnesium, Zinc, Omega-3, Folate, Vitamin B12, Phosphorus, Calories.
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
        max_tokens: 1000,
        response_format: { "type": "json_object" }
    });
    console.log(completion.choices[0]?.message?.content);

    return completion.choices[0]?.message?.content

};
