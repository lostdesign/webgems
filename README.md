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

In side the `pages` directory, choose any folder and modify each `index.vue`. At the moment you should add a resource to the end of the resources array.

Please use this schema:
```js
{
  title: 'title',
  desc: 'desc',
  url: 'url'
},
```
> Currently do not use `'&'` as it will break the URL referencing as well as escape single qoutes with a backslash `\'`

For a whole new section, create a new folder in the `pages` directory - be aware that the folder name is equal to the route of the site `webgems.io/NEWFOLDERNAME`.
Inside the new section add at least the `index.vue` file and copy the structure of another section. Change the title and add it's own resources.

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Nuxt.js docs](https://nuxtjs.org) Nuxt.js
* SCSS
* PUG

## Contributing

Please read [CONTRIBUTING.md](https://github.com/lostdesign/webgems/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.
Make sure to add yourself to the `contributors` file once you've created a PR.

## Authors

* **lost.design** - *Initial work* - [lostdesign](https://github.com/lostdesign)

See also the list of [contributors](https://github.com/lostdesign/webgems/contributors) who participated in this project.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](https://github.com/lostdesign/webgems/blob/master/LICENSE) file for details
