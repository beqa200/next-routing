import Link from "next/link";
import React from "react";

export default async function page() {
  const response =
    await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      { cache: "no-store" }
    );
  const posts =
    await response.json();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts
          .slice(1, 20)
          .map(
            (post: any) => (
              <Link
                key={post.id}
                href={`/posts/${post.id}`}
              >
                <li className="p-3 border-2 border-black">
                  {post.title}
                </li>
              </Link>
            )
          )}
      </ul>
    </div>
  );
}
