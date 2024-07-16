import React from "react";
import { usePathname } from "next/navigation";

export default async function page({
  params,
}: {
  params: { postId: string };
}) {
  const response =
    await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    );
  const post =
    await response.json();
  return (
    <div>
      <h1>
        Title: {post.title}
      </h1>
      <p>Body: {post.body}</p>
    </div>
  );
}
