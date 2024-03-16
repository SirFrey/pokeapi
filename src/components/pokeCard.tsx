type PokeCardProps = {
  name: string;
  id: string;
};

const PokeCard = ({ id, name }: PokeCardProps) => {
  let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="bg-gray-400 rounded-lg">
      <div className="">
        <img src={image} className="w-full aspect-square" alt="" />
        <p className="text-center text-2xl">{name}</p>
      </div>
    </div>
  );
};

export default PokeCard;
