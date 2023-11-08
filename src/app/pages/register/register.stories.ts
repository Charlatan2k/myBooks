import { moduleMetadata } from '@storybook/angular';
import { RegisterComponent } from './register.component';

export default {
  title: 'Register', // The title for your component in Storybook
  decorators: [
    moduleMetadata({
      declarations: [RegisterComponent],
    }),
  ],
};

export const Default = () => ({
  component: RegisterComponent,
  template: `<app-register></app-register>`,
});
