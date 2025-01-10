import BlogComponent from "@/components/BlogComponent";
import { Communities } from "@/components/Communities";
import { HoverCards } from "@/components/HoverCards";
import { Insurance } from "@/components/Insurance";
import UtaComp from "@/components/UtaComp";
import { YT_Video } from "@/components/YT_Video";

export default function Home() {
  return (
    <div>
      <HoverCards/>
      <UtaComp/>
      <Communities/>
      <BlogComponent/>
      <Insurance/>
      <YT_Video/>
    </div>
  );
}
