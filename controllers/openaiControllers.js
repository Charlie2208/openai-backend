const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

const generateFitnessIdeas = async (req, res) => {

    const { prompt } = req.body

    console.log(prompt)

    try{

      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        temperature: 0.6,
        max_tokens: 1500,
        top_p: 1.0,
        frequency_penalty: 1,
        presence_penalty: 1,
      });
      // const idea_result = response.data.choices[0].text;
      const idea_result = response.data.choices;
      res.status(200).json({
        success: true,
        data: idea_result
    })

    } catch(error){
        console.log(error)
    }
}

module.exports = { generateFitnessIdeas }