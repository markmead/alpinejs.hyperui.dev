import { getComponents } from '@util/components'

import Callout from '@component/Callout'
import Content from '@component/Content'
import Container from '@component/Container'

export async function getStaticProps() {
  const componentItems = await getComponents()

  return {
    props: {
      componentItems,
    },
  }
}

export default function Page({ componentItems }) {
  return (
    <Container navItems={componentItems}>
      <Content>
        <h1>Code Examples and Guides on Functionality with Alpine JS</h1>

        <p>
          Alpine JS allows you to write DOM manipulation all in your HTML, Liquid, Blade etc. This
          website serves as a collection of examples of functionality that you may have to build in
          your next project.
        </p>

        <p>I have kept the styling to a minimum so that you can focus on the functionality.</p>

        <Callout>
          This is a new version of the website with a change in direction for content. Please be
          patient while I expand on the content.
        </Callout>
      </Content>
    </Container>
  )
}