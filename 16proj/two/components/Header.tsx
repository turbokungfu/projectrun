import { JSX } from "preact/jsx-runtime";
import { NavList } from "../islands/NavList.tsx";

export function Header(): JSX.Element {
  return (
    <>
      <header class="w-[100vw] h-[10rem] bg-black inline-flex items-center justify-between pl-4 pr-4">
        <h1 class="text-white text-2xl">Fresh Demo</h1>
        <NavList />
      </header>
    </>
  );
}
