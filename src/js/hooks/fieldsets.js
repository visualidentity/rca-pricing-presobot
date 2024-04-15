import _ from 'lodash';
import Requests from './utils/requests.js';
import SearchCache from './utils/search-cache.js';

// fields
import { agentCode } from './fieldsets/agent-code.js';

// events
import { onSave } from './fieldsets/on-save.js';

export default function(options) {
  const { Fieldset, Select} = options;

  return new Fieldset({
    fields: function({ data }) {
      const feedOptions = [
        {
          label: 'Production',
          value: 'v1-0-1'
        },
        {
          label: 'Staging',
          value: 'dev'
        }
      ];
      const viApiOptions = [
        {
          label: 'Production',
          value: 'dev'
        },
        {
          label: 'Staging',
          value: 'rea18303'
        }
      ];

      Requests.init(options, data);

      return [
        new Select({
          name: 'feed_host',
          label: 'Feed source',
          value: feedOptions[0].value,
          options: feedOptions,
          onSave: function({ value }) {
            return {
              context: {
                feed_host: value
              }
            };
          }
        }),
        new Select({
          name: 'vi_host',
          label: 'VI API source',
          value: viApiOptions[0].value,
          options: viApiOptions,
          onSave: function({ value }) {
            return {
              context: {
                vi_host: value
              }
            };
          }
        }),
        new Select(agentCode(options))
      ];
    },
    onSave
  });
}
