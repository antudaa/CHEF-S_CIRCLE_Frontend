# Chef's Circle - Next.js + TypeScript + Aceternity + Redux + Ant Design + Tailwind

Welcome to the Chef's Circle project! This repository contains the frontend code for our Recipe Sharing and Social recipe management platform. Built using modern web technologies like Next.js, TypeScript, and Aceternity UI, Athlo Blitz provides a seamless user experience for Sharing there delicious Recipes, viewing availability, and handling various administrative functions.

## 🚀 Getting Started

Follow these steps to get the project up and running on your local environment.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager

### Installation

1. Clone the repository:
    ```bash
    [git clone https://github.com/antudaa/CHEF-S_CIRCLE_Frontend.git](https://github.com/antudaa/CHEF-S_CIRCLE_Frontend.git)
    cd Chef's Circle
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## 📂 Project Structure

The project is structured for scalability and maintainability:

- `src/`: Contains all the source code for the application.
  - `components/`: Reusable React components.
  - `pages/`: Different page components for each route in the application.
  - `redux/`: Redux store configuration and slices for state management.
  - `types/`: TypeScript interfaces and types to ensure type safety.
  - `utils/`: Utility functions and helper methods.
- `public/`: Static assets like images, fonts, etc.
- `vite.config.ts`: Configuration file for Vite.

## 🌟 Features

- **Recipe Sharing**: Add, edit, and delete various types like Indian, Thai, and more.
- **Rating System**: Manage Recipe Rating, including proper validation, with ease.
- **User Authentication**: Secure login and user management using Redux for state management.
- **Payment Processing**: Manage premium access payments and track payment statuses.
- **Responsive Design**: Optimized for a seamless experience across different devices.

## 🔧 Configuration

### Vite Configuration

Vite is used for fast development and build processes. The default configuration is set up in `vite.config.ts`. To customize the configuration, refer to the [Vite documentation](https://vitejs.dev/).

### ESLint Configuration

ESLint ensures code quality and adherence to coding standards. To maintain code consistency:

1. Configure the top-level `parserOptions` in `.eslintrc.js`:
    ```js
    export default {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
      },
      // other rules...
    }
    ```

2. Update ESLint rules:
    - Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
    - Optionally, include `plugin:@typescript-eslint/stylistic-type-checked` for stylistic type checking.

3. Install `eslint-plugin-react` and add the following to the `extends` list:
    ```json
    "extends": [
      "plugin:react/recommended",
      "plugin:react/jsx-runtime"
    ]
    ```

### Tailwind CSS Configuration

Tailwind CSS is used for styling the application. Ensure you have the proper Tailwind configuration in place:

- `tailwind.config.js`: Customize the Tailwind configuration to fit the design requirements.

## 🌐 Deployment

Deploy the application using a platform like Vercel. Make sure the `vercel.json` file is properly configured for deployment. For more details on deployment, refer to the [Vercel documentation](https://vercel.com/docs).

## 📘 Documentation

Refer to the in-code documentation and comments for a better understanding of the components and their usage. Additionally, the project includes:
- **API Integration**: Handles recipe data, user authentication, and premium access using a centralized Redux API slice.
- **TypeScript Support**: Ensures robust type checking and reduces runtime errors.

## 🛠️ Development

### Scripts

- `npm run dev` / `yarn dev`: Start the development server.
- `npm run build` / `yarn build`: Build the application for production.
- `npm run lint` / `yarn lint`: Run ESLint for code quality checks.
- `npm run preview` / `yarn preview`: Preview the production build locally.

### Coding Standards

- Follow the Airbnb JavaScript style guide.
- Ensure consistent code formatting using Prettier.
- Write unit tests for critical components using Jest and React Testing Library.

## 🛡️ Security

- **Authentication**: Implement secure authentication using JWT and state management with Redux.
- **Data Validation**: Ensure proper validation of form inputs and API requests.
- **Error Handling**: Implement comprehensive error handling for user-friendly feedback.

## 🤝 Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md) and ensure adherence to the code of conduct.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Developed with ❤️ by Antu_Das.
