"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaShareAlt } from "react-icons/fa";

interface Blog {
    _id: string;
    banner_image: string;
    name: string;
    blog_short_content1: string;
    createdAt: string;
    views: number;
    meta_title: string;
}

interface BlogCardGridProps {
    blogData: Blog[];
    loading: boolean;
}

export default function Blog_Card_grid({ blogData, loading }: BlogCardGridProps) {
    const route = useRouter()
    const handleNavigation = (id: string, blogName: Blog) => {
        // console.log("Navigate to:", id, blogName);
        const formattedBlogName = blogName.meta_title
            .replace(/[&%@!#^*+\|"'<>?]/g, '-')
            .replace(/\s+|\.|,|:/g, '-')
            .replace(/-+/g, '-')
            .replace(/-+$/, '')
            .toLowerCase();

        const encodedBlogName = encodeURIComponent(formattedBlogName);
        route.push(`/blog/${encodedBlogName}/${id}`)
    };

    const handleShare = (item: Blog) => {
        console.log("Share blog:", item);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {loading
                ? Array.from({ length: 9 }).map((_, index) => <SkeletonLoader key={index} />)
                : blogData?.map((item) => (
                    <li
                        className="w-full mx-auto group sm:max-w-sm bg-white shadow-lg rounded-lg overflow-hidden"
                        key={item._id}
                    >
                        <a
                            onClick={() => handleNavigation(item._id, item)}
                            className="block no-underline"
                        >
                            <Image
                                width={400}
                                height={400}
                                src={item.banner_image}
                                loading="lazy"
                                alt={item.name}
                                className="w-full h-48 object-cover object-center"
                            />
                            <div className="p-4">
                                <h3 className="text-left text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-bold mb-2">
                                    {item.name}
                                </h3>
                                <div className="prose text-left text-gray-600">
                                    <div dangerouslySetInnerHTML={{ __html: item.blog_short_content1 }}></div>
                                </div>
                                <span className="block text-right text-indigo-600 text-sm mb-1">
                                    {formatDate(item.createdAt)}
                                </span>
                                <span className="block text-left text-indigo-600 text-sm mb-1">
                                    {item?.views} Views
                                </span>
                                <button
                                    onClick={() => handleShare(item)}
                                    className="mt-2 flex items-center text-indigo-600 hover:text-indigo-800"
                                >
                                    <FaShareAlt className="w-5 h-5 mr-1" /> Share
                                </button>
                            </div>
                        </a>
                    </li>
                ))}
        </ul>
    );
}

const SkeletonLoader = () => (
    <div className="w-full mx-auto group sm:max-w-sm animate-pulse">
        <div className="h-48 bg-gray-300 rounded-lg"></div>
        <div className="mt-3 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-6 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
    </div>
);
