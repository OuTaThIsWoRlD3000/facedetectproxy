import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'; // Add this line

const app = express();
const port = 3001;

// Add the CORS middleware
app.use(cors()); // Add this line

app.use(express.json());

app.post('/clarifai', async (req, res) => {
    const { imageUrl } = req.body;
    const USER_ID = 'clarifai';
    const APP_ID = 'main';
    const PAT = '87fe9e51f4194cdba83d0b2301f21fef';

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": imageUrl
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    try {
        const response = await fetch('https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs', requestOptions);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to fetch from Clarifai' });
    }
});

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});
