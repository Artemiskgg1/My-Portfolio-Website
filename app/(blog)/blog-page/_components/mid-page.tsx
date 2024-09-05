import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc){
      title,
      smallDescription,
      "currentSlug":slug.current,
      titleImage
  }`;
  const data: simpleBlogCard[] = await client.fetch(query);
  return data;
}

export default async function MidPage() {
  const data = await getData();
  console.log(data);
  return (
    <div className="container md:ml-2 rounded-lg px-4 relative max-h-screen overflow-y-auto">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {data.map((post, idx) => (
          <Card key={idx} className="bg-slate-900 flex flex-col">
            <Image
              src={urlFor(post.titleImage).url()}
              alt="img"
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover"
            />
            <CardContent className="flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className="text-lg line-clamp-2 font-bold text-slate-100">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-3 dark:text-zinc-400">
                  {post.smallDescription}
                </p>
              </div>
              <Button
                asChild
                className="w-full mt-5 bg-gradient-to-r from-indigo-500/50 to-rose-500/50 "
              >
                <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
