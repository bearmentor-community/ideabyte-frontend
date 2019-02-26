# Idea Byte Frontend with React & Redux

[![Netlify Status](https://api.netlify.com/api/v1/badges/b455ba2f-b8b4-4637-baa2-9bd90f146de4/deploy-status)](https://app.netlify.com/sites/ideabyte/deploys)

## Development

```sh
yarn start
```

Then open `http://localhost:3000`.

## Building

```sh
yarn build
npm install -g serve
serve -s build
```

Then open `http://localhost:5000`.

In deployment server such as Netlify, this build process should run automatically and the port is assigned by them (not `5000`).

## Project Setup

```sh
mkdir projectname-frontend
cd projectname-frontend

npm install -g create-react-app
create-react-app .
```

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
- Implement all pages and components
- Make sure all pages are still accessible

## License

MIT License
