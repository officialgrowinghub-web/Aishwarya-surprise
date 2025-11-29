async function generate() {
  const input = document.getElementById("inputText").value;

  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "user", content: input }
        ]
      })
    }
  );

  const data = await response.json();
  document.getElementById("outputText").value = data.choices[0].message.content;
    }
