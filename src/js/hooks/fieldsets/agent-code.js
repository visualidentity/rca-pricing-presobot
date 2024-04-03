import _ from 'lodash';
import Requests from '../utils/requests.js';
import SearchCache from '../utils/search-cache.js';
import { getAgentCodes } from '../utils/get-agent-codes.js';

const emptyState = () => {
  return {
    state: {
      agent_code: {
        options: [
          {
            label: 'Select a customer',
            value: ''
          }
        ],
        selectedValue: '',
        disabled: true
      }
    }
  };
};

export const agentCode = options => {
  return {
    name: 'agent_code',
    label: 'Agency Code',
    description:
      'Please contact your SPOT support team if you require assistance.',
    options: [{ label: 'Select customer', value: '' }],
    onValidate: ({ data, value }) => {
      if (!value) {
        return  {
          errors: ['Cannot create preso, no agency code available for this customer.', 'Please contact your SPOT support team if you require assistance.']
        }
      }
    },
    onSave: ({ data, value }) => {
      const url = `${data.urls.api}rea/agents/`;
      let agent = null;

      if (value !== '') {
        agent = SearchCache.find(url, { code: value });
        if (!agent) {
          const agentRequests = new Requests({
            url: `${url}${value}/`,
            data,
            options
          });

          return agentRequests
            .get()
            .then(results => {
              return {
                context: {
                  agent: results
                }
              };
            })
            .catch(error => {
              return {
                context: {
                  agent: {
                    code: value
                  }
                }
              };
            });
        }
      }

      return {
        context: {
          agent
        }
      };
    },
    onCustomersChange: ({ data, state }) => {
      if (!_.get(data, 'customers.0', null)) {
        return emptyState();
      }
      return getAgentCodes({ data, state }, options);
    },
    onLoad: ({ data, state }) => {
      if (!_.get(data, 'customers.0', null)) {
        return emptyState();
      }
      return getAgentCodes({ data, state }, options);
    }
  };
};
