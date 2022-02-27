import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Loading } from './Loading'

export default {
  title: 'Shared/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>

const Template: ComponentStory<typeof Loading> = args => <Loading {...args} />

export const Default = Template.bind({})
