import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ErrorPage } from './ErrorPage'

export default {
  title: 'Pages/ErrorPage',
  component: ErrorPage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ErrorPage>

const Template: ComponentStory<typeof ErrorPage> = args => (
  <ErrorPage {...args} />
)

export const Generic = Template.bind({})

export const WithProps = Template.bind({})
WithProps.args = {
  message: 'Something went wrong...',
  title: 'Error...',
}
