import Logos from "components/atoms/logos";
import Card from "components/organisms/card";
import {
  BeakerIcon,
  BookmarkIcon,
  CakeIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  FilmIcon,
  PhoneXMarkIcon,
  Bars3Icon,
  PencilIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import Button from "components/atoms/button";
import CopyButton from "components/molecules/copy-button";
import Navbar from "components/Navbar";

const features = [
  {
    name: "Vite",
    description:
      "Faster and leaner development experience for modern web projects.",
    logo: CubeTransparentIcon,
    docs: "https://vitejs.dev/",
  },
  {
    name: "React",
    description: "JavaScript library for building user interfaces.",
    logo: PencilIcon,
    docs: "https://reactjs.org/",
  },
  {
    name: "TypeScript",
    description:
      "Strongly typed programming language that builds on JavaScript.",
    logo: BookmarkIcon,
    docs: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind",
    description: "A utility-first CSS framework packed with classes.",
    logo: PhotoIcon,
    docs: "https://tailwindcss.com/",
  },
  {
    name: "Vitest",
    description: "Testing Framework with a focus on simplicity.",
    logo: QuestionMarkCircleIcon,
    docs: "https://vitest.dev/",
  },
  {
    name: "ESLint",
    description: "Find and fix problems in your JavaScript code.",
    logo: BeakerIcon,
    docs: "https://eslint.org/",
  },
  {
    name: "Prettier",
    description: "An opinionated code formatter.",
    logo: Bars3Icon,
    docs: "https://prettier.io/",
  },
  {
    name: "Husky",
    description:
      "Lint your commit messages, run tests, lint code, etc... when you commit or push.",
    logo: CakeIcon,
    docs: "https://github.com/typicode/husky",
  },
  {
    name: "Commit-lint",
    description: "Helps your team adhering to a commit convention.",
    logo: FilmIcon,
    docs: "https://github.com/conventional-changelog/commitlint",
  },
  {
    name: "Atomic design",
    description:
      "We’re not designing pages, we’re designing systems of components.",
    logo: PhoneXMarkIcon,
    docs: "https://bradfrost.com/blog/post/atomic-web-design/",
  },
  {
    name: "Absolute imports",
    description:
      "Import resource using its full path from the project’s src folder.",
    logo: ChevronDownIcon,
    docs: "https://github.com/vitejs/vite/issues/88#issuecomment-762415200",
  },
];

function App() {
  return (
    <main>
      <Navbar/>
    </main>
  );
}

export default App;
