import createNextServer from "next"
import { default as NextInternalServerType } from "next/dist/next-server/server/next-server"

/**
 * Augmented type of Next.js's internal server type. We expose the `nextConfig` property which is normally protected, but we need public to be able to "hack" it.
 */
export type NextServer = Omit<NextInternalServerType, "nextConfig"> & {
  nextConfig: NextInternalServerType["nextConfig"]
}

export type NextInstance = ReturnType<typeof createNextServer>
