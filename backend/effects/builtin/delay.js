"use strict";

const { EffectCategory } = require('../../../shared/effect-constants');

const model = {
    definition: {
        id: "firebot:delay",
        name: "Delay",
        description: "Pause between effects",
        icon: "fad fa-stopwatch",
        categories: [EffectCategory.COMMON, EffectCategory.ADVANCED, EffectCategory.SCRIPTING],
        dependencies: []
    },
    globalSettings: {},
    optionsTemplate: `
        <eos-container header="Duration">
            <div class="input-group">
                <span class="input-group-addon" id="delay-length-effect-type">Seconds</span>
                <input ng-model="effect.delay" type="text" class="form-control" aria-describedby="delay-length-effect-type" type="text" replace-variables="number">
            </div>
        </eos-container>
    `,
    optionsController: $scope => {},
    optionsValidator: effect => {
        let errors = [];
        if (effect.delay == null || effect.delay.length < 1) {
            errors.push("Please input a delay duration.");
        }
        return errors;
    },
    onTriggerEvent: event => {
        return new Promise(resolve => {
            let { effect } = event;

            // wait for the specified time before resolving.
            setTimeout(() => {
                resolve(true);
            }, effect.delay * 1000);
        });
    }
};

module.exports = model;
