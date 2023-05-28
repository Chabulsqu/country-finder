# Frontend Mentor - REST Countries API with color theme switcher solution
## Warning: The API the project uses has been shut down by its maintainer because of a lack of funding. The project will not run correctly either locally or in Netlify. 

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

This project is split into two branches: master (the first implementation I did while I was still learning React, highly buggy and inefficient) and the experimental one (It uses Function components instead of classes and adds React Router for dynamic routing, unfortunately, I was not able to finish it because the API was shut down while I was refactoring it).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Toggle the color scheme between light and dark mode 

** Pending features (will be added as soon as I find a replacement for the API): **

- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page

### Screenshot

![Website main page saw on dark mode](./screenshot.png)

### Links

- Live Site URL: [View on Netlify](restapicountriessite.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React Router V6](https://reactrouter.com/en/main/start/tutorial) - Client-side routing with React.

### What I learned

This project helped me reinforce my knowledge of React topics like passing down methods as props and changing the state. It also helped me to make shorter CSS by using the min() and max() functions, this project was only made using one breakpoint.
```css

div {
  width: min(10vw, 50px); /* Picks the smallest value */
  margin: max(2rem, 20vh); /* Picks the maximum value */
}

```
```js
render() {
  return <MyComponent method={this.myMethod} />
}
```

### Continued development

- clamp() function in CSS: I understand its basic functionality but I'm not as fluent in it as I'm with min() and max().
- React Function Components: Usually, I work with classes but I will probably start using functions as soon as I get comfortable with them.

### Useful resources

- [Kevin Powell CSS videos](https://www.youtube.com/watch?v=bn-DQCifeQQ&t=1512s) - This helped me a lot to make faster and more effective responsive designs. I will keep using this strategy in the future.
- [CSS Tricks](https://css-tricks.com) - Every time I have doubts with CSS, I always look up to this page!

## Author

- Frontend Mentor - [@Chabulsqu](https://www.frontendmentor.io/profile/Chabulsqu)
- Twitter - [@mateo_fain](https://www.twitter.com/mateo_fain)
- Dev.to - [@Chabulsqu](https://dev.to/chabulsqu)
