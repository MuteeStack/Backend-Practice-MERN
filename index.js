const express = require('express')
const app = express()
const PORT = 3000



const githubData = {
  "login": "MuteeStack",
  "id": 221294040,
  "node_id": "U_kgDODTCt2A",
  "avatar_url": "https://avatars.githubusercontent.com/u/221294040?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/MuteeStack",
  "html_url": "https://github.com/MuteeStack",
  "followers_url": "https://api.github.com/users/MuteeStack/followers",
  "following_url": "https://api.github.com/users/MuteeStack/following{/other_user}",
  "gists_url": "https://api.github.com/users/MuteeStack/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/MuteeStack/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/MuteeStack/subscriptions",
  "organizations_url": "https://api.github.com/users/MuteeStack/orgs",
  "repos_url": "https://api.github.com/users/MuteeStack/repos",
  "events_url": "https://api.github.com/users/MuteeStack/events{/privacy}",
  "received_events_url": "https://api.github.com/users/MuteeStack/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Mutee Ur Rehman",
  "company": null,
  "blog": "https://mutee.me/",
  "location": "Pakistan",
  "email": null,
  "hireable": null,
  "bio": "Full-Stack Developer | Experienced with React, Node.js, Express.js & MongoDB | Focused on clean UI, performance, and modern web practices",
  "twitter_username": "Mutee275",
  "public_repos": 12,
  "public_gists": 0,
  "followers": 8,
  "following": 1,
  "created_at": "2025-07-17T06:59:22Z",
  "updated_at": "2026-07-15T04:49:52Z"
}

app.get('/' , (req , res) => {
  res.send("Hello This is Mutee")
})

app.get('/login' , (req , res) => {
  res.send("<h1>Please Login Your Account</h1>")
})

app.get('/github' , (req , res) => {
  res.json(githubData)
})


app.listen(PORT , ()=>{
  console.log(`App running on port ${PORT} `)
})