const metaViewport = document.querySelector("meta[name=viewport]") ?? document.createElement("meta");
if (!metaViewport.hasAttribute("name")) {
    metaViewport.name = "viewport";
    metaViewport.content = "width=device-width, initial-scale=1.0";
    document.head.appendChild(metaViewport);
}
