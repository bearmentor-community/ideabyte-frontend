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
- Commit and push
- Deploy on Netlify
- Change the site name in site settings
  - Example: ideabyte
- Make sure the web app deployed successfully
  - Example: https://ideabyte.netlify.com
- Setup custom domain if needed
- setup deploy contexts so it can check all branch deploys
- Setup prerendering
  - https://www.netlify.com/docs/prerendering
  - https://www.netlify.com/blog/2017/09/26/how-to-build-a-serverless-seo-friendly-react-blog
- Make sure all pages are accessible

## License

MIT License
