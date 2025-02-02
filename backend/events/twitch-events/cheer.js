"use strict";

const eventManager = require("../../events/EventManager");

exports.triggerCheer = (username, isAnonymous, bits, totalBits, cheerMessage = "") => {
    eventManager.triggerEvent("twitch", "cheer", {
        username,
        isAnonymous,
        bits,
        totalBits,
        cheerMessage
    });
};