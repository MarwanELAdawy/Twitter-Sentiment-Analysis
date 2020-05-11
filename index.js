const Twitter = require('twitter-lite');

(async function () {

    const user = new Twitter({
        consumer_key: "3HFgEe2mJF69UDEpCTDFUxfLx",
        consumer_secret: "eycd4NJtX9fATViwWRHIS4tb3h2MvDq7TPlqryt68s8MDQnIn4",
    });
        
    try{
        let response = await user.getBearerToken();
        console.log(`Got the following Bearer token from Twitter: ${response.access_token}`);

        const app = new Twitter({
            bearer_token:response.access_token,
        });
        response = await app.get(`/search/tweets`,{
            q: "Egypt",
            lang: "en",
            count:100
        });
        for(tweet of response.statuses){
            console.dir(tweet.text);
        }
    } catch(e){
        console.log("There was an error calling the Twitter API.");
        console.dir(e);
    }
})();