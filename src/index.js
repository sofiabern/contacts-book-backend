import { setupServer } from "./server.js";
import { initMongoConnection } from "./db/initMongoConnection.js";
import { createFolderIfNotExist } from "./utils/createFolderIfNotExist.js";
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from "./constants/index.js";
(async () => {
    await initMongoConnection();
    await createFolderIfNotExist(TEMP_UPLOAD_DIR);
    await createFolderIfNotExist(UPLOAD_DIR);
    setupServer();
})();