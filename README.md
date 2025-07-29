

# 📖 Bible Semantic Search Engine  
✨ *React + Hugging Face + Google CSE | Dark Academia Design*

This project is a modern, semantically enhanced Bible Search web app focused on **New Testament** verses. It matches queries based on meaning, not just keywords, using **Hugging Face's sentence-transformer models**, and provides **Google search results** to enrich each search with real-world context. Users can **save searches** into a personalized library.

---

## 🔍 Features

- ✅ **Semantic Bible Verse Search** – Uses `all-mpnet-base-v2` transformer model for meaningful verse matching.
- 🌐 **Google Web Search Integration** – Pulls real-time articles via Google Custom Search.
- 💾 **Library (Save to Favorites)** – Store your favorite search outputs and revisit anytime (max 30).
- 🖤 **Dark Academia Theme** – Elegant, scholarly UI using Tailwind CSS, Framer Motion, and GSAP.

---

## 🧱 Tech Stack

| Category         | Technology                                |
|------------------|--------------------------------------------|
| Frontend         | React, TypeScript, Vite                   |
| Styling          | Tailwind CSS, Framer Motion, GSAP        |
| Semantic Search  | Hugging Face API (Router endpoint)        |
| Web Search       | Google Custom Search JSON API             |
| Storage          | Local Storage (up to 30 saved searches)  |

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/bible-semantic-search.git
cd bible-semantic-search
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add API Keys in `.env`

Create a `.env` file in the root with the following values:

```env
VITE_HF_TOKEN=your_huggingface_api_token
VITE_GOOGLE_API_KEY=your_google_api_key
VITE_GOOGLE_CSE_ID=your_google_cse_id
```

- 🔑 Hugging Face Token: [Create here](https://huggingface.co/settings/tokens)
- 🔍 Google CSE: [Create your custom search engine](https://programmablesearchengine.google.com/)

---

### 4. Start the App

```bash
npm run dev
```

Visit the app at: [http://localhost:5173](http://localhost:5173)

---

## 🧠 How It Works

### 🔹 Semantic Search via Hugging Face

We send this payload to the Hugging Face **sentence similarity router endpoint**:

```json
{
  "inputs": {
    "source_sentence": "God's mercy is endless",
    "sentences": ["Verse 1", "Verse 2", ..., "Verse N"]
  }
}
```

> ✅ Returns an array of similarity scores which we sort and show as top matches.

### 🔹 Google Search Integration

We query Google CSE with your search string and display article results using this API:

```
https://www.googleapis.com/customsearch/v1?q=YOUR_QUERY&key=API_KEY&cx=CSE_ID
```

---

## 📂 Folder Structure

```
📁 src/
├── components/           # UI components (Navbar, Search, Cards, etc.)
├── utils/                # Logic for embedding, cosine, search
├── data/                 # bible_embeddings.json (New Testament only)
├── App.tsx               # Main app logic
├── main.tsx              # Vite entry point
└── index.css             # Tailwind global styles
```

---

## 💡 Sample Queries

Try entering:

- “Jesus speaks about forgiveness”
- “Love your enemies”
- “Faith during suffering”
- “Eternal life promise”
- “Peace in troubled times”

---

## 📌 Limitations

- 📖 Only New Testament is loaded right now.
- ⏳ Hugging Face API may timeout on large data (use cloud or smaller batches).
- 🌐 Web results limited to what Google indexes and CSE config allows.
- 💾 Local storage is capped to the most recent 30 saved queries.

---

## 🧪 Future Improvements

- 📚 Add full Bible (Old + New Testament)
- 🧠 Integrate GPT-based reranking or explanation
- 🧭 Hybrid keyword + semantic scoring model
- ☁️ Deploy backend inference for faster similarity

---

## 👨‍💻 Author

**Adharsh Raj Kavala**  
GitHub: [@adharshraj77](https://github.com/adharshraj77)

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- Hugging Face for state-of-the-art transformer models
- Google Programmable Search Engine for augmenting web results
- Bible in the public domain (New Testament corpus)

---

> *"Let the word of Christ dwell in you richly..." – Colossians 3:16*
