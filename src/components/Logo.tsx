import Image from "next/image";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();

  const handleImageClick = () => {
    // Handle your navigation or action here
    router.push("/Home"); // Replace with your actual destination
  };

  return (
    <Image
      priority
      src="/LOGO.png"
      alt="Logo Image"
      width={180}
      height={100}
      className="w-[18rem] h-[5rem] aspect-video cursor-pointer"
      onClick={handleImageClick}
    />
  );
};

export default Logo;
