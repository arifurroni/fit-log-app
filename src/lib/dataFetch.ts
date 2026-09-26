
export const GetAllData = async () => {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching workout data:", error);
    return []; 
  }
};