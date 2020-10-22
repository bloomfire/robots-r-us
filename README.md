# Jorge's Preface

- This was a fun little neat exercise.
- I used Hooks and app is responsive and maintains state after refresh.
- I added a 1 second delay via setTimeout just to simulate loading.
- I track followed user state by with an object that has followed users ids' as keys and serialize that object
  in a cookie.
- I used MaterialUI to speed things up, which allows me to write CSS in JS.
- The structure of the app super simple and easy to follow:
  1. Layout component (Main.js)
     - inside it renders a page component
  2. Page component (EmployeeDirectory.js)
     - handles the logic of performing the mock API call to get employee data
     - handles logic of loading in "follow" state from a serialized cookie
     - handles the logic of passing callbacks which take in an employee id and mark it as followed/unfollowed in state and mirror that state to a serialized object in a cookie to keep the follow state after a refresh
     - renders card components from the employee data
  3. Card component (EmployeeCard.js)
     - shows the employee data
     - allows user to triger the handleFollowEmployee and handleUnfollowEmployee callbacks

# Robots-R-Us

## Description

You've just been hired at Robots-R-Us. Your first task is to build a social-media inspired employee directory using React. The data is provided, and the designer gave you this spec to work off:

![Image of Robots-R-Us](https://i.imgur.com/kcDj5a5.png)

## Objective

- Build employee directory using reusable React components, _inspired_ by the spec above
- Open a pull request against `main` with whatever you've completed to have your code reviewed

## Getting Started

### Fork this repo

Click on the Fork button in the top-right corner of this repo. This creates a new copy of `robots-r-us` under your GitHub user account with a URL like:

```
https://github.com/<YourUserName>/robots-r-us
```

The copy includes all the code, branches, and commits from the original repo.

Next, clone the repo by opening the terminal on your computer and running the command:

```
git clone https://github.com/<YourUserName>/robots-r-us
```

Once the repo is cloned, you need to do two things:

Create a new branch by issuing the command:

```
git checkout -b <your_name_and_branch_name>
```

Create a new remote for the upstream repo with the command:

```
git remote add upstream https://github.com/bloomfire/robots-r-us
```

In this case, "upstream repo" refers to the original repo you created your fork from.

_Having Git issues? Check out [this article](https://opensource.com/article/19/7/create-pull-request-github)_

### Up & Running

Get the server running

```
$ cd robots-r-us
$ yarn start
```

Navigate to `localhost:3000`

## To-Do

- Render robot `data` on the page — include the robots' full names, email addresses, avatars, and job titles in their profiles
- Add a dynamic, clickable "Follow" button to each profile that distinguishes between followed and unfollowed robots
- Style the page to make it your own (background colors, layouts, cards vs list-items, etc)

#### Bonus points if you...

- Add responsive styling
- Use React Hooks
- Sort robots by last name
- Add a default avatar for robots who don't have one
- Retain following state on refresh

## Guidelines

- We don't expect you to spend more than 1 hour on this challenge
- Commit often, perfect later — commit your code as you go, even if it's not perfect (it will help us understand your process and train of thought). That being said, make sure your final product is code you're proud of
- Feel free to use libraries and plugins (lodash, styled-components, etc). We use them all the time
- Don't worry about automated tests. They're not required (but it won't hurt if you want to add some)

## Submit Your Code

Once you push the changes to your repo, the **Compare & pull request** button will appear in GitHub.

Open a pull request by clicking the **Create pull request** button. From here, we will review your code.

_Having Git issues? Check out [this article](https://opensource.com/article/19/7/create-pull-request-github)_

###### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
