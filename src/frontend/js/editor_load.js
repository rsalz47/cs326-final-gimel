import {getFile, getFileList} from "./client.js";

async function updateFileList({editor, monaco}) {
    const {data: fileList} = await getFileList();
    const listEntry = ({name, path}) => {
        // <div class="row">
        // <button class="btn">module1.cpp</button>
        // </div>
        const el = document.createElement("div");
        el.classList.add("row");
        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.textContent = name;

        btn.addEventListener("click", async () => {
            const {data} = await getFile(path);
            // Turns out, monaco has its own models handler.
            // We will create new ones in case it was not handled by monaco
            const model
                = monaco.editor.getModel(path)
                ?? monaco.editor.createModel(data.content, data.type ?? "", path);
            editor.setModel(model);
        });

        el.appendChild(btn);
        return el;
    };

    const fl = document.getElementById("file_list");
    fl.replaceChildren();
    fileList?.map(listEntry)?.forEach(node => fl.appendChild(node));
}

// Solution to import monaco-editor based on https://stackoverflow.com/a/63179814
const monacoBaseCDN
    = "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/";
require.config({paths: {vs: monacoBaseCDN + "vs/"}});
window.MonacoEnvironment = {
    getWorkerUrl() {
        const code = `
self.MonacoEnvironment = { baseUrl: "${monacoBaseCDN}" };
importScripts("${monacoBaseCDN}vs/base/worker/workerMain.min.js");
`;
        return `data:text/javascript;charset=utf-8,${encodeURIComponent(code)}`;
    },
};
// Remove hardcoded path and dynamically create new models
// ... for each files
require(["vs/editor/editor.main"], async () => {
    /* global monaco */
    // Create the editor with some sample JavaScript code
    const editor = monaco.editor.create(document.getElementById("editor"), {
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

    await updateFileList({editor, monaco});
});
