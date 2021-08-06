export const fetchToppings = async () => {
  const res = await fetch('https://bubble-tea-be.herokuapp.com/api/v1/toppings');
  const json = res.json();
  console.log('fetching', json);
  return json;
};
