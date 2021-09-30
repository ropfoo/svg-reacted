import { defaultTSX } from '../templates/defaultTSX';
import { nativeTSX } from '../templates/pdNativeTSX';
import { createWithHocTSX } from '../templates/withHocTSX';
import { getSetupJSON, template } from './getSetupJSON';

export const getTemplate = (data: string) => {
    const { templateType } = getSetupJSON();

    switch (templateType) {
        case template.HOC:
            return createWithHocTSX(data);

        case template.PD_NATIVE:
            return nativeTSX(data);

        default:
            return defaultTSX(data);
    }
};
