export { getRuntimeConfig as useConfig } from "./util/get-runtime-config"
export { withLocaleRouter } from "./with-locale-router"

import { bootstrap } from "./bootstrap"

const config = bootstrap()
export default config
