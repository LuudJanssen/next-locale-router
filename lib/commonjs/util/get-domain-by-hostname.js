"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDomainByHostname = void 0;

require("core-js/modules/es.array.find.js");

var getDomainByHostname = function getDomainByHostname(domains, hostname) {
  return domains.find(function (domain) {
    return domain.hostname === hostname;
  });
};

exports.getDomainByHostname = getDomainByHostname;