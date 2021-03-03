import { RequestHandler } from "express";
import Server from "next/dist/next-server/server/next-server";
import { Config } from "../config/config.class";
export declare const createMiddleware: (config: Config, app: Server) => RequestHandler;
