# Idea Byte Frontend with React & Redux

[![Netlify Status](https://api.netlify.com/api/v1/badges/b455ba2f-b8b4-4637-baa2-9bd90f146de4/deploy-status)](https://app.netlify.com/sites/ideabyte/deploys)

Check other documentations here:

- [Data Documentation](README_DATA.md)
- [React Documentation](README_REACT.md)

## Setup

Run the `create-env.sh` script first, to copy `.env.schema` into `.env`.

```sh
./create-env.sh
```

Then you fill the env variables. To get the Filestack API Key, go to https://www.filestack.com then **Sign Up Free** for an account. After logged in, you can get your API Key.

```txt
REACT_APP_BACKEND_API_URL=http://localhost:0000 # change this
REACT_APP_FILESTACK_API_KEY=your_api_key_from_filestack_here # change this
```

## Development

```sh
yarn start
```

Then open `http://localhost:3000`.

This repo is configured to use `react-app-rewired`, not a regular `react-scripts`. The benefit is to hot reload the changes in the components quickly, without a full page reload.

## Building

```sh
yarn build
npm install -g serve
serve -s build
```

Then open `http://localhost:5000`.

In deployment server such as Netlify, this build process should run automatically and the port is assigned by them (not `5000`).

## Deploying

You can use Netlify to deploy. After which, you have to configure the environment variables as well.

```txt
REACT_APP_BACKEND_API_URL=
REACT_APP_FILESTACK_API_KEY=
```

## Project Development Steps

```sh
mkdir projectname-frontend
cd projectname-frontend

npm install -g create-react-app
create-react-app .
```

- Make sure the React app setup is done.
- Change the `title` in `index.html`
- Delete all unnecessary contents and components
- Start your React server
- Commit and push your changes as necessary
- Deploy on Netlify
- Change the site name in site settings
  - Example: ideabyte
- Make sure the web app deployed successfully
  - Example: https://ideabyte.netlify.com
- Setup custom domain if needed
- Setup deploy contexts so it can check all branch deploys
  - So in pull request, it automatically check the changes
- Setup prerendering
  - https://www.netlify.com/docs/prerendering
  - https://www.netlify.com/blog/2017/09/26/how-to-build-a-serverless-seo-friendly-react-blog
- Put all assets into `public` folder
- Structure the `src` to be like:
  - `pages`: contains page name
  - `layouts`: contains layout name, to be used with `pages`
  - `components`: contains variety of components
- Install and use React Router
- Install and use styling package such as `styled-components` or `@emotion/styled`
- Implement all pages and components
- Make sure all pages are still accessible
- Install and use Redux and React Redux

## License

MIT License
