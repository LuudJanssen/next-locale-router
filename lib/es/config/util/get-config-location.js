import findUp from "find-up";
import { CONFIG_FILENAME } from "../../constants/config-filename.constant";
import { logger } from "../../logger";
export const getConfigLocation = async () => {
  const location = await findUp(CONFIG_FILENAME);

  if (typeof location === "undefined") {
    throw logger.error(`Could not find a "${CONFIG_FILENAME}" config file in ${process.cwd} or any of its parent directories.`);
  }

  return location;
};