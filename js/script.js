
    (async () => {
        const response = await fetch("users.json");
        const datiJson = await response.json();
        console.log(datiJson);
     }) ();