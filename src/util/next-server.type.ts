import createNextServer from "next"
export { default as NextInternalServer } from "next/dist/next-server/server/next-server"

export type NextServer = ReturnType<typeof createNextServer>
