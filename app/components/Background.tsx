export default function Background() {
  return (
    <div className="fixed inset-0 w-full h-screen overflow-hidden z-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      {/* Overlay per scurire il video */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    </div>
  );
}
