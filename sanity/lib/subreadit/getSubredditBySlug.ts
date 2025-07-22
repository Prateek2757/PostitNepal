import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export default async function getSubredditBySlug(slug: string) {
  const lowerCaseSlug = slug.toLowerCase();
  const getSubredditBySlugQuery =
    defineQuery(`*[_type == "subreddit" && slug.current == $slug][0] {
      ...,
      "slug": slug.current,
      "moderator": moderator->,
    }`);

  const subreddit = await sanityFetch({
    query: getSubredditBySlugQuery,
    params: { slug: lowerCaseSlug },
  });

  console.log(subreddit.data);
  return subreddit.data;
  
}
