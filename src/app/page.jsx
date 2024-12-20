import Hero from "@/components/Hero";
import Albums from "@/components/albums/Albums";
import Events from "@/components/events/Events";
import Player from "@/components/Player";
import Blog from "@/components/blog/Blog";
import Newsletter from "@/components/Newsletter";
import { siteData } from "@/data/siteData";

export default function Home() {
  const { events, albums, posts } = siteData;

  return (
    <main>
      <Hero />
      <Player />
      <Events events={events} />
      <Albums albums={albums} />
      <Blog posts={posts} />
      <Newsletter />
    </main>
  );
}
