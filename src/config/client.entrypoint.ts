export { getRuntimeConfig as useConfig } from "./util/get-runtime-config"
export const withLocaleRouter = () => {}

import { getRuntimeConfig } from "./util/get-runtime-config"

const config = getRuntimeConfig()
export default config
