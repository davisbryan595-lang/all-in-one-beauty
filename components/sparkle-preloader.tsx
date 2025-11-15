export default function SparklePreloader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-peach/5 to-gold/10 flex items-center justify-center z-[9999]">
      <div className="text-center space-y-4">
        {/* Animated Sparkles */}
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl animate-bounce">✨</div>
          </div>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gold rounded-full"
              style={{
                top: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
                left: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
                animation: `pulse 2s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <div>
          <p className="text-2xl font-display font-bold text-charcoal">
            Transforming Beauty...
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Preparing your studio experience
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )
}
