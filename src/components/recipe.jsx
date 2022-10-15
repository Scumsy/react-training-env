import { BsFillAlarmFill } from 'react-icons/bs';

export const Recipe = ({
  recipe: { name, time, servings, calories, image },
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <BsFillAlarmFill />
        <p>{time} mins</p>
      </div>
      <div>
        <span>Servings</span>
        <p>{servings} mins</p>
      </div>
      <div>
        <span>Calories</span>
        <p>{calories}</p>
      </div>
    </div>
  );
};
