const apiURL = "https://nf-api.onrender.com/api/v1/cat-facts/";

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6Ik9saXZlciIsImVtYWlsIjoib2xpdmVyLmRpcHBsZUBub3JvZmYubm8iLCJhdmF0YXIiOiJodHRwczovL2kuaW1ndXIuY29tL0xtNWdSdnIuanBlZyIsImJhbm5lciI6bnVsbCwiaWF0IjoxNjYzNzg3NDk4fQ.QRxXm57t6leq0b1LVxQMtz3Xx2_OuI5isS8mgHioJYw";

export async function app(unusedArgument) {
  const response = await fetch(apiURL);

  const facts = await response.json();

  facts.forEach((fact) => {
    const item = document.createElement("div");
    item.innerText = fact.text;
    document.body.append(item);
  });

  console.log(unusedArgument);

  return "App Ready!";
}

app().then(console.log);
