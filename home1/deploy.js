const urlParams = new URLSearchParams(window.location.search);
const style = urlParams.get("style");

if (style) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `style${style}.css`;
    console.log(link.href)
    document.head.appendChild(link);
}
