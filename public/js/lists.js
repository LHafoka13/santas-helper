document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");

    const getListMembers = () => {
        console.log("Getting List Members");

        fetch("/api/lists", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
})