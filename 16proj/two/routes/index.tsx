import { Handlers, PageProps } from "$fresh/server.ts";
import { Header } from "../components/Header.tsx";
import { blog } from "../models/blog.interface.ts";
import { HOME_FRESH_DESCR } from "../static/home-content.ts";
import { JSX } from "preact/jsx-runtime";

export const handler: Handlers<blog[] | null> = {
  async GET(_, ctx): Promise<void> {
    const url = "https://dev.to/api/articles?username=paulmojicatech";
    const resp: Response = await fetch(url);
    const blogs: any = await resp.json();
    return ctx.render(blogs);
  },
};

export default function Home({ data }: PageProps<blog[] | null>): JSX.Element {
  return (
    <>
      <Header />

      <section class="w-[100vw] h-[75vh] inline-flex justify-around mt-[5rem]">
        <div class="w-[40%] rounded border-2 p-4">
          <h1 class="text-2xl">what is fresh?</h1>
          <p class="text-justify">{HOME_FRESH_DESCR}</p>
        </div>
        <div class="w-[40%] overflow-scroll">
          {data.map((blog) => (
            <div key={blog.id}>
              <img src={blog.social_image} alt="" />
              <div>{blog.title}</div>
              <div>{blog.description}</div>
              <div>{blog.tags}</div>
              <div>{blog.url}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
