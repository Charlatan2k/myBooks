import { moduleMetadata } from '@storybook/angular';
import { FormRegisterComponent } from './form-register.component';

export default {
  title: 'Form Register', // The title for your component in Storybook
  decorators: [
    moduleMetadata({
      declarations: [FormRegisterComponent],
    }),
  ],
};

export const Default = () => ({
  component: FormRegisterComponent,
  template: `<app-form-register></app-form-register>`,
});
