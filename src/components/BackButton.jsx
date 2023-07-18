import Link from "next/link";
import Image from "next/image";
import backIcon from "../../public/back-icon.png";

const BackButton = ({ previous }) => {
  return (
    <div
      className={
        previous ? "tooltip tooltip-right w-8 h-8 " : "tooltip w-10 h-10 ml-10"
      }
      data-tip="back"
    >
      <Link href={previous ? "/whereto" : "/"}>
        <Image src={backIcon} alt="back-btn" />
      </Link>
    </div>
  );
};

export default BackButton;
