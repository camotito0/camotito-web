import { useContext } from "react";
import { 
  ImLinkedin,
  ImGithub,
  ImBehance,
  ImTwitter 
} from "react-icons/im";
import { CursorContext } from "../context/CursorContext";

const Socials = () => {
  const { mouseEnterHandle, mouseLeaveHandle } = useContext(CursorContext);

  return (
    <div 
      onMouseEnter={ mouseEnterHandle }
      onMouseLeave={ mouseLeaveHandle }
      className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li><a href="#" target='_blank'><ImLinkedin/></a></li>
        <li><a href="#" target='_blank'><ImGithub/></a></li>
        <li><a href="#" target='_blank'><ImBehance/></a></li>
        <li><a href="#" target='_blank'><ImTwitter/></a></li>
      </ul>
    </div>
  )
};

export default Socials;
