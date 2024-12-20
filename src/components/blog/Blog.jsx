import SectionHeader from "../SectionHeader";
import PostList from "./PostList";
import { siteData } from "@/data/siteData";

const Blog = () => {
  const { posts } = siteData;

  return (
    <section className="section" id="blog">
      <div className="container mx-auto">
        <SectionHeader pretitle="Our Blog" title="Latest News" />
        {/* post list */}
        <PostList posts={posts} />
      </div>
    </section>
  );
};

export default Blog;
