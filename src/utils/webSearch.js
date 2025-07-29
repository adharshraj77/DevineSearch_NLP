const GOOGLE_API_KEY = 'AIzaSyCPNHGxSGJodoEGv1F2XBWwr2gXJ0xo2q4';
const GOOGLE_CSE_ID = '37f25845eeeda442f';

export async function getWebResults(query, num = 5) {
  try {
    const searchURL = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${GOOGLE_CSE_ID}&q=${encodeURIComponent(query)}&num=${num}`;

    const res = await fetch(searchURL);
    const data = await res.json();

    if (!data.items) return [];
    
    return data.items.slice(0, num).map(item => ({
      title: item.title,
      link: item.link,
      snippet: item.snippet,
    }));
  } catch (error) {
    console.error('Error fetching web results:', error);
    return [];
  }
}