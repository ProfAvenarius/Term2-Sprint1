
document.addEventListener("DOMContentLoaded", () => {
    let itemNumber = 1101; 

    const form = document.getElementById("fishForm");
    const sellersTableBody = document.getElementById("sellersTable").querySelector("tbody");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
       
        const species = document.getElementById("species").value;
        const price = parseFloat(document.getElementById("price").value);
        const location = document.getElementById("location").value;
        const fisher = document.getElementById("fisher").value;
        
        
        const now = new Date();
        const dateTime = now.toISOString().slice(0, 19).replace('T', '@'); 
        
        
        const fishData = {
            item: itemNumber,
            species: species,
            price: price,
            dateTime: dateTime,
            location: location,
            fisher: fisher
        };

    
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${fishData.item}</td>
            <td>${fishData.species}</td>
            <td>$${fishData.price.toFixed(2)}</td>
            <td>${fishData.dateTime}</td>
            <td><a href="${fishData.location}" target="_blank">Map</a></td>
            <td>${fishData.fisher}</td>
        `;
        sellersTableBody.appendChild(row);

        
        form.reset();
        
        
        itemNumber++;
    });
});
