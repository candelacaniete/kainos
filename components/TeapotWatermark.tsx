import Image from 'next/image';

type TeapotWatermarkProps = {
  variant?: 'accent';
};

export default function TeapotWatermark({ variant = 'accent' }: TeapotWatermarkProps) {
  return (
    <div className={`teapot-watermark teapot-watermark--${variant}`} aria-hidden="true">
      <Image
        src="/images/teapot.png"
        alt=""
        width={320}
        height={260}
        className="teapot-watermark__img"
      />
    </div>
  );
}
