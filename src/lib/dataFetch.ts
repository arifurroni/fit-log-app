
export const GetAllData = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data.json`);
  if (!response.ok) {
    throw new Error("Failed to fetch workout data");
  }

  return response.json();
};