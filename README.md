This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

To create a component (Atom, Molecule, Organism):
```bash
npm run plop
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about React Next.js, take a look at the following resources:

- [React](https://react.dev/) - learn React.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## ShadCN UI

This project uses [ShadCN UI](https://ui.shadcn.com/) to provide a set of pre-built, customizable components built on top of [Radix UI](https://radix-ui.com/). ShadCN UI makes it easy to start with accessible and functional components while offering the flexibility to modify and style them according to your project's needs.

### Features

- **Pre-built components**: A library of commonly used UI components, such as buttons, dialogs, forms, and more.
- **Fully customizable**: Components are integrated directly into your project, allowing you to modify their code.
- **TailwindCSS support**: Pre-configured styles using TailwindCSS utilities.
- **Powered by Radix UI**: Ensures accessibility and robust behavior out of the box.

### How to Use ShadCN UI Components

1. **Add a new component**:  
   Run the following command to generate a component:
   ```bash
   npx shadcn add [component-name]
   ```
   Example:
   ```bash
   npx shadcn add button
   ```

2. **Access the components**:  
   Components will be added to the `components/ui` directory. You can use them directly in your project like this:
   ```jsx
   import { Button } from "@/components/ui/button";

   export default function Example() {
     return <Button>Click Me</Button>;
   }
   ```

3. **Customize the components**:  
   Since components are copied into your project, you can freely edit their code and styles to meet your requirements.

### Learn More

- [ShadCN UI Documentation](https://ui.shadcn.com/docs)  
  Explore detailed guides and examples to get the most out of ShadCN UI.
- [Radix UI Documentation](https://www.radix-ui.com/themes/docs/overview/getting-started)  
  Understand the foundation of the components used in ShadCN UI.

