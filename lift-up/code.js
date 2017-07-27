window.addEventListener("load", function () {
    var target = "#"+document.querySelector("[id]").getAttribute("id");
    window.addEventListener("popstate", function () {
        if (target != "" && target != window.location.hash){
        var node = document.querySelector('[data - previous]');
        if (node != null) node.removeAttribute("data - previous");
        document.querySelector(target).setAttribute("data - previous", "");
    }
    target = window.location.hash;
});
});