import { useEffect, useState } from "react";

const MouseCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="relative">
        {/* Outer glow */}
        <div className="absolute inset-0 w-10 h-16 rounded-full bg-cyan-400/20 blur-md animate-pulse" />
        
        {/* Main cursor */}
        <div className="relative w-10 h-16 rounded-full border-2 border-cyan-400/60 bg-transparent flex items-center justify-center">
          {/* Inner pill */}
          <div className="w-2 h-8 rounded-full bg-cyan-400/80" />
        </div>
      </div>
    </div>
  );
};

export default MouseCursor;
