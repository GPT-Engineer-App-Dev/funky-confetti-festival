import FunkyConfetti from '../components/FunkyConfetti';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Funky Confetti App</h1>
        <FunkyConfetti />
      </div>
    </div>
  );
};

export default Index;
