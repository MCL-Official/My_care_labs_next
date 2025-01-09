import BlogComponent from "@/components/BlogComponent";
import { Communities } from "@/components/Communities";
import { Insurance } from "@/components/Insurance";
import UtaComp from "@/components/UtaComp";
import { YT_Video } from "@/components/YT_Video";
import Image from "next/image";

{/* <Image
  className="dark:invert"
  src="/next.svg"
  alt="Next.js logo"
  width={180}
  height={38}
  priority
/> */}
export default function Home() {
  return (
    <div>
      <UtaComp/>
      <Communities/>
      <BlogComponent/>
      <Insurance/>
      <YT_Video/>
    </div>
  );
}
