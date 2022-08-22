import * as yup from "yup";

type RulesType = {
    type: string;
    params: Array<string | number>;
};

type InputType = {
    id: string;
    validationType: string;
    rules: RulesType[];
};

export default function yupSchemaGeneration(schema: { [x: string]: any }, config: InputType) {
    const { id, validationType, rules = [] } = config;

    if (!yup[validationType as keyof typeof yup]) {
        return schema;
    }

    let validator = (yup as any)[validationType]();

    rules.forEach((validation) => {
        const { params, type } = validation;
        if (!validator[type]) {
            return;
        }
        validator = validator[type](...params);
    });

    schema[id] = validator;

    return schema;
}
