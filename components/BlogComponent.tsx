import axios from "axios";
import { BlogSlider } from "./Client_components/BlogSlider";

export default async function BlogComponent() {

    const blogsPerPage = 9;
    const page = 1;
    const response = await axios.get(`https://bookingbackend.mycaretrading.com/admin/blog/working?page=${page}&limit=${blogsPerPage}`)
    const posts = response.data.blogs;
    return <div>
        <section className="bg-neutral-100 py-8">
            <div className="relative overflow-hidden p-4">
                <div className="mx-auto max-w-6xl">
                    <BlogSlider blogs={posts} />
                </div>
            </div>
        </section>

    </div>
}

