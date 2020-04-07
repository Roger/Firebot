"use strict";

const replaceVariableManager = require("./replace-variable-manager");

exports.loadReplaceVariables = () => {
    [
        'active-chat-user-count',
        'active-mixplay-user-count',
        'arg',
        'array-length',
        'bot',
        'chat-message',
        'chat-messages',
        'commafy',
        'command-trigger',
        'concat',
        'control-active-state',
        'control-cool-down',
        'control-cost',
        'control-progress',
        'control-text',
        'control-tooltip',
        'costream',
        'count',
        'currency',
        'current-viewer-count',
        'custom-role-user-count',
        'custom-variable',
        'date',
        'donation-amount-formatted',
        'donation-amount',
        'donation-from',
        'donation-message',
        'ensure-number',
        'file-line-count',
        'game',
        'gift-receiver-user',
        'math',
        'max-ad-break-length',
        'mixplay-interactions',
        'number-ceil',
        'number-floor',
        'number-max',
        'number-min',
        'number-round',
        'patronage-earned',
        'patronage-next-milestone-reward',
        'patronage-next-milestone-target',
        'patronage-previous-milestone-reward',
        'patronage-previous-milestone-target',
        'profile-page-bytebin-token',
        'quote',
        'random-active-viewer',
        'random-number',
        'random-viewer',
        'random-mixplay-user',
        'random-active-mixplay-user',
        'random-reddit-image',
        'random-dad-joke',
        'random-advice',
        'read-api',
        'read-file',
        'skill-cost',
        'skill-currency-type',
        'skill-gif-url',
        'skill-name',
        'skill-sticker-url',
        'stream-title',
        'streamer',
        'sub-months',
        'target',
        'text-length',
        'text-lowercase',
        'text-scramble',
        'text-uppercase',
        'text-capitalize',
        'text-encode-for-url',
        'text-split',
        'text-trim',
        'textbox-input',
        'time',
        'top-currency',
        'top-view-time',
        'user-avatar-url',
        'user-level',
        'user-next-level-hearts',
        'user-rank-badge-url',
        'user-total-hearts',
        'user',
        'view-time'
    ].forEach(filename => {
        let definition = require(`./builtin/${filename}.js`);
        replaceVariableManager.registerReplaceVariable(definition);
    });
};
