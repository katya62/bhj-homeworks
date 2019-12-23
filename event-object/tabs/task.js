const tabs = Array.from (document.getElementsByClassName("tab"));
const tabsContent = Array.from (document.getElementsByClassName("tab__content"));
tabs.forEach((tab) => tab.addEventListener("click", () => selectTab(tab)));
function selectTab (tab) {
	const activeTab = document.getElementsByClassName("tab_active")[0];
	activeTab.classList.remove ("tab_active");
	tab.classList.add ("tab_active");
	const activeContent = document.getElementsByClassName("tab__content_active")[0];
	activeContent.classList.remove ("tab__content_active");
	const numberEl = tabs.indexOf(tab);
	const content = tabsContent[numberEl];
	content.classList.add ("tab__content_active");
}

