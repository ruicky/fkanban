$(document).ready(function() {
    textarea2 = mirrorMark(document.getElementById("notes"), {
        showToolbar: true,
        // lineNumbers: true,
        styleActiveLine: true,
    });
    textarea2.render();
});
