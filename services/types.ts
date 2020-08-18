// A concern is business logic attached to an object
export type Concern = {
  kind: 'relationship' | 'route' | 'observe' | 'other'
}
export type Attribute = {
  name: string
  kind: 'text' | 'number' | 'checkbox' | 'radio' | 'email' | 'tel'
  value?: any
  defaultValue?: any
  concerns?: Concern[]
}
// A model is a business object persisted in a database table and
// exposed via RESTful interface
export type Model = {
  name: string
  concerns?: Concern[]
  attributes: Attribute[]
}
// Database attributes handle the overall behaviors and meta attached
// It is not meant to expose all the configuration a database provides.
export type DatabaseAttributes = {
  concerns?: Concern[]
  models?: Model[]
}

export type Database = {
  name: string
  id?: string // EIAB global namespace identifier
  attributes?: DatabaseAttributes[]
  models: Model[]
}
