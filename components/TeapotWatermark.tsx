import Image from 'next/image';

export default function TeapotWatermark({ small = false }: { small?: boolean }) {
  return (
    <div
      className={`teapot-watermark${small ? ' teapot-watermark--small' : ''}`}
      aria-hidden="true"
    >
      <Image
        src="/images/teapot.png"
        alt=""
        width={280}
        height={228}
        className="teapot-watermark__img"
      />
    </div>
  );
}
