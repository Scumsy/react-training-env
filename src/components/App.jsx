import recipes from '../recepies.json';
import { RecipeList } from './recipes';
import { TestThing } from './test';

export const App = () => {
  return (
    <div>
      <RecipeList recipes={recipes} />
      <TestThing name={'Haitawar'} />
    </div>
  );
};

//  style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
