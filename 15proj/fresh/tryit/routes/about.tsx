import Counter from "../islands/Counter.tsx";

export default function AboutPage() {
    return (
      <main>
        <h1>About</h1>
        <p>This is the about page.</p>
        <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          If you like fresh lemons, you made it to the right place.
        </p>
        <Counter start={3} />
      </div> 
      </main>
    );
  }