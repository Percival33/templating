# Mustache.js Templating Exploration

This repository is a simple exploration of Mustache.js, a logic-less templating system in JavaScript. The goal is to understand how to create dynamic templates with Mustache.js.

## Overview

In this project, I use Mustache.js to generate a Mongoose schema from a JSON data file.

The `render.js` file reads the JSON data, uses Mustache.js to render a template, and then outputs a new JavaScript file.

I also have Jest unit tests in place to ensure the rendering process works correctly.

## Example

```shell
npm start render reviewData

> templating@1.0.0 start
> node render.js render reviewData

Rendered template!
```

## Running the Project

1. After cloning the repository, navigate into the project directory and run:

```shell
npm install
```

2. Prepare your own data files and place them inside the `data` directory.

3. To render a template, type:

```shell
npm start render {name_of_your_data.json_file}
```

Replace `{name_of_your_data.json_file}` with the name of your JSON file (without the `.json` extension).

4. That's it! Your rendered template will be output as a new JavaScript file.

Feel free to clone this repository and experiment with your own data and templates!
