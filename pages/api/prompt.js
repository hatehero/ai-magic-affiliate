export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method tidak dibenarkan" });
  }

  const { prompt } = req.body;

  if (!prompt || !prompt.trim()) {
    return res.status(400).json({ error: "Prompt kosong" });
  }

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=" +
        process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
Berdasarkan ayat ini: "${prompt}"

Hasilkan 5 PROMPT GAMBAR berbeza untuk AI image generator.
Setiap prompt:
- Angle kamera berbeza
- Gaya profesional
- Sesuai untuk iklan / video 8 saat
- Ayat penuh (English)

Format:
1. ...
2. ...
3. ...
4. ...
5. ...
`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return res.status(500).json({ error: "Tiada respon dari Gemini" });
    }

    res.status(200).json({ result: text });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
