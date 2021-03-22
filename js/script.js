const metaTags = document.getElementsByTagName("meta");
let isMetaViewportThere = false;
for (let i = 0; i < metaTags.length; i++) {
    if (metaTags[i].getAttribute("name") === "viewport") {
        isMetaViewportThere = true;
        break;
    }
}
if (!isMetaViewportThere) {
    const metaViewport = document.createElement("meta");
    metaViewport.setAttribute("name", "viewport");
    metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");
    document.head.appendChild(metaViewport);
}
