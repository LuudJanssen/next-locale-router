// Trick Typescript into copying package.json file
import "./package.json"

export * from "./client.entrypoint"
export { default } from "./client.entrypoint"
