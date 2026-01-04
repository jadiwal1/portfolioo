  // "use client";

  // export default function Background() {
  //   return (
  //     <div className="absolute inset-0 -z-10 overflow-hidden">
  //       {/* gradient */}
  //       <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-gray-500/20 to-blue-500/20" />

  //       {/* animated blobs */}
  //       <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" />
  //       <div className="absolute bottom-[-120px] right-[-120px] w-80 h-80 bg-gray-500 rounded-full blur-3xl opacity-30 animate-pulse" />
  //     </div>
  //   );
  // }


  "use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const mouse = { x: null, y: null };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    // 🔹 particles
    const particles = [];
    const COUNT = 90;

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 🧲 cursor repel
        if (mouse.x && mouse.y) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const force = (140 - dist) / 140;
            p.x += dx * force * 0.15;
            p.y += dy * force * 0.15;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        // wrap
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        // dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(120,120,120,0.8)";
        ctx.fill();

        // lines
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(150,150,150,${1 - dist / 120})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
    />
  );
}
