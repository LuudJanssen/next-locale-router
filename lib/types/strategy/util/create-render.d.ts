import { URL } from "url";
import { IDomain } from "../../domain.interface";
import { ISubpath } from "../../subpath.interface";
import { ChainableRenderStrategy as Render } from "../chainable";
export declare const createRender: (url: URL, subpath: ISubpath, domain: IDomain) => Render;
