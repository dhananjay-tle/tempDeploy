const urlParams = new URLSearchParams(window.location.search);
const selectedStyle = urlParams.get("style");

if (selectedStyle) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `style${selectedStyle}.css`;
    console.log(link.href)
    document.head.appendChild(link);
}
