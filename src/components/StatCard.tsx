
interface StatCardProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
}

const StatCard = ({ number, label, icon }: StatCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">
        {icon || (
          <div className="w-14 h-14 bg-lsa-gold/20 rounded-full flex items-center justify-center">
            <span className="text-lsa-gold text-2xl">★</span>
          </div>
        )}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold mb-2 text-lsa-black">{number}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatCard;
