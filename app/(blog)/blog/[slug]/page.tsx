import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug: string) {
  const query = `
    *[_type == 'blog' && slug.current == '${slug}'] {
        "currentSlug":slug.current,
        title,
        content,
        titleImage
    }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);
  return (
    <div className="mt-[11.5rem]">
      {" "}
      {/* Add a top margin to ensure content doesn't overlap with the navbar */}
      <h1>
        <span className="block text-base text-primary font-semibold tracking-wide uppercase">
          Abha Ghildiyal - Blog
        </span>
        <span className="block mt-2 text-3xl text-center leading-8 tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>
      <Image
        className="rounded-lg mt-8 border"
        src={urlFor(data.titleImage).url()}
        alt="Title-img"
        priority
        width={800}
        height={800}
      />
      <div className="mt-16 prose prose-blue prose-xl">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}