import {getFile, getFileList} from "./client.js";

const hlStorageKey = "highlights";
const hlStorage = [];
/**
 * @returns {[]?}
 */
function getHl() {
    const raw = localStorage.getItem(hlStorageKey);
    try {
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

function saveHl() {
    localStorage.setItem(hlStorageKey, JSON.stringify(hlStorage));
}

function pushHl(...value) {
    hlStorage.push(...value);
    saveHl();
}

async function updateFileList(loadFileFn) {
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

        btn.addEventListener("click", () => {
            loadFileFn(path);
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

    const highlightRanges = (model, data, start, end) => {
        model.deltaDecorations(model.getAllDecorations(), [
            {
                range: new monaco.Range(
                    start.lineNumber,
                    start.column,
                    end.lineNumber,
                    end.column
                ),
                options: {
                    isWholeLine: false,
                    marginClassName: "markup-1",
                    className: "markup-1",
                    hoverMessage: {
                        value: Date() + "\n\n" + data,
                    },
                },
            },
        ]);
    };

    const loadFile = async (path, line, col) => {
        const {ok, data} = await getFile(path);
        // Turns out, monaco has its own models handler.
        // We will create new ones in case it was not handled by monaco

        if (ok) {
            const oldModel = monaco.editor.getModel(path);
            const model
                = oldModel
                ?? monaco.editor.createModel(data.content, data.type ?? "", path);
            editor.setModel(model);

            if (oldModel === null) {
                getHl()
                    ?.filter(hl => path === hl.path)
                    .forEach(({data, start, end}) =>
                        highlightRanges(model, data, start, end)
                    );
            }

            if (line) {
                const lineNumber = Number(line ?? 0);
                const column = Number(col ?? 0);
                editor.revealLineInCenter(lineNumber);
                editor.setPosition({column, lineNumber});
            }
        }
    };

    const goto = () => {
        const [file, line, col] = location.hash.slice(1).split(":");
        if (file) {
            loadFile(file, line, col);
        }
    };

    window.addEventListener("hashchange", goto);
    goto();

    editor.addAction({
        id: "write-comment",
        label: "Write a comment",
        contextMenuGroupId: "comment",
        contextMenuOrder: 10,
        run(ed) {
            const range = ed.getSelection();
            if (!range.isEmpty()) {
                // Ask for comment
                document.getElementById("modal-title").textContent = "Add a comment";
                const modal = document.getElementById("editor-modal");
                const callback = data => {
                    const model = ed.getModel();
                    const start = range.getStartPosition();
                    const end = range.getEndPosition();
                    pushHl({path: model.uri, data, start, end});
                    highlightRanges(model, data, start, end);
                };

                const submitBtn = document.getElementById("modal-submit");
                const submit = () => {
                    const modalData = document.getElementById("modal-data");
                    callback(modalData.value);
                    modalData.value = "";
                };

                submitBtn?.addEventListener("click", submit, {once: true});
                /* global $ */
                $(modal).on("hide.bs.modal", () => {
                    submitBtn?.removeEventListener("click", submit);
                });
                $(modal).modal("toggle");
            }
        },
    });

    await updateFileList(loadFile);
});
