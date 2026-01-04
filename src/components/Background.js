  "use client";

  export default function Background() {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-gray-500/20 to-blue-500/20" />

        {/* animated blobs */}
        <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-[-120px] right-[-120px] w-80 h-80 bg-gray-500 rounded-full blur-3xl opacity-30 animate-pulse" />
      </div>
    );
  }
