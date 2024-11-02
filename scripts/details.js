document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemNumber = urlParams.get('item');

    fetch("fishData.json")
        .then(response => response.json())
        .then(data => {
            
            const fishEntry = data.find(entry => entry.itemNumber == itemNumber);
            if (fishEntry) {
               
                document.getElementById("itemNumber").textContent = fishEntry.itemNumber;
                document.getElementById("species").textContent = fishEntry.species;
                document.getElementById("price").textContent = fishEntry.pricePerLb.toFixed(2);
                document.getElementById("timeOfCatch").textContent = fishEntry.timeOfCatch.replace('@', ' ');
                document.getElementById("location").href = fishEntry.location;
                document.getElementById("fisher").textContent = fishEntry.fisher;
                
               
                const pricePerLb = fishEntry.pricePerLb;
                const quantityInput = document.getElementById("quantity");
                const totalOutput = document.getElementById("total");

                quantityInput.addEventListener("input", function() {
                    const quantity = Math.min(Math.max(quantityInput.value, 1), 999); // Clamp quantity between 1 and 999
                    const total = (pricePerLb * quantity).toFixed(2);
                    totalOutput.textContent = total;
                });
            } else {
                console.error("Item not found");
                document.getElementById("itemDetails").textContent = "Item not found.";
            }
        })
        .catch(error => console.error("Error loading data:", error));
});
