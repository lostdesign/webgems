# webgems.io

This project should help anyone to find new resources but especially beginners in the field to have something they can look things up.


### Prerequisites

Since this is a Nuxt project, you need nodejs and npm.

### Installing

``` bash
# clone repo
$ git clone https://github.com/lostdesign/webgems.git

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

We manage our resources in `store.json`. The schema is as follows:
```js
[
  {
    "title": "Category",
    "slug": "/category",
    "resources": [
      {
        "title": "Awesome resource",
        "desc": "This awesome resource will make your life much easier.", // 1 - 2 sentences long.
        "url": "https://url.com"
      }
    ]
  }
]
```

If you just want to add a resource to an already existing category, extend the `resources` array with your resources. Please include all the keys enlisted (`title`, `desc`, `url`).

For URLs, please consider the following:
- Do not link to language specific pages (e.g. don't link to `<url>.org/en-US/docs`, instead, link to `<url>/docs` if possible).
- Do not use `'&'` as it will break the URL referencing.
- We won't allow referral links.

To add a completely new resource, include a new object at the root of the array, the pages are dynamically rendered so you don't have to worry about anything else. Again, include all the enlisted keys, reference to the schema above.

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
