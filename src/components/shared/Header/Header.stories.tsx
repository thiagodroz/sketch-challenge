import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import { Header } from './Header'

export default {
  title: 'Shared/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = args => <Header {...args} />

export const StringChildren = Template.bind({})
StringChildren.args = {
  children: 'Header component',
  onCloseRedirectPath: '',
}

const CustomHeaderContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ReactNodeChildren = Template.bind({})
ReactNodeChildren.args = {
  children: (
    <CustomHeaderContent>
      <div>Left</div>
      <div>Middle</div>
      <div>Right</div>
    </CustomHeaderContent>
  ),
  onCloseRedirectPath: '',
}

export const WithCloseButton = Template.bind({})
WithCloseButton.args = {
  children: 'Header component',
  onCloseRedirectPath: '/',
}
