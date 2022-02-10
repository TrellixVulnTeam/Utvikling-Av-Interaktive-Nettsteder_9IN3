// 6. Lists
// Create an array const food = ['Pizza', 'Hamburger', 'Coke'];
// Render this list inside App.js. Use <ul><li></li></ul> and food.map()
// Remember to add a key to <li>.
// All of this should be inside the return ().

// 7. Lists Component
// Create a Food component in the components folder.
// Replace the list create above with this component.
// The browser should still render the list.
// Remember to add "food"-prop to the <Food> component
// and send the food array as prop.

// const food = ['Pizza', 'Hamburger', 'Coke'];

export default function FoodList({ foods }) {
  return (
    <>
      <ul>
        {foods.map((food) => (
          <li key={food.id}>{food.value}</li>
        ))}
      </ul>
    </>
  );
}
