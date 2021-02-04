function tabsModule() {
    const tabs = [...document.querySelectorAll(".tab")];

    tabs.forEach(tab => tab.addEventListener("click", (e) => {
        let menu, contact, about;
        const element = e.target;
        const tabData = e.target.getAttribute("data-selection");
        const pages = [...document.querySelectorAll(".page")];
        const activePage = document.querySelector(".page-current");
        const activeTab = document.querySelector(".tab-current");
        [menu, contact, about] = pages;
        switch (true) {
            case (tabData === activePage.id):
                console.log("already active");
                break;
            case (tabData === menu.id): 
                activeTab.classList.remove("tab-current");
                activePage.classList.remove("page-current");
                element.classList.add("tab-current");
                menu.classList.add("page-current");
                break;
            case (tabData === contact.id): 
                activeTab.classList.remove("tab-current");
                activePage.classList.remove("page-current");
                element.classList.add("tab-current");
                contact.classList.add("page-current");
                break;
            case (tabData === about.id): 
                activeTab.classList.remove("tab-current");
                activePage.classList.remove("page-current");
                element.classList.add("tab-current");
                about.classList.add("page-current");
                break;
        }
    }));
}

export { tabsModule }



