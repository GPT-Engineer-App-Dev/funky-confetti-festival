import { useState, useCallback, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

const FunkyConfetti = () => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [isExploding, setIsExploding] = useState(false);

  const handleResize = useCallback(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const handleExplode = () => {
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 3000);
  };

  return (
    <div className="relative h-screen">
      <ReactConfetti
        width={dimensions.width}
        height={dimensions.height}
        numberOfPieces={isExploding ? 500 : 0}
        recycle={false}
        colors={['#ff00ff', '#00ff00', '#ff0000', '#0000ff', '#ffff00']}
      />
      <button
        onClick={handleExplode}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition duration-300 ease-in-out"
      >
        Explode Confetti!
      </button>
    </div>
  );
};

export default FunkyConfetti;
