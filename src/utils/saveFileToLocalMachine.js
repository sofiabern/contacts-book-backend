import fs from 'node:fs/promises'
import path from "node:path"
import { BACKEND_HOST, UPLOAD_DIR } from '../constants/index.js';

export const saveFileToLocalMachine = async (file) => {
    const content = await fs.readFile(file.path);
    const newPath = path.join(UPLOAD_DIR, file.filename);
    await fs.writeFile(newPath, content);
    await fs.unlink(file.path);

return BACKEND_HOST + `/uploads/${file.filename}`;
};