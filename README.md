# Vegis App

This is a simple Next.js application that demonstrates dynamic routing and navigation between pages. The app lists various vegetables and links to their respective dynamic pages.

## Features

- Dynamic routing for vegetable pages.
- Navigation between pages using `Link` from Next.js.
- Simple and clean structure for learning Next.js basics.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- npm, yarn, or pnpm (depending on your preference)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vegis-app.git

2. Navigate to the project directory:
  cd vegis-app

3. nstall dependencies:
   npm install
# or
yarn install
# or
pnpm install

Running the Development Server
Start the development server:

npm run dev
# or
yarn dev
# or
pnpm dev

Open http://localhost:3000 in your browser to view the app.

How to Link and Navigate Between Pages
This project uses the Link component from Next.js to navigate between pages. For example, in the Vegis page, each vegetable name is a link to its dynamic page:

<Link href={`/products/vegis/${vegi.veginame}`}>{vegi.veginame}</Link>


When clicked, this link navigates to a dynamic page with the URL /products/vegis/[veginame].

Dynamic Pages
Dynamic pages in Next.js are created using the [param] syntax in the file name. For example:

The file page.jsx handles dynamic routes for vegetable names.
You can access the dynamic parameter using useRouter or params.
Here’s an example of a dynamic page component:

// filepath: /src/app/products/vegis/[veginame]/page.jsx
import { useRouter } from 'next/router';

function VegiPage() {
  const router = useRouter();
  const { veginame } = router.query;

  return (
    <div>
      <h1>{veginame} Page</h1>
      <p>Details about {veginame}.</p>
    </div>
  );
}

export default VegiPage;

Project Structure
myfirstnextapp/
├── src/
│   └── app/
│       └── products/
│           └── vegis/
│               ├── [veginame]/
│               │   └── page.jsx
│               └── page.jsx
├── package.json
├── README.md
└── ...



