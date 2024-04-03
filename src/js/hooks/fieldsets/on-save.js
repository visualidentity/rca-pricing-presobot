import _ from 'lodash';

export const onSave = ({ data }) => {
  const customerData = _.get(data, 'customers.0', {});

  const customer = _.pick(customerData, [
    'title',
    'agent_code',
    'logo_original'
  ]);

  const attendees = _.map(data.contacts, contact => {
    return {
      full_name: contact.fullName,
      first_name: contact.name_first,
      last_name: contact.name_last,
      email: contact.email,
      phone: contact.phone
    };
  });

  const context = { attendees, customer };

  return { context };
};
