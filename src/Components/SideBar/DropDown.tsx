import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownItem = ({ icon, text }: { icon: any; text: string }) => (
  <li className="w-full">
    <a className="flex gap-5 text-sm py-1.5 ml-5.5 pl-1 my-0 mr-4 items-center bg-transparent whitespace-nowrap pr-4 font-normal text-slate-800/50 shadow-none transition-colors">
      <FontAwesomeIcon className="h-1.5 w-1.5" icon={icon} />
      <span>{text}</span>
    </a>
  </li>
);
