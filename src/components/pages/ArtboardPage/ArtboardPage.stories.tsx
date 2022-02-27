import { ComponentStory, ComponentMeta } from '@storybook/react'
import withMock from 'storybook-addon-mock'

import { ArtboardPage } from './ArtboardPage'

export default {
  title: 'Pages/ArtboardPage',
  component: ArtboardPage,
  decorators: [withMock],
  parameters: {
    layout: 'fullscreen',
    routerInitialEntries: ['/documents/123/artboards/1'],
    routePath: 'documents/:documentId/artboards/:index',
  },
  args: {
    routerInitialEntries: ['/documents/123/artboards/1'],
    routePath: 'documents/:documentId/artboards/:index',
  },
} as ComponentMeta<typeof ArtboardPage>

const Template: ComponentStory<typeof ArtboardPage> = args => (
  <ArtboardPage {...args} />
)

const ARTBOARD = {
  __typename: 'Artboard',
  files: [
    {
      __typename: 'File',
      height: 808,
      scale: 1,
      thumbnails: [
        {
          __typename: 'Thumbnail',
          height: null,
          url: 'https://resources-live.sketch.cloud/files/abbb4734-7963-414c-8f09-108988579905.png?Expires=1646226000&Signature=C9CmArlXyZfMbWVQWSn~5Mh2~SvQ1TUyzD-wnpBqtv5-Jh8cBXh9GNFvAjp1qvDkSfz7B5qEyQsi-hon9spa2tI-YNxjS5tfZHIs6RXnRfA3sxXw4HBBSj2WPc1OS4NgT0H9P8w2bF4Ot9KNOB55DKYzMRZB6xx~LhiLuLt8Mj4_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
          width: null,
        },
      ],
      url: 'https://resources-live.sketch.cloud/files/abbb4734-7963-414c-8f09-108988579905.png?Expires=1646226000&Signature=C9CmArlXyZfMbWVQWSn~5Mh2~SvQ1TUyzD-wnpBqtv5-Jh8cBXh9GNFvAjp1qvDkSfz7B5qEyQsi-hon9spa2tI-YNxjS5tfZHIs6RXnRfA3sxXw4HBBSj2WPc1OS4NgT0H9P8w2bF4Ot9KNOB55DKYzMRZB6xx~LhiLuLt8Mj4_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
      width: 606,
    },
  ],
  isArtboard: true,
  name: 'Hang',
}

export const Default = Template.bind({})
Default.parameters = {
  mockData: [
    {
      url: `${process.env.REACT_APP_API_URL}`,
      method: 'POST',
      status: 200,
      response: {
        data: {
          share: {
            __typename: 'Share',
            identifier: 'e40a5369-5662-5634-a786-099afdf1aaaf',
            version: {
              __typename: 'Version',
              document: {
                __typename: 'Document',
                artboards: {
                  __typename: 'Artboards',
                  entries: [
                    ARTBOARD,
                    ARTBOARD,
                    ARTBOARD,
                    ARTBOARD,
                    ARTBOARD,
                    ARTBOARD,
                    ARTBOARD,
                    ARTBOARD,
                    ARTBOARD,
                    ARTBOARD,
                    ARTBOARD,
                    ARTBOARD,
                  ],
                },
                name: 'Leave',
              },
            },
          },
        },
      },
    },
  ],
}
