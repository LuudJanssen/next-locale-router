"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDomainByHostname = void 0;
const getDomainByHostname = (domains, hostname) => {
    return domains.find((domain) => domain.hostname === hostname);
};
exports.getDomainByHostname = getDomainByHostname;
