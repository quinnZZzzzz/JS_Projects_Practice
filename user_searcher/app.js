// Github Class to Get User Info
class Github {
  constructor() {
    this.client_id = "dea31811e915cee5e22d";
    this.client_secret = "715726b62c1f3f7675313881a38fe08625fe92f3";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos,
    };
  }
}

// UI class to Add User Info to UI
class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">

          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}"> 
            <a href="${user.html_url} target="-blank"  class="btn btn-primary btn-block">View Profile</a>
          </div>
            
          <div class="col-md-9">
            <span class="badge bg-warning">Public Repos: ${user.public_repos}</span>
            <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge bg-success">Followers: ${user.followers}</span>
            <span class="badge bg-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>

        </div>
      </div>
      <h3 class="page-heading" mb-3>Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  showRepos(repos) {
    let output = ``;

    repos.forEach((repo) => {
      output += `
            <div class="card card-body mb-2">
              <div class="row">
                <div class="col-md-6">
                  <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <span class="badge bg-warning">Stars: ${repo.stargazers_count}</span>
                    <span class="badge bg-secondary">Public Gists: ${repo.watchers_count}</span>
                    <span class="badge bg-success">Forks: ${repo.forks_count}</span>
                </div>
              </div>
            </div>
          `;
    });

    document.getElementById("repos").innerHTML = output;
  }
}

// Search input
const searchUser = document.getElementById("search-user");

// Init github
const github = new Github();

// Init UI
const ui = new UI();

// Search Input Event Listener
searchUser.addEventListener("keyup", (e) => {
  // Get Inout Text
  const userText = e.target.value;

  if (userText) {
    // Make Http Call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show Alert
      } else {
        // Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
      console.log(data);
    });
  } else {
    // Clear the Profile
    document.getElementById("profile").innerHTML = "";
  }
});
