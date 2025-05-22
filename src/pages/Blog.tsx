
import React from "react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";

// Sample blog data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "Youth-Led Climate Action in Nigeria",
    excerpt: "How young activists are leading the charge against climate change in Lagos",
    author: "Ruth Bassey Okim",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "Climate Action",
    image: "https://images.unsplash.com/photo-1621274403997-37aace184f49?w=800"
  },
  {
    id: 2,
    title: "The Power of Storytelling in Advocacy",
    excerpt: "Exploring how personal narratives can drive social change across communities",
    author: "Sarah Mwangi",
    date: "April 22, 2023",
    readTime: "4 min read",
    category: "Storytelling",
    image: "https://images.unsplash.com/photo-1492681290082-e932832941e6?w=800"
  },
  {
    id: 3,
    title: "Women's Rights Advocacy in Rural Communities",
    excerpt: "Breaking down barriers for gender equity in traditionally conservative areas",
    author: "Fatima Diallo",
    date: "March 8, 2023",
    readTime: "6 min read",
    category: "Gender Equity",
    image: "https://images.unsplash.com/photo-1531384370597-8590413be50a?w=800"
  },
  {
    id: 4,
    title: "Our Experience at the Africa Youth Summit",
    excerpt: "Reflections and insights from our participation in the continent-wide gathering",
    author: "Daniel Osei",
    date: "February 17, 2023", 
    readTime: "3 min read",
    category: "Events",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800"
  },
  {
    id: 5,
    title: "Building Environmental Storytelling Clubs",
    excerpt: "A step-by-step guide to starting your own youth advocacy group",
    author: "Ruth Bassey Okim",
    date: "January 30, 2023",
    readTime: "7 min read",
    category: "Resources",
    image: "https://images.unsplash.com/photo-1562592589-36f72e9cf5df?w=800"
  },
];

const Blog = () => {
  return (
    <div>
      <Hero
        title="Our Blog"
        subtitle="Stories, insights and resources from our community of changemakers"
        backgroundImage="https://images.unsplash.com/photo-1567428485548-c499e4931c10?w=1200"
        overlayOpacity="opacity-60"
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            title="Latest Articles" 
            subtitle="Explore our latest stories, insights, and resources" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <SectionTitle 
              title="Subscribe to Our Newsletter" 
              subtitle="Get the latest updates delivered directly to your inbox" 
            />
            
            <form className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lsa-gold focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-3">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-lsa-green font-medium">{post.category}</span>
          <span className="text-sm text-gray-500">{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">By {post.author}</span>
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>
        <button className="w-full mt-4 py-2 border-2 border-lsa-gold hover:bg-lsa-gold/10 rounded-md font-medium transition-colors">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Blog;
