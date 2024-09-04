// require('dotenv').config();
// const express = require('express');
// const axios = require('axios');
// const { GoogleGenerativeAI } = require('@google/generative-ai');

// const app = express();
// app.use(express.json());
// app.use(express.static('public'));

// // Initialize the Google Generative AI client with the API key from environment variables
// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
// const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// app.get('/roast/:username', async (req, res) => {
//     const { username } = req.params;
//     try {
//         // Fetch GitHub user data
//         const githubResponse = await axios.get(`https://api.github.com/users/${username}`);
//         const profileData = githubResponse.data;

//         if (!profileData) return res.status(404).json({ error: "GitHub user not found" });

//         // Prepare the roast prompt
//         const prompt = `Give me a light-hearted, humorous roast for a GitHub user named ${profileData.name || username}. This user has ${profileData.public_repos} repositories and ${profileData.followers} followers. Make sure the roast is clever and playful, poking fun at their coding skills, repository names, or follower count, but keep it friendly and good-natured.`;

//         // Generate roast with Google Gemini
//         const result = await model.generateContent(prompt);
//         const responseText = await result.response.text();
        
//         res.json({ roast: responseText });
//     } catch (error) {
//         console.error('Error details:', error.response ? error.response.data : error.message);
//         res.status(500).json({ error: 'Failed to fetch data or generate roast' });
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));


// --------------------------------------------------------------------



// require('dotenv').config();
// const axios = require('axios');
// const express = require('express');
// const { GoogleGenerativeAI } = require('@google/generative-ai');

// const app = express();
// app.use(express.json());

// // Initialize the Google Generative AI client with the API key from environment variables
// const genAI = new GoogleGenerativeAI({ apiKey: process.env.GOOGLE_API_KEY });
// const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// app.get('/api/roast', async (req, res) => {
//     const { username } = req.query;
//     try {
//         // Fetch GitHub user data
//         const githubResponse = await axios.get(`https://api.github.com/users/${username}`);
//         const profileData = githubResponse.data;

//         if (!profileData) return res.status(404).json({ error: "GitHub user not found" });

//         // Prepare the roast prompt
//         const prompt = `Give me a light-hearted, humorous roast for a GitHub user named ${profileData.name || username}. This user has ${profileData.public_repos} repositories and ${profileData.followers} followers. Make sure the roast is clever and playful, poking fun at their coding skills, repository names, or follower count, but keep it friendly and good-natured.`;

//         // Generate roast with Google Gemini
//         const result = await model.generateContent({ prompt });
//         const responseText = result.responses[0].text;

//         res.json({ roast: responseText });
//     } catch (error) {
//         console.error('Error details:', error.response ? error.response.data : error.message);
//         res.status(500).json({ error: 'Failed to fetch data or generate roast' });
//     }
// });

// module.exports = app;



export default async function handler(req, res) {
    try {
        // Check if the request method is GET
        if (req.method === 'GET') {
            const { username } = req.query;

            // Validate that username is provided
            if (!username) {
                return res.status(400).json({ error: 'Username is required' });
            }

            // Replace this with your actual logic to generate a roast
            const roast = await generateRoast(username);

            // Respond with the roast message
            return res.status(200).json({ roast });
        } else {
            // Handle any method other than GET
            res.setHeader('Allow', ['GET']);
            return res.status(405).json({ error: `Method ${req.method} not allowed` });
        }
    } catch (error) {
        // Log the error for debugging
        console.error('Error in /api/roast:', error);

        // Respond with a 500 status code for any server-side error
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Example function to generate a roast based on the username
async function generateRoast(username) {
    // Your logic to generate a roast using the username
    // This is just a placeholder; replace it with your actual logic
    return `Sorry ${username}, looks like you've been roasted! 🔥`;
}
