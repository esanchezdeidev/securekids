import {moduleMetadata, Story, Meta} from '@storybook/angular';
import {MatIconModule} from '@angular/material/icon';

import {CommonModule} from '@angular/common';

import {action} from '@storybook/addon-actions';

import {ListComponent} from 'src/app/components/list/list.component';

export default {
  component: ListComponent,
  decorators: [
    moduleMetadata({
      declarations: [ListComponent],
      imports: [CommonModule, MatIconModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Task',
} as Meta;

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),

};

const Template: Story<ListComponent> = args => {
  return ({
    component: ListComponent,
    props: {
      ...args,
      onPinTask: actionsData.onPinTask,
      onArchiveTask: actionsData.onArchiveTask,
    },
  });
};


export const Default = Template.bind({});
Default.args = {
  datealarms: [{
    hour: '15:00',
    description: 'MON MAR MER JEU VEN',
   // devices:'T7K_PLUS',
  },
    {
      hour: '12:13',
      description: 'DIM MON MAR MER JEU VEN SAM',
     // devices:'Android SD',
    },
    {
      hour: '12:00',
      description: '20-08-2019',
     // devices:'SM-G950F',

    },
    {
      hour: '17:52',
      description: '22-08-2019',
     // devices:'SM-G950F',
    }
  ],
  devices: ['T7K_PLUS', 'Android SD', 'SM-G950F', 'SM-G950F', ],
};
