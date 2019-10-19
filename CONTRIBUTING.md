# Contributing

## Introduction

Thank you for considering to contribute to webgems.io!

Whether you want to report a bug, request a feature or contribute new resources
or code, we appreciate your effort and will do our best to incorporate them into
the project.

Please understand that some of your contributions might not align with our
vision for the project, which means we may reject some of your issues or pull
request. When in doubt, we recommend opening an issue first in order to discuss
your ideas with the maintainers, before starting to implement your changes.

### Code of Conduct

Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) during your
interactions with this project's maintainers and community. This helps maintain
a friendly and tolerant environment that everyone enjoys being a part of.

## Issues

If you want to report a bug or suggest an enhancement, you are more than welcome
to open an issue in this repository! You can use the provided templates to
answer our most common questions, which helps us better understand your feedback
and get back to you faster.

Before filing an issue, please do a quick check using the project's issue search
in order to avoid opening duplicate issues. In case your feedback has already
been reported elsewhere, you can either add a "+1" (:+1:) reaction to that
issue, or post a comment if you have further details to add to the conversation.

## Pull Requests

If you'd like to contribute code to the project, follow these steps:

0. Make sure your change will be accepted. This may mean opening an issue to
   discuss your desired changes first.
1. Fork and clone the project. Then, create a new feature branch based on the
   project's `dev` branch.
2. Run `npm install` in the root of the project.
3. You can use the following npm scripts to perform common tasks during
   development:
   - `npm run dev`: Launch a development server on `localhost:3000`
   - `npm run build; npm start`: Build and serve a production version of the
   app
   - `npm run generate`: Generate the final, pre-rendered version of
   the site.
4. Start coding! See below for some guidance.
5. Once you are ready to open your PR: Commit and push the changes to your fork,
   and then open a new pull request in this project's GitHub UI.
   - Make sure that the base branch is set to `dev` instead of `master` (this
     can also be corrected later on by clicking on the "Edit" button next to a
     PR's title).
   - Please exclude potential build or install artifacts (such as `yarn.lock` or
     log files) from the changeset.
6. Wait for the maintainers to review your pull request. We usually require at
   least two approving reviews in order to merge a PR.
   - If you'd like to, you can add yourself to the
     [CONTRIBUTORS.md](CONTRIBUTORS.md) file before your PR is merged.
   - You might be asked to make additional changes, if so you can simply create
     a new commit and push it to the same branch you used to open the PR in the
     first place.

### Adding a new resource

If you are using VS Code, you can simply type `wgem` and hit tab in one of the
JSON files in the `resources` folder in order to get the correct template (see
below).

For any other editor, please use the following schema:
```js
[
  {
    "title": String, // Start with uppercase
    "slug": String, // All lowercase, eg: "/category"
    "resources": [
      {
        "title": String,
        "desc": String, // 1 - 2 sentences long
        "url": String, // See below for notes about correct format of URLs
        "tags": [String] // Please try to add at least 3 single-worded tags
      }
    ]
  }
]
```

In our [resources](resources/) we have an `<category>.json` file for each
category, you can add your suggested resource by adding it to the `resources`
array in the JSON file using the schema as described above. Please include all
the keys enlisted (`title`, `desc`, `url`, `tags`).

For URLs, please consider the following:
- Do not link to language specific pages (e.g. don't link to
  `<url>.org/en-US/docs`, instead, link to `<url>/docs` if possible).
- Do not use `'&'` as it will break the URL referencing.
- We won't allow referral links.

To add a completely new resource, add a `<category>.json` file to
[resources](resources/). Make sure it follows the sceme as described above. Add
it to [resources.index.js](resources/index.js) list of imports and export it as
well, that way Nuxt can take care of rendering the page.

### Tech stack

webgems.io is built with [Vue.js](https://vuejs.org/) and
[Nuxt](https://nuxtjs.org/). You can refer to their respective documentation to
find out more about how they work.
