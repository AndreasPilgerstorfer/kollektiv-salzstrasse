(function () {

    let btns = document.querySelectorAll(".filter-btn");
    let items = document.querySelectorAll(".work-item");

    for (let btn of btns) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            let id = btn.id;

            let allBtns = document.querySelectorAll(".filter-btn");
            for (let curr of allBtns) {
                curr.classList.remove("active");
            }
            btn.classList.add("active");

            for (let item of items) {
                if (id !== 'all') {
                    if (!item.classList.contains(id)) {
                        item.classList.add("hide");
                    }
                    if (item.classList.contains(id)) {
                        item.classList.remove("hide");
                    }
                } else {
                    item.classList.remove("hide");
                }
            }
        })
    }

})();