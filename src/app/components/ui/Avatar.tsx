// components/ui/Avatar.tsx
import Image from "next/image";

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: number;
}

export function Avatar({ src, alt = "User Avatar", name = "User", size = 50 }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative flex items-center justify-center overflow-hidden rounded-full bg-gray-200 text-gray-700 font-bold" 
      style={{ width: size, height: size }}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="rounded-full"
        />
      ) : (
        <span className="text-lg">{initials}</span>
      )}
    </div>
  );
}
