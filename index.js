require('dotenv').config()
const express = require('express');
const app = express();
const githubData = {
    "login": "siddharthpalav",
    "id": 31617295,
    "node_id": "MDQ6VXNlcjMxNjE3Mjk1",
    "avatar_url": "https://avatars.githubusercontent.com/u/31617295?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/siddharthpalav",
    "html_url": "https://github.com/siddharthpalav",
    "followers_url": "https://api.github.com/users/siddharthpalav/followers",
    "following_url": "https://api.github.com/users/siddharthpalav/following{/other_user}",
    "gists_url": "https://api.github.com/users/siddharthpalav/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/siddharthpalav/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/siddharthpalav/subscriptions",
    "organizations_url": "https://api.github.com/users/siddharthpalav/orgs",
    "repos_url": "https://api.github.com/users/siddharthpalav/repos",
    "events_url": "https://api.github.com/users/siddharthpalav/events{/privacy}",
    "received_events_url": "https://api.github.com/users/siddharthpalav/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Siddhartha Palav",
    "company": "LRN",
    "blog": "",
    "location": "Mumbai",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2017-09-04T09:39:20Z",
    "updated_at": "2023-10-07T02:05:56Z"
  };

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
    res.send('shadowsid');
});

app.get('/login', (req, res) => {
    res.send(`<h1>please login at chai aur code</h1>`);
});

app.get('/youtube', (req, res) => {
    res.send(`<h2>chai aur code </h2>`);
});

app.get('/github', (req, res) => {
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
})