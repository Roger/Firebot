"use strict";

const effectManager = require("../../../../effects/effectManager");
const rollCredits = require("./roll-credits");
const spinWheel = require("./spin-wheel");

exports.registerEffects = () => {
    effectManager.registerEffect(rollCredits);
    effectManager.registerEffect(spinWheel);
};

exports.effects = [rollCredits, spinWheel];