import Image from 'next/image';

type TeapotWatermarkProps = {
  small?: boolean;
};

export default function TeapotWatermark({ small = false }: TeapotWatermarkProps) {
  if (small) {
    return (
      <div className="teapot-watermark teapot-watermark--small" aria-hidden="true">
        <Image
          src="/images/grabado-pared.png"
          alt=""
          width={140}
          height={245}
          className="teapot-watermark__img"
        />
      </div>
    );
  }

  return (
    <div className="section__grabado" aria-hidden="true">
      <Image
        src="/images/grabado-pared.png"
        alt=""
        fill
        sizes="55vw"
        quality={100}
        className="section__grabado-img"
      />
    </div>
  );
}
