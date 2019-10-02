# webgems.io

This project should help anyone to find new resources but especially beginners in the field to have something they can look things up.


### Prerequisites

Since this is a Nuxt project, you need nodejs and npm.

### Installing

``` bash
# clone repo
$ git clone https://github.com/webgems/webgems.git

# cd into webgems
$ cd webgems

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

### How to add a new resource

If you are using VS Code, you can simply type `wgem` and hit tab in the `store.json` in order to get the correct template (see below).

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
        "tags": [String] // Please add at least 3 tags
      }
    ]
  }
]
```

In our [resources](resources/) we have an `<category>.json` file for each category, you can add your suggested resource by adding it to the `resources` array in the JSON file using the schema as described above. Please include all the keys enlisted (`title`, `desc`, `url`, `tags` with at least 3 tags).

For URLs, please consider the following:
- Do not link to language specific pages (e.g. don't link to `<url>.org/en-US/docs`, instead, link to `<url>/docs` if possible).
- Do not use `'&'` as it will break the URL referencing.
- We won't allow referral links.

To add a completely new resource, add a `<category>.json` file to [resources](resources/). Make sure it follows the sceme as described above.
Add it to [resources.index.js](resources/index.js) list of imports and export it aswell, that way Nuxt can take care of rendering the page.

## Built With

* [Nuxt.js docs](https://nuxtjs.org) Nuxt.js
* SCSS
* PUG

## Contributing

Please read [CONTRIBUTING.md](https://github.com/webgems/webgems/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.
Make sure to add yourself to the `contributors` file once you've created a PR.

## Authors

* **lost.design** - *Initial work* - [lostdesign](https://github.com/lostdesign)

See also the list of [contributors](https://github.com/webgems/webgems/contributors) who participated in this project.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](https://github.com/webgems/webgems/blob/master/LICENSE) file for details
