import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>
        <h1>Hello Dude</h1>
      </div>
    </>
  );
}
