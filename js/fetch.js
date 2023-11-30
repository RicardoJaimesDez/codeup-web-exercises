"use strict";

(() => {
    // console.log(GH_KEY);

    function getLastCommitDate(username) {
        const url = `https://api.github.com/users/${username}/events`;

        return new Promise((resolve, reject) => {
            fetch(url, {headers: {'Authorization': `${GH_KEY}`}})
                .then(response => {
                    if (response) {
                        return response.json();
                    }
                })
                .then(events => {
                    const lastCommitEvent = events.find(event => event.type === 'PushEvent');
                    if (lastCommitEvent) {
                        const lastCommitDate = new Date(lastCommitEvent["created_at"]);
                        resolve(lastCommitDate.toDateString());
                    }
                });

        });
    }

    const githubUsername = 'RicardoJaimesDez';
    getLastCommitDate(githubUsername)
        .then(date => {
            console.log(`Last commit date for ${githubUsername} was on: ${date}`);
        });
})();