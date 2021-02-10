# Robots-R-Us

## Description

You've just been hired at Robots-R-Us. Your first task is to finish an employee directory using React with a backend API written in Rails. [Example data](src/data.json) is provided, and the designer gave you this spec to work off:

![Image of Robots-R-Us](https://i.imgur.com/rIN6Ehp.png)

Before the project was assigned to you, your co-worker started building out the feature with [React-Table 6](https://www.npmjs.com/package/react-table-6). The scaffolding of the API and React-Table are both done, there are just a few small tasks left...

## Objective

* Finish the employee directory using the existing React-Table component; finished product should resemble the spec above
* Build a database-backed API to return (optionally filtered) employee data
* Open a pull request against `main` with whatever you've completed to have your code reviewed

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

* Install Node (>= 14.5) & Yarn (>= 1.17)
* Install Ruby (>= 3.0)
* Install Dependencies

```
$ cd robots-r-us
$ yarn
$ cd api
$ bundle
```

Get the server running

```
$ cd robots-r-us
$ yarn start
```

Navigate to `localhost:3000`

## To-Do
1. Massage the data (either hardcoded data.json OR the API) into the following form:

```
const formattedColumns = [
  { Header: "ID", accessor: "id" },
  { Header: "First Name", accessor: "first_name" },
  { Header: "Last Name", accessor: "last_name" },
  { Header: "Email Address", accessor: "email" },
  { Header: "Job Title", accessor: "title" },
  { Header: "Profile Picture", accessor: "avatar" },
];

const formattedData = [
  { id: 1, first_name: "Red", last_name: "Pudner", email: "rpudner0@shareasale.com", title: "Pharmacist", avatar: '...' },
  { id: 2, first_name: "Olva", last_name: "Kellegher", email: "okellegher1@prlog.org", title: null, avatar: '...' },
  { id: 3, first_name: "Byrle", last_name: "Dick", email: null, title: null, avatar: '...' },
  { id: 4, first_name: "Cecile", last_name: "Rainton", email: "crainton3@artisteer.com", title: "Recruiter", avatar: '...' },
  { id: 5, first_name: "Gwennie", last_name: "Clancy", email: "gclancy4@ifeng.com", title: "Chief Design Engineer", avatar: '...' },
  { id: 6, first_name: "Meriel", last_name: "Form", email: "mform5@mozilla.org", title: null, avatar: '...' },
...
];
```
You can use format the data on the backend
or if you're familiar with Redux, you can do it in the selector...
formattedColumns = useSelector(Selectors.getFormattedColumns);
formattedData = useSelector(Selectors.getFormattedData);

or you can manipulate the hardcoded directly in the data.json file...
formatted Data = data.map(...);

All are viable options, and we will not think less of either solution!
No matter _how_ you do it, we just need to see the data manipulated into the correct shape :)

2. Build out the `/api/employees` API endpoint to return data in the same structure as `[Example data](src/data.json)`.  (Yes, it's supposed to be a little odd.  Sometimes life is that way ...)
3. Make sure the API is fed by a database (e.g. SQLite3)
4. Build in filtering to the API based on query parameter, e.g. `/api/employees?first_name=Red&last_name=Pudner`

#### Bonus points if you...
* Render the robots' avatars (with a default avatar for those who don't have one)
* Sort robots by last name (API and/or React)

## Guidelines
* Please don't spend more than 1 or 2 hours on this challenge.  It's okay to not finish everything.  Do what you can as well as you can.
* This is a full-stack exercise, but if you can't do everything focus on the area that is your strongest.  If you are familiar with Rails but not React, consider starting there and think of React as a bonus.  If you are familiar with React but not Rails, then consider doing the opposite.
* Commit often, perfect later — commit your code as you go, even if it's not perfect (it will help us understand your process and train of thought). That being said, make sure your final product is code you're proud of
* Feel free to use libraries and plugins (lodash, styled-components, etc). We use them all the time
* Don't worry about automated tests. They're not required (but it won't hurt if you want to add some)

## Submit Your Code

Once you push the changes to your repo, the **Compare & pull request** button will appear in GitHub.

Open a pull request by clicking the **Create pull request** button. From here, we will review your code. 

_Having Git issues? Check out [this article](https://opensource.com/article/19/7/create-pull-request-github)_

###### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
