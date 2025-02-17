const API_BASE_URL = "http://localhost:4000/api/expenses"; // Update for production

export const getExpenses = async () => {
  const res = await fetch(API_BASE_URL);
  return await res.json();
};

export const addExpense = async (expense) => {
  const res = await fetch(`${API_BASE_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense),
  });
  return await res.json();
};
