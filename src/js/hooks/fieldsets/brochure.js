import { getPDF } from '../utils/get-pdf.js';

export const brochure = superagent => {
  return {
    name: 'brochure',
    label: 'Brochure',
    allowedTypes: ['application/pdf'],
    onSave: function({ value, data }) {
      return getPDF({
        name: this.name,
        value,
        data,
        superagent
      });
    }
  };
};
