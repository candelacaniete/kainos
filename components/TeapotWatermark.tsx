import Image from 'next/image';

type TeapotWatermarkProps = {
  variant?: 'default' | 'integrated';
};

export default function TeapotWatermark({ variant = 'default' }: TeapotWatermarkProps) {
  return (
    <div
      className={`teapot-watermark teapot-watermark--${variant}`}
      aria-hidden="true"
    >
      <Image
        src="/images/teapot.png"
        alt=""
        width={variant === 'integrated' ? 680 : 280}
        height={variant === 'integrated' ? 554 : 228}
        className="teapot-watermark__img"
      />
    </div>
  );
}
