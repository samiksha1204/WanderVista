import Image from "next/image";

const Logo = () => {
  return (
    <Image
      priority
      src="/LOGO.png" // Adjust the path based on your project structure
      alt="Logo Image" // Provide a meaningful description for the alt attribute
      width={180} // Set the width of the image
      height={100}
      className="w-[18rem] h-[5rem] aspect-video"
    />
  );
};

export default Logo;
