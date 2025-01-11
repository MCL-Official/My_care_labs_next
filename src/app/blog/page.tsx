import Blog_Card_grid from "@/components/ui/Blog_Card_grid";
import axios from "axios"

export default async function Blog() {
    const blogsPerPage = 9;
    const page = 1
    const response = await axios.get(`https://bookingbackend.mycaretrading.com/admin/blog/working?page=${page}&limit=${blogsPerPage}`)
    // console.log(response.data.blogs);
    const blogs = response.data.blogs

    return (
        <section className="py-32">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
            <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">Latest blog posts</h1>
            <p className="text-gray-600">Blogs that are loved by the community. Updated every hour.</p>
            <div className="items-center justify-center gap-3 sm:flex">
              <div className="relative">
                <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {/* <input
                  type="text"
                  placeholder="Search blogs"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg sm:max-w-xs"
                /> */}
              </div>
            </div>
          </div>
  
  
        <Blog_Card_grid blogData={blogs} loading={false}/>
        </div>
      </section>
    )
}