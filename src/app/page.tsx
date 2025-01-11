import BlogComponent from "@/components/BlogComponent";
import Caontact from "@/components/Caontact";
import { Communities } from "@/components/Communities";
import { HoverCards } from "@/components/HoverCards";
import { Insurance } from "@/components/Insurance";
import Testimonials from "@/components/Testimonials";
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
      <Testimonials/>
      <Caontact/>
    </div>
  );
}
