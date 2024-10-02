document.addEventListener("DOMContentLoaded", function() {
    // Add note button functionality
    const addNoteBtn = document.getElementById("add-note-btn");
    if (addNoteBtn) {
        addNoteBtn.addEventListener("click", function() {
            const title = document.getElementById("note-title")?.value.trim();
            const description = document.getElementById("note-description")?.value.trim();

            if (title !== "" || description !== "") {
                const noteCard = document.createElement("div");
                noteCard.classList.add("note-card");

                if (title !== "") {
                    const noteTitle = document.createElement("h2");
                    noteTitle.innerText = title;
                    noteCard.appendChild(noteTitle);
                }

                if (description !== "") {
                    const noteDescription = document.createElement("p");
                    noteDescription.innerText = description;
                    noteCard.appendChild(noteDescription);
                }

                const dotsBtn = document.createElement("button");
                dotsBtn.classList.add("dots-btn");
                dotsBtn.innerText = "⋮";
                noteCard.appendChild(dotsBtn);

                const dropdownMenu = document.createElement("div");
                dropdownMenu.classList.add("dropdown-menu");

                const editBtn = document.createElement("button");
                editBtn.innerText = "Edit";
                editBtn.addEventListener("click", function() {
                    const newTitle = prompt("Edit Judul", title);
                    const newDescription = prompt("Edit Deskripsi", description);
                    if (newTitle) noteTitle.innerText = newTitle;
                    if (newDescription) noteDescription.innerText = newDescription;
                });
                dropdownMenu.appendChild(editBtn);

                const archiveBtn = document.createElement("button");
                archiveBtn.innerText = "Arsipkan";
                archiveBtn.addEventListener("click", function() {
                    alert("Catatan diarsipkan.");
                    noteCard.remove();
                });
                dropdownMenu.appendChild(archiveBtn);

                const deleteBtn = document.createElement("button");
                deleteBtn.innerText = "Hapus";
                deleteBtn.addEventListener("click", function() {
                    noteCard.remove();
                });
                dropdownMenu.appendChild(deleteBtn);

                noteCard.appendChild(dropdownMenu);

                dotsBtn.addEventListener("click", function() {
                    dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
                });

                document.getElementById("notes-grid")?.appendChild(noteCard);
                document.getElementById("note-title").value = "";
                document.getElementById("note-description").value = "";
            } else {
                alert("Silakan masukkan judul atau deskripsi.");
            }
        });
    }

    // Show menu when mouse is over the menu icon
    const menuIcon = document.getElementById("menu-icon");
    if (menuIcon) {
        menuIcon.addEventListener("mouseover", function() {
            const menu = document.getElementById("menu");
            menu.style.display = "block"; // Show the menu
        });

        // Hide the menu when mouse leaves the sidebar
        document.querySelector(".sidebar").addEventListener("mouseleave", function() {
            const menu = document.getElementById("menu");
            menu.style.display = "none"; // Hide the menu
        });
    }
});
