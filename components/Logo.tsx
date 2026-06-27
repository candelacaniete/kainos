import Image from 'next/image';

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export default function Logo({ className = '', priority = false }: LogoProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="Kainos — Helado Artesanal"
      width={180}
      height={72}
      className={`logo${className ? ` ${className}` : ''}`}
      priority={priority}
    />
  );
}
