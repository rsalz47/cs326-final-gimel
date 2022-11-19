import fs from "fs";
const {readdir, readFile} = fs.promises;

const baseFolder = "project_dir";

export async function getFileList() {
    const files = await readdir(baseFolder, {withFileTypes: true});
    const fileTypeMask = /\.(c|cpp|asm|s)$/i;
    const typeFilter = ext =>
        ext === "c" || ext === "cpp" || ext === "asm" ? ext
            : ext === "s" ? "asm"
                : null;
    return files
        .filter(entry => entry.isFile() && entry.name.match(fileTypeMask))
        .map(({name}) => ({
            name,
            path: `${name}`,
            type: typeFilter(name.toLowerCase().match(fileTypeMask)[1]),
        }));
}

export async function getFile(filePath) {
    const list = await getFileList();
    const searchResult = list.filter(({path}) => path === filePath);
    if (searchResult.length === 1) {
        return {
            content: await readFile(`${baseFolder}/${searchResult[0].path}`, {
                encoding: "utf-8",
            }),
            ...searchResult[0],
        };
    }

    return null;
}
