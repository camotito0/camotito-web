import { 
  ImLinkedin,
  ImGithub,
  ImBehance,
  ImTwitter 
} from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
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
