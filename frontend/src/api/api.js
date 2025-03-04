const base_url = import.meta.env.VITE_API_BASE_URL;
const getLevels = async (id = "") => {
  if (!base_url) {
    console.error("API_BASE_URL is not defined");
    return null;
  }
  let url = `${base_url}/levels`;

  if (id) {
    url += `/${id}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Error fetching levels: HTTP ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data || [];
  } catch (err) {
    console.error("Error fetching levels:", err.message);
    return null;
  }
};

const getLeaderboard = async (id) => {
  try {
    const response = await fetch(`${base_url}/levels/leaderboard/${id}`);
    if (!response.ok) {
      console.error("Error fetching leaderboard: HTTP " + response.status);
      return null;
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching leaderboard data:", err.message);
    return null;
  }
};

const addToLeaderboard = async (id, name, time) => {
  try {
    const response = await fetch(`${base_url}/levels/leaderboard/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, time }),
    });

    if (!response.ok) {
      console.error(`Error posting leaderboard: HTTP ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error posting leaderboard data:", err.message);
    return null;
  }
};

export { getLevels, getLeaderboard, addToLeaderboard };
