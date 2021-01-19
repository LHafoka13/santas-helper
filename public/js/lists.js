document.addEventListener("DOMContentLoaded", (e) => {
    if (e) {
        console.log("DOM Loaded");


        //creates a new List Member 

        const createListMemberBtn = document.getElementById("create-list-btn");

        createListMemberBtn.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("loading");

            const newListMember = {

                name: document.getElementById("add-list-member").value.trim(),
            };

            fetch('api/lists', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newListMember),
            }).then(() => {
                document.getElementById("add-list-member").value = "";

                console.log("added list member");
                location.reload();
            })
        })

        //

    }
})