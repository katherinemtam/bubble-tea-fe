export const fetchToppings = async () => {
  const res = await fetch('https://bubble-tea-be.herokuapp.com/api/v1/toppings');
  const json = res.json();
  return json;
};

export const fetchTopping = async (id) => {
  const res = await fetch(`https://bubble-tea-be.herokuapp.com/api/v1/toppings/${id}`);
  const json = res.json();
  return json;
};
