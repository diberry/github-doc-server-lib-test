const lib = require("github-doc-server-lib")
debugger;
require('dotenv').config();

const user = 'TEST_OWNER_TOKEN'
const TOKEN = process.env[user];
const FILENAME = `README-OCTOKIT-${user}-xyz-${+new Date()}.md`;

// commit to public repo of another user
const repo = {
    owner: process.env.TEST_REPO_PUBLIC_OWNER,
    name: process.env.TEST_REPO_PUBLIC_NAME,
    path: FILENAME,
};

const fileInfo = {
    commitmessage: 'commmit message my commit message',
    content: 'Hello',
    committername: process.env.TEST_OWNER_NAME,
    committeremail: process.env.TEST_OWNER_EMAIL,
};


lib.GitHub.File.writeFile(TOKEN, repo, fileInfo).then(response => {
    console.log(octokitResponse);
    console.log("success");
}).catch(err => {
    console.log(err);
})



