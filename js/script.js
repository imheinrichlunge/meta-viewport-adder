const metaViewportThere = document.querySelector("meta[name=viewport]");
if (!metaViewportThere) {
    const metaViewport = document.createElement("meta");
    metaViewport.setAttribute("name", "viewport");
    metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");
    document.head.appendChild(metaViewport);
}
