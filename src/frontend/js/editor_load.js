require.config({
    paths: {
        vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs/",
    },
});
window.MonacoEnvironment = {
    getWorkerUrl: function (workerId, label) {
        return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
                self.MonacoEnvironment = { baseUrl: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/" };
                importScripts("https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs/base/worker/workerMain.min.js");`)}`;
    },
};
// Remove hardcoded path and dynamically create new models
// ... for each files
require(["vs/editor/editor.main"], async function () {
    // Create the editor with some sample JavaScript code
    var editor = monaco.editor.create(document.getElementById("editor"), {
        value: await fetch(
            "https://raw.githubusercontent.com/llvm/llvm-project/main/llvm/lib/CodeGen/Analysis.cpp"
        ).then((s) => s.text()),
        language: "cpp", // Add supports to x86 ASM
        inlayHints: {
            enabled: true,
        },
        theme: "vs-dark",
        readOnly: true,
    });

    // Resize the editor when the window size changes
    const editorElement = document.getElementById("editor");
    window.addEventListener("resize", () =>
        editor.layout({
            width: editorElement.offsetWidth,
            height: editorElement.offsetHeight,
        })
    );
    // Register commenting functions
    const model = monaco.editor.getModels()[0];
    model.deltaDecorations(model.getAllDecorations(), [
        {
            range: new monaco.Range(89, 0, 99, 0),
            options: {
                isWholeLine: true,
                marginClassName: "markup-1",
                className: "markup-1",
                hoverMessage: {
                    supportHtml: true,
                    value:
                        "<img src='https://avatars.githubusercontent.com/u/23451424?v=4'" +
                        " width='50' align='right'/>\n\n" +
                        Date() +
                        "\n\n" +
                        "By [_dungwinux_](https://github.com/dungwinux/):\n\n" +
                        "We should fuzz this part and check coverage.",
                },
            },
        },
        {
            range: new monaco.Range(102, 0, 109, 0),
            options: {
                isWholeLine: true,
                marginClassName: "markup-2",
                className: "markup-2",
                hoverMessage: {
                    supportHtml: true,
                    value:
                        "" +
                        Date() +
                        "\n\n" +
                        "By [_seal9055_](https://github.com/seal9055/):\n\n" +
                        "This one too",
                },
            },
        },
    ]);
});
