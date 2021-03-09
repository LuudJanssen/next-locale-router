import { bootstrap } from "./bootstrap";
const configRequest = bootstrap();

const getConfig = async () => await configRequest;

export default getConfig;
export { withLocaleRouter } from "./with-locale-router";