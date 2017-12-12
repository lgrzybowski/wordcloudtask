import React from 'react'
import MainApp from '../../js/components/MainApp'
import renderer from 'react-test-renderer'

test('Check matching snapshot with component MainApp', () => {
  const component = renderer.create(
    <MainApp />
    )
  let jsonComponent = component.toJSON()
  expect(jsonComponent).toMatchSnapshot()
})
