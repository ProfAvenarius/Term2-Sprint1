document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const tableBody = document.getElementById("registrationTable").querySelector("tbody");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        
        const name = document.getElementById("name").value;
        const enterprise = document.getElementById("enterprise").value;
        const street = document.getElementById("street").value;
        const town = document.getElementById("town").value;
        const province = document.getElementById("province").value;
        const postalCode = document.getElementById("postalCode").value;
        const homeport = document.getElementById("homeport").value;
        const licenceNumber = document.getElementById("licenceNumber").value;
        const species = document.getElementById("species").value;

        
        const address = `${street}, ${town}, ${province}, ${postalCode}`;

       
        const fisherData = {
            name,
            enterprise,
            address,
            homeport,
            licenceNumber,
            species
        };

        
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${fisherData.name}</td>
            <td>${fisherData.enterprise}</td>
            <td>${fisherData.address}</td>
            <td>${fisherData.homeport}</td>
            <td>${fisherData.licenceNumber}</td>
            <td>${fisherData.species}</td>
        `;
        tableBody.appendChild(row);

       
        form.reset();
    });
});
