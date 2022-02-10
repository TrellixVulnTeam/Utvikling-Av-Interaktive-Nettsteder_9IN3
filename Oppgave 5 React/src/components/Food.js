import FoodList from './FoodList';
// const food = ['Pizza', 'Hamburger', 'Coke'];

export default function Food() {
  // Sender en prop med navn food. Den kan hentes i Food med
  // prop.food
  return (
    <FoodList
      foods={[
        { id: 1, value: 'Pizza' },
        { id: 2, value: 'Hamburger' },
        { id: 3, value: 'Coke' }
      ]}
    />
  );
}
