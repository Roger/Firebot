"use strict";

const effectManager = require("./effectManager");

exports.loadEffects = () => {
    // get effect definitions
    const playSoundEffect = require("./builtin/playSound");
    const chatEffect = require("./builtin/chat");
    const api = require("./builtin/api");
    const celebration = require("./builtin/celebration");
    const cooldowns = require("./builtin/cooldowns");
    const dice = require("./builtin/dice");
    const fileWriter = require("./builtin/fileWriter");
    const html = require("./builtin/html");
    const playVideo = require("./builtin/playVideo");
    const showEvents = require("./builtin/showEvents");
    const controlEmulation = require("./builtin/controlEmulation");
    const showImage = require("./builtin/showImage");
    const updateControl = require("./builtin/updateControl");
    const toggleConnection = require("./builtin/toggleConnection");
    const showText = require("./builtin/showText");
    const delay = require("./builtin/delay");
    const randomEffect = require("./builtin/randomEffect");
    const effectGroup = require("./builtin/effectGroup");
    const currency = require("./builtin/currency");
    const randomRedditImage = require("./builtin/randomRedditImage");
    const customVariable = require("./builtin/customVariable");
    const controlMouse = require('./builtin/controlMouse');
    const changeScene = require('./builtin/changeScene');
    const runCommand = require('./builtin/runCommand');

    // register them
    effectManager.registerEffect(playSoundEffect);
    effectManager.registerEffect(chatEffect);
    effectManager.registerEffect(api);
    effectManager.registerEffect(celebration);
    effectManager.registerEffect(cooldowns);
    effectManager.registerEffect(dice);
    effectManager.registerEffect(fileWriter);
    effectManager.registerEffect(html);
    effectManager.registerEffect(playVideo);
    effectManager.registerEffect(showEvents);
    effectManager.registerEffect(controlEmulation);
    effectManager.registerEffect(showImage);
    effectManager.registerEffect(updateControl);
    effectManager.registerEffect(toggleConnection);
    effectManager.registerEffect(showText);
    effectManager.registerEffect(delay);
    effectManager.registerEffect(randomEffect);
    effectManager.registerEffect(effectGroup);
    effectManager.registerEffect(currency);
    effectManager.registerEffect(randomRedditImage);
    effectManager.registerEffect(customVariable);
    effectManager.registerEffect(controlMouse);
    effectManager.registerEffect(changeScene);
    effectManager.registerEffect(runCommand);
};