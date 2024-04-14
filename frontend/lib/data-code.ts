export async function getUserData() {
  const response = await fetch("http://localhost:8000/users");
  const data = (await response.json()) as User[];
  return data;
} // ejemplo
