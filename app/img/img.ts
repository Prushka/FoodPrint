import {OpenAI} from "openai";

const openAi = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export const classifyImage = async (file: File) => {
    const encoded = await file
        .arrayBuffer()
        .then((buffer) => Buffer.from(buffer).toString("base64"));

    const completion = await openAi.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {"role": "system", "content": "You are a helpful assistant. Your response should be in JSON format of {'food': 'string', ingredients: [{'ingredient': 'string', 'probability': 'number', [{'nutrition': 'string', 'volume': '0-5'}]}] }"},
            {
                role: "user",
                content: [
                    {
                        type: "text",
                        text: "Give me a list of all ingredients and the probability of them from all the food in the image, every ingredient should contain a list of nutrition that's in them and a volume of suggested intake per meal on a scale of 0-5",
                    },
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

    return completion.choices[0]?.message?.content

};
