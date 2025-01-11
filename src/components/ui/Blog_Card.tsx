"use client";

interface PostProps {
  banner_image: string;
  category: string;
  name: string;
  meta_description: string;
}

export default function Blog_Card({
  banner_image,
  category,
  name,
  meta_description,
}: PostProps) {
    
const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;
  return (
    <a href="/blog" className="no-underline">
      <div
        className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
        style={{
          width: CARD_WIDTH,
          marginRight: MARGIN,
        }}
      >
        <img
          src={banner_image}
          className="mb-3 h-[200px] w-full rounded-lg object-cover"
          alt={`An image for a blog post titled ${name}`}
        />
        <span className="rounded-md border-[1px] border-neutral-600 bg-neutral-100 px-2 py-1 text-sm uppercase text-neutral-800">
          {category}
        </span>
        <p className="mt-1.5 text-lg font-medium text-black">{name}</p>
        <p className="text-sm text-neutral-800">{meta_description}</p>
      </div>
    </a>
  );
}
