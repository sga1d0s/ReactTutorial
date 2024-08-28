
function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 }
  ];

  fruits.sort((a, b) => a.name.localeCompare(b.name)); // alfabético
  // fruits.sort((a,b)=> b.name.localeCompare(a.name)); // alfabético inverso

  // fruits.sort((a, b) => a.calories - b.calories); // numérico
  // fruits.sort((a, b) => b.calories - a.calories); // numérico inverso

  const regular = fruits.map(fruit => <li key={fruit.id}>
                                      {fruit.name}: &nbsp; {/* espacio */}
                                      <b>{fruit.calories}</b></li>) /* negrita */

  // filttra las frutas com menos de 100 calorías
  const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)

  const lowCal = lowCalFruits.map(fruit => <li key={fruit.id}>
                                      {fruit.name}: &nbsp; {/* espacio */}
                                      <b>{fruit.calories}</b></li>) /* negrita */
  return (
    <>
      <h1>Regular fruits</h1>
      <ul>{regular}</ul>
      <h1>Low Calories fruits</h1>
      <ul>{lowCal}</ul>
    </>
  )
}
export default List