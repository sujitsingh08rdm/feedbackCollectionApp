# Steps performed guide , step by step

## //Intro

---

We have creating a feedback collection app form, where user can put their account information like email username, and password, and give some feedback on serivces they use on pur website, we collected data from form in UI(react) then submit it to our database( mongoDB)

## // Express

---

1. initialize npm.
2. install express, create a index.js file.
3. in index js -> import express, then create a express app, create a route handler, and a server.
4. a. changing port to .env values, b. using engine in package to version node and npm using, c. created a start script in package, gitignore.
5. created a web services application on "https://feedbackcollectionapp.onrender.com" .

## // Google O'Auth

---

1. we will use passport js to simplifly o auth process, install passport and passport stategy
2. we will create a route for /auth/google "google auth route" to handle incoming code
3. we register new google auth strategy with passport by using passport.use()

## // Adding MONGODB

---

1. we will refactor our existing code, so that it becomes more likely spearation of concerns
2. services, and routes will be new folder, where we will put the new files
3. in services we will put our passportfunction and routes to routes folder
4. we will use cookies for authentication ( so that user information is stored in browser , so that user can also be logged in even after sometime in future)
5. created a cluster in mongoDB atlas
6. install mongoose, we will connect mongoose with mongoDB
7. post connection is done, we we create a user model in mongoose, create a schmema of users, with googleId
8. import mongoose user in passport js
9. create a instace of user google Stragegy to save to profile id in databbase
10. since when we are goin to auth route, a new DB collection is being created, so for finxing it we will be creating a if block to handle that
11. since we have already implemented passport by creating user, now we should resume the auth process, by using done
12. we use serializeUser on passport to get a unique identifiing information
13. we use deserializeUser
14. we use a route to test aur auth process, whenever user sucessfully logged in
15. we create a route for logggint the user out

## // Adding Prod keys

---

1. Creaetd a new DB server for storing keys // key=mongodb+srv://sujitKey:12345@cluster0.pvzim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
2. created a new Oauth for prod keys
3. will create a new file for prod and dev env
4. we put keys in prod, apply a condition in keys.js file
5.
