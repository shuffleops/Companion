export default async function handler(req, res) {
    console.log("Asking Dalle");
    let prompt = req.body.prompt;
    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',  
      headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: prompt,
          n: 1,
          size: "1024x1024",
        }),
      });
      const data = await response.json();
      console.log(`data ${JSON.stringify(data)}`)
      const image = data.data[0].url;
      res.status(200).json({ image: image });
    } catch (error) {
        console.log(`error.message ${error.message}`)
      res.status(500).json({ message: error.message });
    }
  }