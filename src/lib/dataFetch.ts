
export const GetAllData = async () => {
  const response = await fetch("http://localhost:3000/data.json");
  if (!response.ok) {
    throw new Error("Failed to fetch workout data");
  }

  return response.json();
};