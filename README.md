<div id="top"></div>

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
<!-- PROJECT LOGO -->
<br />
  <h1 align="center">Recipe Finder</h1>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Recipe Finder is a web app using the [Forkify API](https://forkify-api.herokuapp.com/) to allow users to search, view, modify, bookmark and add recipes.

### Features

| User Stories                                                               | Features                                                                                                                                                                              |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Search for recipes                                                         | <ul><li>functionality: input field to send request to API with searched keywords<li>Display results with pagination<li>Display recipe with cooking time, serving and ingredients</ul> |
| Update the number of servings                                              | <ul><li>Change serving functionality: update all ingredients according ro current number of servings</ul>                                                                             |
| Bookmark recipes                                                           | <ul><li>Bookmarking functionality: display list of all bookmarked recipes</ul>                                                                                                        |
| Create recipes                                                             | <ul><li>Users can upload their own recipes</li><li>User recipes will automatically be bookmarked<li>User can only see their own recipes, not recipes from other users</ul>            |
| Access to bookmarks and recipes when leaving the app and coming back later | <ul><li>Store bookmark data in the browser using "local storage"</ul>                                                                                                                 |

<p align="right">(<a href="#top">back to top</a>)</p>

---

### Built With

- HTML
- CSS
- JavaScript
- Babel
- Forkify API

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Getting Started

1. Clone the repo
   ```sh
   git clone https://github.com/gsingh1717/Recipe-Finder.git
   ```

2. Go to project folder

```bash
cd Recipe-Finder
```

3. install dependencies

```bash
npm i (or npm install)
```

4. Build Project

```bash
npm run dev
```

5. Run Project

```bash
npm run start
```
<p align="right">(<a href="#top">back to top</a>)</p>