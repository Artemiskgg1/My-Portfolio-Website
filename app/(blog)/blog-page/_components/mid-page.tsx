import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PiCodeThin } from "react-icons/pi";

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
  return (
    <div className="container ml-2 rounded-lg px-4 relative z-20 bg-black-100 max-h-screen overflow-y-auto">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {data.map((post, idx) => (
          <Card key={idx} className="bg-white ">
            <Image
              src={urlFor(post.titleImage).url()}
              alt="img"
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover"
            />
            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
              <p className="text-sm text-zinc-600 line-clamp-3 dark:text-zinc-400">
                {post.smallDescription}
              </p>
              <Button asChild className="w-full mt-7">
                <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
