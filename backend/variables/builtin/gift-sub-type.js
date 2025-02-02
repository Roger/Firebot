"use strict";

const {
    EffectTrigger
} = require("../../effects/models/effectModels");

const { OutputDataType, VariableCategory } = require("../../../shared/variable-constants");

let triggers = {};
triggers[EffectTrigger.EVENT] = ["twitch:subs-gifted", "twitch:community-subs-gifted"];
triggers[EffectTrigger.MANUAL] = true;

const model = {
    definition: {
        handle: "giftSubType",
        description: "The type of gifted subs (ie Tier 1, 2, 3).",
        triggers: triggers,
        categories: [VariableCategory.COMMON],
        possibleDataOutput: [OutputDataType.TEXT]
    },
    evaluator: (trigger) => {
        switch (trigger.metadata.eventData.subPlan) {
        case "Prime":
            return "Prime";
        case "1000":
            return "Tier 1";
        case "2000":
            return "Tier 2";
        case "3000":
            return "Tier 3";
        }

        return "";
    }
};

module.exports = model;
