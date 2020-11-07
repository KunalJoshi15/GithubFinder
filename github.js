class Github {
  constructor() {
    this.client_id = 'd9308aacf8b204d361fd';
    this.client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
/*
How this entire code works 
GITHUB we have created a constructor in which all the information are defined. 
async getUser(user)
{
  this code will let us to get the user information to us and the await is used to get the information.
  await fetch(`Here the URL will be added`)
  the response will also return a promise then the profileResponse.json()....
}
*/
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}