document.addEventListener("DOMContentLoaded", function() {
    fetch("data/fishData.json")
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById("fishTable").querySelector("tbody");

            data.forEach(entry => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td><a href="details.html?item=${entry.itemNumber}">${entry.itemNumber}</a></td>
                    <td>${entry.species}</td>
                    <td>$${entry.pricePerLb.toFixed(2)}</td>
                    <td>${entry.timeOfCatch.replace('@', ' ')}</td>
                    <td><a href="${entry.location}" target="_blank">Map</a></td>
                    <td>${entry.fisher}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Error loading data:", error));
});

