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
        <li><a href="https://www.linkedin.com/in/dianaceciliallc/" target='_blank' rel="noreferrer"><ImLinkedin/></a></li>
        <li><a href="https://github.com/camotito0" target='_blank' rel="noreferrer"><ImGithub/></a></li>
        <li><a href="https://www.behance.net/ceciliana" target='_blank' rel="noreferrer"><ImBehance/></a></li>
        <li><a href="https://twitter.com/camotito0_dev" target='_blank' rel="noreferrer"><ImTwitter/></a></li>
      </ul>
    </div>
  )
};

export default Socials;
