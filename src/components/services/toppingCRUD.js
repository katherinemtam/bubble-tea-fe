export const addTopping = async (topping) => {
  const res = await fetch('https://bubble-tea-be.herokuapp.com/api/v1/toppings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(topping)
  });
  const json = await res.json();

  return json;
};

export const updateTopping = async (topping) => {
  const res = await fetch(`https://bubble-tea-be.herokuapp.com/api/v1/toppings/${topping.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(topping)
  });
  const json = await res.json();
  
  return json;
};

export const deleteTopping = async (id) => {
  const res = await fetch(`https://bubble-tea-be.herokuapp.com/api/v1/toppings/${id}`, {
    method: 'DELETE'
  });
  const json = await res.json();
  
  return json;
};
