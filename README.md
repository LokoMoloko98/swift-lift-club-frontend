# Swift Lift Club UI

Swift Lift Club UI is a modern Next.js application designed to provide a seamless and intuitive experience for Swift Lift Club users.

## Features

- Built with Next.js 14 and TypeScript
- Material-UI components for consistent design
- Responsive layout
- Client-side routing
- Fast page transitions
- Integration with Swift Lift Club backend

## Prerequisites

- Node.js 18.17 or later
- npm (Node Package Manager)

## Installation

To install the project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/lokomoloko98/swift-lift-club-ui.git
    ```

2. Navigate to the project directory:
    ```bash
    cd swift-lift-club-ui
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`. The development server supports:
- Hot Module Replacement (HMR)
- Fast Refresh
- Error reporting

## Building for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## Project Structure

```
swift-lift-club-ui/
├── app/
│   ├── components/    # Reusable UI components
│   ├── fare/         # Fare calculator page
│   ├── profile/      # Profile page
│   ├── weeklytrips/  # Weekly trips page
│   ├── layout.tsx    # Root layout component
│   └── page.tsx      # Home page
├── public/           # Static files
└── package.json      # Project dependencies and scripts
```

## Technology Stack

- [Next.js 14](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Material-UI](https://mui.com/) - UI Components
- [Emotion](https://emotion.sh/) - Styling

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Description of your changes"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
5. Create a pull request.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Contact

For any questions or suggestions, please contact us at [communication@moloko-mokubedi.co.za](mailto:communication@moloko-mokubedi.co.za).

## License

This project is licensed under the MIT License - see the LICENSE file for details.