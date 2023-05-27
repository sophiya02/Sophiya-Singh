import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
const octokit = new Octokit({
    auth: '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'
  })
  
  const repo = async () => {
    let res = await octokit.request('GET /users/sophiya02/repos', {
        username: 'sophiya02',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      console.log('res',res);
  }

  repo();
  

