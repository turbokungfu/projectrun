console.log("Welcome to Deno!");
console.log("%cHello World", "color: red");
console.log("%cHello World", "background-color: blue");
console.log("%cHello World", "text-decoration: underline");
console.log("%cHello World", "text-decoration: line-through");
console.log("%cHello World", "font-weight: bold");
console.log("%cHello World", "color: red; font-weight: bold");
console.log("%cHello %cWorld", "color: red", "color: blue");
console.log("%cHello World", "color: #FFC0CB");
console.log("%cHello World", "color: rgb(255, 192, 203)");


// const url = Deno.args[0];
// const res = await fetch(url);

// const body = new Uint8Array(await res.arrayBuffer());
// await Deno.stdout.write(body);