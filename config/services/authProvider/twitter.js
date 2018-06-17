
const Twitter = require("node-twitter-api");
const promise = require('bluebird');

module.exports =class twitterClass{
    constructor(){
        this.twitter = new Twitter({
            consumerKey: TWITTER_CONSUMER_KEY || '3iuYxjH7fgNowbIKLQ8tiL2PR',
            consumerSecret: TWITTER_CONSUMER_SECRET || 'vULlzG9N9Ppj0guv3Pm16CxcK43ACH2zAEc2ZLbjRb2yPJXNOI',
            callback: process.env.TWITTER_CALLBACK || 'http://127.0.0.1:4200/'
        });
        this.twitter= promise.promisifyAll(this.twitter);

    }
    async getDailogLink(){
        let {requestToken,requestSecret} = await this.getRequestToken();
        this.requestSecret=requestSecret;
        return `https://api.twitter.com/oauth/authenticate?oauth_token=${requestToken}`;
    }
    async getUser(data){
        let {accessToken, accessSecret} = await this.getAccesToken(data);
        let user = await this.verifyUser({accessToken, accessSecret});
        return {user,token:accessToken};
    }
    getRequestToken(){
        return new Promise((resolve,reject)=>{
            this.twitter.getRequestToken((err, requestToken, requestSecret)=>{
                if(err){
                    reject(err);
                }else{
                    resolve({requestToken,requestSecret})                    
                }
            })
        });
    }
    getAccesToken(data){
        return new Promise((resolve,reject)=>{
            this.twitter.getAccessToken(data['oauth_token'],this.requestSecret,data['oauth_verifier'],
            (err, accessToken, accessSecret)=>{
                if(err){
                    reject(err);
                }else{
                    resolve({accessToken, accessSecret})                    
                }
            })
        });
    }
    verifyUser({accessToken, accessSecret}){
        return new Promise((resolve,reject)=>{
            this.twitter.verifyCredentials(accessToken, accessSecret, (err, user) => {
                if(err){
                    reject(err);
                }else{
                    resolve(user);                   
                }
            })
        });
    }
} 