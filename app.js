// Init Github
const github = new Github;
// Init UI
const ui = new UI;

// Search input
// We will be fetching the text which we have entered. then when the key is pressed an event is triggered e.target.value is used to the get the value
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
   // Make http call
   // This will be sent tothe function and if not found simply an alert will be shown having user not found. 
   github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else {
    // Clear profile
    // Otherwise we will be simply clearing the profile itself.
    ui.clearProfile();
  }
}); 