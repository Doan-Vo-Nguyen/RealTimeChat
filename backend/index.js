const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true}));

app.post("/authenticate", async(req, res) => {
    const {username} = req.body;
    
    /* Handling the authentication process. */
    try {
        const r = await axios.put (
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: {"private-key": "3984c1b4-9e77-4e2d-820f-04813813868f"} }
        );
        return res.status(r.status).json(r.data);
    }catch(err) {
        return res.status(err.response.status).json(err.response.data);
    }
});

app.listen(3001);