document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Loaded");

    const memberContainer = document.querySelector(".member-container");

    let giftItems;

    const getgifts = (listmember) => {
        listmemberId = listmember || '';

        if (listmemberId) {
           listmemberId = `/lists?=${listmemberId}` 
        }

        fetch(`/api/items${listmemberId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            giftItems = data;
            console.log("success getting data:", giftItems);
        })
    }

    getgifts()
});