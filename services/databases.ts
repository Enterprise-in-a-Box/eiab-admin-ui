import { Database } from '~/services/types.ts'

export function Databases() {
  function index(): Database[] {
    return [
      {
        name: 'Mock Database 1',
        models: [
          {
            name: 'Mock Model 1',
            attributes: [
              {
                name: 'Title',
                kind: 'text',
              },
            ],
          },
        ],
      },
    ]
  }

  function show() {
    return null
  }
  function create() {
    return null
  }
  function update() {
    return null
  }
  function destroy() {
    return null
  }

  return {
    index,
    show,
    create,
    update,
    destroy,
  }
}
