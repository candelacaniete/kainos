import Image from 'next/image';

type TeapotWatermarkProps = {
  small?: boolean;
};

export default function TeapotWatermark({ small = false }: TeapotWatermarkProps) {
  return (
    <div
      className={`teapot-watermark${small ? ' teapot-watermark--small' : ''}`}
      aria-hidden="true"
    >
      <Image
        src="/images/teapot.png"
        alt=""
        width={small ? 140 : 320}
        height={small ? 114 : 260}
        className="teapot-watermark__img"
      />
    </div>
  );
}
