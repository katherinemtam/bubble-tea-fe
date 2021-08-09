export const addTopping = async (topping) => {
  const res = await fetch('https://bubble-tea-be.herokuapp.com/api/v1/toppings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(topping)
  });
  const json = await res.json();
  console.log(json);
  return json;
};
