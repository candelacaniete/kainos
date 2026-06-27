export default function TeapotWatermark({ small = false }: { small?: boolean }) {
  return (
    <div
      className={`teapot-watermark${small ? ' teapot-watermark--small' : ''}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 240" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M40 120h80c8 0 14-6 14-14V70H40v50z" />
        <path d="M40 120v30h80v-30" />
        <path d="M55 70V45c0-6 5-11 11-11h28c6 0 11 5 11 11v25" />
        <path d="M134 85c12 0 22 5 28 14" />
        {!small && (
          <>
            <path d="M30 155c0 0 20 8 50 8s50-8 50-8" />
            <path d="M70 35c-2-8 2-14 10-14" />
            <path d="M90 25c0-4 3-7 7-7" />
          </>
        )}
      </svg>
    </div>
  );
}
